const ApiKey = '4acf5568e2msh1a281ead271c979p17a3f2jsnb33b8ce59075';

const YelpAPI = {
  search(business, location, sortBy) {
    const url = `https://api.yelp.com/v3/businesses/search?term=${business}&location=${location}&sort_by=${sortBy}`;
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${ApiKey}`
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
        // console.log(response.json())
      }
      throw new Error('Request failed!')
    })
    .then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }))
      }
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export default YelpAPI