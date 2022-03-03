import React from 'react';
import { Link } from 'react-router-dom';

function Cocktail({ image, id, info, glass, name }) {
  return (
    <section>
      <div className=" shadow-xl rounded-md w-96 mx-auto xl:w-80 lg:w-80 md:w-80">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="p-6">
          <h3 className="font-bold text-2xl my-1">{name}</h3>
          <h4 className="tracking-widest font-semibold text-lg">{glass}</h4>
          <p className="text-gray-400">{info}</p>
          <div class="card-actions justify-end">
            <Link to={`/cocktail/${id}`} class="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cocktail;
