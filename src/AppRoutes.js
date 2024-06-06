// import styles from "./app.modules.css";
import "./styles/styles.css";
// import Header from './components/Header/Header';
// import Main from './components/Main/Main';
// import Footer from './components/Footer/Footer';
// import MainMenu from "./components/MainMenu/MainMenu";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import FavoritePage from "./Pages/FavoritePage/FavoritePage.jsx";
import CatalogPage from "./Pages/CatalogPage/CatalogPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage.jsx";
// import Loader from "./components/Loader/Loader.jsx";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";

const AppRoutes = () => {
  return (
    <>
      {/* <Loader />
      <MainMenu /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="favorites" element={<FavoritePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {/* <Header />
      <Main className="app" />
      <Footer /> */}
    </>
  );
};

export default AppRoutes;
