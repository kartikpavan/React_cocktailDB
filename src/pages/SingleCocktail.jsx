import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

function SingleCocktail() {
  const [loading, setLoading] = React.useState(true);
  const [cocktail, setCocktail] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    setLoading(true);
    fetch(url + id)
      .then((res) => res.json())
      .then((data) => {
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          console.log(data.drinks[0]);
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;
  return (
    <section className="flex flex-col gap-20 mb-20">
      <div className="flex flex-col items-center gap-4">
        <Link to="/" className="btn btn-primary rounded-none ">
          {`<-`} Back Home
        </Link>
        <h1 className="font-bold text-3xl">{name}</h1>
      </div>
      <div className="card rounded-t-none rounded-lg shadow-lg w-96 mx-auto grid grid-cols-1 xl:w-1/2 xl:grid-cols-2 lg:w-1/2 lg:grid-cols-2   ">
        <div>
          <img src={image} alt={name} width={400} />
        </div>
        <div className="m-3">
          <div>
            <span className="badge badge-secondary rounded-md text-xl font-semibold  m-2 p-2">
              Name :
            </span>
            <span className="text-xl">{name}</span>
          </div>
          <div>
            <span className="badge badge-secondary rounded-md text-xl font-semibold  m-2 p-2">
              Category :
            </span>
            <span className="text-xl">{category}</span>
          </div>
          <div>
            <span className="badge badge-secondary rounded-md text-xl font-semibold  m-2 p-2">
              Info :
            </span>
            <span className="text-xl">{info}</span>
          </div>
          <div>
            <span className="badge badge-secondary rounded-md text-xl font-semibold  m-2 p-2">
              Glass :
            </span>
            <span className="text-xl">{glass}</span>
          </div>
          <div>
            <span className="badge badge-secondary rounded-md text-xl font-semibold  m-2 p-2">
              Instructions :
            </span>
            <div className="text-xl ml-2 px-2">{instructions}</div>
          </div>
          <div>
            <span className="badge badge-secondary rounded-md text-xl font-semibold  m-2 p-2">
              Ingredients :
            </span>
            <div className="text-xl ml-2 px-2">
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleCocktail;
