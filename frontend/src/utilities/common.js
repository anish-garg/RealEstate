export const updateFav = (id, favourites) => {
    if (favourites.includes(id)) {
      return favourites.filter((resId) => resId !== id);
    } else {
      return [...favourites, id];
    }
  };
  
  export const checkFav = (id, favourites) => {
    return favourites?.includes(id) ? "#fa3e5f" : "white";
  };
  