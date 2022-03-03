import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

function CocktailList() {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="text-center mx-auto font-semibold text-3xl">
        No Cocktails matched your Search Criteria
      </h2>
    );
  }

  return (
    <section>
      <h2 className="w-1/2 xl:w-2/12 mx-auto py-2 text-center mb-8 text-3xl font-semibold ">
        COCKTAILS
      </h2>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default CocktailList;
