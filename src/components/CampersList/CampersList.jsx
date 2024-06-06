import React from "react";
import CampersListItem from "./CampersListItem";
import styles from "./campersList.module.css";

const CampersList = ({ campers, removeFromFavorites }) => {
  return (
    <div className={styles.list}>
      <ul className={styles.campersList}>
        {campers.map((camper) => (
          <CampersListItem
            key={camper.name}
            name={camper.name}
            price={camper.price}
            gallery={camper.gallery}
            rating={camper.rating}
            location={camper.location}
            adults={camper.adults}
            transmission={camper.transmission}
            engine={camper.engine}
            description={camper.description}
            reviews={camper.reviews}
            details={camper.details}
            removeFromFavorites={removeFromFavorites} 
          />
        ))}
      </ul>
    </div>
  );
};

export default CampersList;
