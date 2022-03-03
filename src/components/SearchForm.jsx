import React from 'react';
import { useGlobalContext } from '../context';

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  const searchCocktail = (e) => {
    setSearchTerm(searchValue.current.value);
  };
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-1 mb-8 gap-8 ">
      <div className="mx-auto">
        <div className="Card shadow-lg px-8 py-6">
          <form onSubmit={submitHandler} className="form-control">
            {/* <p className="card-title py-2 text-green-800">
              Search for your Favorite Cocktail{' '}
            </p> */}
            <input
              type="text"
              ref={searchValue}
              onChange={searchCocktail}
              placeholder="Search for your Favorite Cocktails"
              className="rounded-sm w-[500px] pr-40 bg-zinc-200 input input-lg text-green-800 text-xl font-semibold"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
