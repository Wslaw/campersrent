import React, { forwardRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import Icon from "../Icon/Icon";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

const Modal = forwardRef(({ isOpen, onClose, camper }, ref) => {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    } else {
      document.removeEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const { name, price, gallery, rating, location, description, reviews } = camper;
  const reviewText = `${rating} (${reviews.length} Reviews)`;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{name}</h2>
          <Icon name="icon-close" className={styles.iconClose} onClick={onClose} />
        </div>
        <div className={styles.modalContent}>
          <div className={styles.modalInfo}>
            <div className={styles.modalRating}>
              <Icon name="icon-star" className={styles.iconStar} />
              <p className={styles.textRew}>{reviewText}</p>
            </div>
            <div className={styles.modalLocation}>
              <Icon name="icon-location" className={styles.iconLocation} />
              <p className={styles.textLocation}>{location}</p>
            </div>
          </div>
          <p className={styles.modalPrice}>€ {price},00</p>
          <div className={styles.modalGallery}>
            {gallery.map((src, index) => (
              <img key={index} src={src} alt={`${name} ${index + 1}`} className={styles.modalImage} />
            ))}
          </div>
          <p className={styles.modalDescription}>{description}</p>
          <div className={styles.modalButtons}>
            <button className={styles.modalButton} onClick={() => handleTabClick("features")}>
              Features
            </button>
            <button className={styles.modalButton} onClick={() => handleTabClick("reviews")}>
              Reviews
            </button>
          </div>
          {activeTab === "features" && <Features ref={ref} camperId={camper._id} />} 
          {activeTab === "reviews" && <Reviews ref={ref} reviews={reviews} />}
          <hr size="3px" width="500px" align="left"></hr>
        </div>
      </div>
    </div>,
    document.body
  );
});

export default Modal;
