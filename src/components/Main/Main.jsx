import React, { useState } from "react";
import CampersList from "../../CampersList/CampersList.jsx";
import campersData from "../../../data/campers.json";
import SearchBar from "../../SearchBar/SearchBar.jsx";
import styles from "./main.module.css";

const Main = ({ visibleAds, loadMoreAds }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleLoadMoreAds = () => {
    loadMoreAds();
    setIsButtonVisible(false);
  };

  return (
    <main className={styles.sectionCatalog}>
      <div className={styles.leftContent}>
        <SearchBar className={styles.searchBar} />
      </div>
      <div className={styles.rightContent}>
        <CampersList className={styles.wrap} campers={campersData.slice(0, visibleAds)} />
        {isButtonVisible && campersData.length > visibleAds && (
          <button className={styles.btn} onClick={handleLoadMoreAds}>
            Load more
          </button>
        )}
      </div>
    </main>
  );
};

export default Main;
