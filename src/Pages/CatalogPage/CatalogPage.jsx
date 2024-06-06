import React, { useState } from "react";
import styles from "./catalog-page.module.css";
import Main from "../../components/Loader/Main/Main.jsx";
// import Footer from "../../components/Footer/Footer.jsx";
import Loader from "../../components/Loader/Loader.jsx";

const CatalogPage = () => {
  const [visibleAds, setVisibleAds] = useState(4);

  const loadMoreAds = () => {
    setVisibleAds((prevVisibleAds) => prevVisibleAds + 4);
  };

  return (
    <div className={styles.pageContainer}>
      <Loader />
      <Main className="app" visibleAds={visibleAds} loadMoreAds={loadMoreAds} />
      {/* <Footer /> */}
    </div>
  );
};
export default CatalogPage;
