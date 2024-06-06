import React, { useState, useEffect } from "react";
import CampersList from "../../components/CampersList/CampersList";
import styles from "./favorite-page.module.css"
const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFromFavorites = (name) => {
    const updatedFavorites = favorites.filter((fav) => fav.name !== name);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (favorites.length === 0) {
    return <p className={styles.txt} >No favorite campers found.</p>;
  }

  return (
    <div>
      <h1>Favorite Campers</h1>
      <CampersList campers={favorites} removeFromFavorites={removeFromFavorites} />
    </div>
  );
};

export default FavoritePage;
