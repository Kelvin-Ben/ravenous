import { useState } from "react";

const SearchBar = () => {
  const [business, setBusiness] = useState("");
  const [location, setLocation] = useState("");
  const [filter, setFilter] = useState("best-match");
  const [activeButton, setActiveButton] = useState("");

  const handleBusinessChange = (e) => setBusiness(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  
  function handleFilter(filterType){
    setFilter(filterType);
    setActiveButton(filterType);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!business || !location) return
    alert(`Searching Yelp with ${business}, ${location}, ${filter}`)
  }

  return (
    <div className="relative w-full flex flex-col">
      <div className=" w-[50%] mx-auto my-10 flex justify-around items-center">
        <button
          className={`py-[.5rem] px-[.5rem] w-[20%] capitalize font-bold text-white hover:text-yellow-600 ${
            activeButton === "best-match" ? "border-b-2 border-yellow-600" : ""
          }`}
          onClick={() => handleFilter("best-match")}
        >
          best <span class="block">match</span>
        </button>
        <button
          className={`py-[.5rem] px-[.5rem] w-[20%] capitalize font-bold text-white hover:text-yellow-600 ${
            activeButton === "highest-rated"
              ? "border-b-2 border-yellow-600"
              : ""
          }`}
          onClick={() => handleFilter("highest-rated")}
        >
          highest <span class="block">rated</span>
        </button>
        <button
          className={`py-[.5rem] px-[.5rem] w-[20%] capitalize font-bold text-white hover:text-yellow-600 ${
            activeButton === "most-reviewed"
              ? "border-b-2 border-yellow-600"
              : ""
          }`}
          onClick={() => handleFilter("most-reviewed")}
        >
          most <span class="block">reviewed</span>
        </button>
      </div>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="w-[80%] flex justify-around mb-10">
          <input
            type="text"
            className="w-[40%] h-[3rem] rounded pl-[2rem] focus:border-none focus:outline-none text-black focus:font-normal"
            placeholder="Search Businesses"
            onChange={handleBusinessChange}
          />
          <input
            type="text"
            className="w-[40%] rounded pl-[2rem] capitalize focus:border-none focus:outline-none"
            placeholder="where?"
            onChange={handleLocationChange}
          />
        </div>
        <button type="submit" className="h-[3rem] bg-yellow-500 hover:bg-yellow-600 capitalize font-bold text-white text-2xl py-[1.rem] px-[2.5rem] rounded">
          let's go
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
