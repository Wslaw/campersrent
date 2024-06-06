import React, { useState, useEffect } from "react";
import styles from "./loader.module.css";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading && (
      <div className={styles.loaderContainer}>
        <div className={styles.loaderElement} />
      </div>
    )
  );
};

export default Loader;
