import React from 'react';

function About() {
  return (
    <div className=" flex items-center justify-center h-1/2  mt-10">
      <div className="card-body items-center text-left">
        <h1 className="text-6xl mb-4"> CocktailDB</h1>
        <p className="mb-4 text-2xl font-light">
          A React App to search Cocktail see drink Details.
        </p>
        <p className="text-gray-400 text-lg">
          Version : <span className="text-primary">1.0.0</span>
        </p>
        <p className="text-gray-400 text-lg">
          Contact :
          <span className="text-primary">
            <a
              href="https://twitter.com/kartik_im"
              target="_blank"
              rel="noreferrer"
            >
              @kartik_im
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
