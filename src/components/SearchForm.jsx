import React from 'react';
import { useGlobalContext } from '../context';
function SearchForm() {
  const { setSearchTerm } = useGlobalContext();

  return (
    <div className="grid grid-cols-1 xl:grid-cols-1 mb-8 gap-8 ">
      <div className="mx-auto">
        <form action="" className="form-control">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Cocktails"
              className="w-[500px] pr-40 bg-zinc-200 input input-lg text-black"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg btn-primary italic"
            >
              GO
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
