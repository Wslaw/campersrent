import React from "react";
import styles from "./search-bar.module.css";
import Icon from "../Icon/Icon.jsx";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment.jsx";
import VehicleType from "../VehicleType/VehicleType.jsx";

const SearchBar = () => {
  return (
    <div className={styles.sectionSearchBar}>
      <div className={styles.sbLoc}>
        <p className={styles.locationText}>Location</p>
        <div className={styles.inputWrapper}>
          <Icon name="icon-location" className={styles.iconLocation} />
          <input className={styles.location} placeholder="City" id="cityInput" name="city" aria-label="Enter city"></input>
        </div>
      </div>
      <p className={styles.filterText}>Filters</p>
      <div className={styles.sbVehicle}>
        <VehicleEquipment />
      </div>
      <div className={styles.sb}>
        <VehicleType />
      </div>
    </div>
  );
};

export default SearchBar;
