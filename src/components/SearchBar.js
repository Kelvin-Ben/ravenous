const SearchBar = () => {
  return (
    <div className='relative w-full flex flex-col'>
      <div className=" w-[40%] mx-auto my-10 flex justify-around items-center">
        <button className="py-[.5rem] px-[.5rem] capitalize font-bold text-white hover:">best match</button>
        <button className="py-[.5rem] px-[.5rem] capitalize font-bold text-white">highest rated</button>
        <button className="py-[.5rem] px-[.5rem] capitalize font-bold text-white">most reviewed</button>
      </div>
      <form className='flex flex-col items-center'>
        <div className='w-[80%] flex justify-around mb-10'>
          <input type='text' className='w-[40%] h-[3rem] rounded pl-[2rem] focus:border-none focus:outline-none text-black focus:font-normal' placeholder='Search Businesses' />
          <input type='text' className='w-[40%] rounded pl-[2rem] capitalize focus:border-none focus:outline-none' placeholder='where?' />
        </div>
        <button className='h-[3rem] bg-yellow-600 capitalize font-bold text-white text-2xl py-[1.rem] px-[2.5rem] rounded'>let's go</button>
      </form>
    </div>
  )
}

export default SearchBar