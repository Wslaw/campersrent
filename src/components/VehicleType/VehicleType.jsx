import React from "react";
import styles from "./vehicle-type.module.css";
import Icon from "../Icon/Icon";

const vehicleTypes = [
  { id: "icon-camper1", label: "Van" },
  { id: "icon-camper2", label: "Fully Integrated" },
  { id: "icon-camper3", label: "Alcove" },
];

const VehicleType = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Vehicle Type</h3>
      <div className={styles.iconLine}>
        <Icon name="icon-line" width={360} height={2} />
      </div>
      <div className={styles.radioButtons}>
        {vehicleTypes.map((type) => (
          <div key={type.id} className={styles.radioButtonContainer}>
            <input type="radio" id={type.id} name="vehicleType" className={styles.radioButton} />
            <label htmlFor={type.id} className={styles.radioButtonLabel}>
              <Icon className={styles.icon} name={type.id} width={48} height={28} />
              <span className={styles.radioButtonText}>{type.label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleType;
