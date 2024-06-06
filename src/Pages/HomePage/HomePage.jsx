import styles from "./home-page.module.css";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
    
    return (
      <div className={styles.container}>
        <Loader/>
        <h1 className={styles.title}>-Campers Rent-</h1>
        <div className={styles.wrap}>
          <div className={styles.img}></div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p>Привіт і ласкаво просимо на сайт "CampersRent"!</p>
            </li>
            <li className={styles.item}>
              <p>
                Ви обрали правильну компанію для оренди кемперів в Україні з ряду причин: <br />
              </p>
            </li>
            <li className={styles.item}>
              <p>1. Широкий вибір кемперів для будь-яких потреб та бюджету.</p>
            </li>
            <li className={styles.item}>
              <p>2. Зручний і простий процес бронювання та платежів.</p>
            </li>
            <li className={styles.item}>
              <p>3. Якісний сервіс та підтримка від нашої команди.</p>
            </li>
            <li className={styles.item}>
              <p>4. Гарантія безпеки та надійності кожного кемперу.</p>
            </li>
            <li>
              <p> 5. Широкий вибір моделей кемперів для різних потреб.</p>
            </li>
            <li>
              <p> 6. Комфорт та безпека під час вашої подорожі.  </p>
            </li>
            <li>
              <p> 7. Привітний та професіональний персонал, готовий вам завжди допомогти.  </p>
            </li>
            <li>
              <p> 8. Конкурентні ціни та зручні умови оренди. Ще раз ласкаво просимо до CampersRent! 🚐 </p>
            </li>
          </ul>
        </div>

        <Footer/>
      </div>
    );
};
export default HomePage;
