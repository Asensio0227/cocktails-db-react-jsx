import React, {useContext, useState,useEffect, useCallback} from 'react';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  const getCocktails =useCallback( async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
      const {drinks}=data;
      if (drinks) {
        const newCocktail = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcohilic,
            strGlass,
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            img: strDrinkThumb,
            info: strAlcohilic,
            glass: strGlass,
          }
        });
        setCocktails(newCocktail)
        setIsLoading(false);
      } else {
        setCocktails([])
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  },[searchTerm])
  useEffect(() => {
    getCocktails()
  }, [searchTerm, getCocktails]);

  return (
    <AppContext.Provider value={{
      isLoading,
      setSearchTerm,
      cocktails,
    }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext };