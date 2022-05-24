import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import ErrorBoundary from '../ErrorBoundary'

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktails() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log(data);
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: img,
            strCategory: category,
            strInstructions: instructions,
            strAlcoholic: info,
            strGlass: glass,
            Ingredients1,
            Ingredients2,
            Ingredients3,
            Ingredients4,
            Ingredients5,
          } = data.drinks[0];
          const ingredients = [
            Ingredients1,
            Ingredients2,
            Ingredients3,
            Ingredients4,
            Ingredients5,
          ]
          const newCocktails = {
            name,
            img
            , category,
            ingredients,
            instructions,
            info,
            glass
          }
          setCocktail(newCocktails)
          setLoading(false);
        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
    getCocktails()
  }, [id])
  
  if (loading) {
    return(
      <main>
        <Loading/>
      </main>
    )
  }

  if (!cocktail) {
    return (
      <main>
        <h2 className="section-title">
          no cocktail to display
        </h2>
       </main>
    )
  } else {
    const {
      name,
      img,
      category,
      instructions,
      info,
      glass,
      ingredients
    } = cocktail;
    
    return (
      <ErrorBoundary>
        <section className="cocktail-section section">
          <Link to="/" className="btn btn-primary">
            back home
          </Link>
          <h2 className="section-title">{name}</h2>
          <div className="drink">
            <div>
              <img src={img} alt={name} />
            </div>
            <div className="drink-info">
              <p>
                <span className="drink-data">name : </span>
                {name}
              </p>
              <p>
                <span className="drink-data">category : </span>
                {category}
              </p>
              <p>
                <span className="drink-data">info : </span>
                {info}
              </p>
              <p>
                <span className="drink-data">glass : </span>
                {glass}
              </p>
              <p>
                <span className="drink-data">instructions : </span>
                {instructions}
              </p>
              {/* <p>
              <span className="drink-data">ingredients : </span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : item
              })};
            </p> */}
            </div>
          </div>
        </section>
      </ErrorBoundary>
    );
  };
};
