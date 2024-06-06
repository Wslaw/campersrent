import React from "react";
import { Outlet } from "react-router-dom";
import MainMenu from "../MainMenu/MainMenu";
import styles from "./shared-layout.module.css";

const SharedLayout = () => {
  return (
    <div className={styles.container}>
      <MainMenu />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
