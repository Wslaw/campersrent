import React, { useState } from "react";
import styles from "./vehicle-equipment.module.css";
import Icon from "../Icon/Icon";

const equipments = [
  { id: "icon-windy", label: "AC" },
  { id: "icon-transmission", label: "Automatic" },
  { id: "icon-food", label: "Kitchen" },
  { id: "icon-tv", label: "TV" },
  { id: "icon-shower", label: "Shower/WC" },
];

const VehicleEquipment = () => {
  const [checkedItems, setCheckedItems] = useState(Array(equipments.length).fill(false));

  const handleCheckboxChange = (index) => {
    setCheckedItems((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Vehicle Equipment</h3>
      <div className={styles.iconLine}>
        <Icon name="icon-line" width={360} height={2} />
      </div>
      <div className={styles.checkboxButtons}>
        {equipments.map((equipment, index) => (
          <button key={equipment.id} className={`${styles.checkboxButton} ${checkedItems[index] ? styles.checked : ""}`} onClick={() => handleCheckboxChange(index)}>
            <input type="checkbox" id={equipment.id} checked={checkedItems[index]} readOnly />
            <label htmlFor={equipment.id}>
              <Icon className={styles.icon} name={equipment.id} width={20} height={20} onClick={() => handleCheckboxChange(index)} />
              <span className={styles.checkboxButtonText} onClick={() => handleCheckboxChange(index)}>
                {equipment.label}
              </span>
            </label>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VehicleEquipment;
