import React, { forwardRef, useEffect } from "react";
import campersData from "../../data/campers.json";
import FormField from "../FormField/FormField";

const Features = forwardRef((props, ref) => {
  const { camperId } = props;
  const camper = campersData.find((item) => item._id === camperId);

  useEffect(() => {
    // Логика, если необходимо
  }, []); // Пустой массив зависимостей, чтобы запустить useEffect только при монтировании

  if (!camper) {
    return null; // Если кемпер не найден, вернуть null
  }

  const features = [
    { key: "adults", label: "Adults" },
    { key: "transmission", label: "Transmission" },
    { key: "airConditioner", label: "Air Conditioner", format: (value) => (value >= 1 ? "AC" : "") },
    { key: "engine", label: "Engine" },
    { key: "kitchen", label: "Kitchen" },
    { key: "beds", label: "Beds" },
    { key: "CD", label: "CD", format: (value) => (value >= 1 ? "CD" : "") },
    { key: "radio", label: "Radio", format: (value) => (value >= 1 ? "Radio" : "") },
    { key: "hob", label: "Hob" },
  ];

  return (
    <div>
      <div className="features" ref={ref}>
        <ul className="featuresList">
          {features.map((feature) => (
            <li key={feature.key} className="featureItem">
              <span className="featureLabel">{feature.label}</span>
              <span className="featureValue">{feature.format ? feature.format(camper.details[feature.key]) : camper.details[feature.key]}</span>
            </li>
          ))}
        </ul>
        <div className="vehicleDetails">
          <h3 className="detailsTitle">Vehicle Details</h3>
          <ul className="detailsList">
            <li>
              <span>Form:</span> <span>{camper.form}</span>
            </li>
            <li>
              <span>Length:</span> <span>{camper.length}</span>
            </li>
            <li>
              <span>Width:</span> <span>{camper.width}</span>
            </li>
            <li>
              <span>Height:</span> <span>{camper.height}</span>
            </li>
            <li>
              <span>Tank:</span> <span>{camper.tank}</span>
            </li>
            <li>
              <span>Consumption:</span> <span>{camper.consumption}</span>
            </li>
          </ul>
        </div>
      </div>
      <FormField />
    </div>
  );
});

export default Features;
