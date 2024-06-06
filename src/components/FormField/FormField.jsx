import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./formfield.module.css";
import Icon from "../Icon/Icon";

const FormField = () => {
  const [startDate, setStartDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    // Проверяем валидность формы
    const formIsValid = name && email && startDate && comment;
    setIsFormValid(formIsValid);
  }, [name, email, startDate, comment]);

  const handleIconClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
    if (!isCalendarOpen && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      console.log("Form is valid and ready for submission");
      // Отправка данных формы
      form.submit();
    } else {
      form.reportValidity();
    }
  };

  return (
    <form className={styles.formfield} onSubmit={handleSubmit} noValidate>
      <div className={styles.wraptext}>
        <h2 className={styles.title}>Book your campervan now</h2>
        <p className={styles.text}>Stay connected! We are always ready to help you.</p>
      </div>

      <div className={styles.formGroup}>
        <InputWithIcon icon="icon-user" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required name="name" />
        <InputWithIcon icon="icon-email" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required name="email" />
        <InputWithIcon icon="icon-calendar" placeholder="Booking date" onClick={handleIconClick} defaultValue={startDate ? startDate.toLocaleDateString() : ""} ref={inputRef} required name="booking_date" />
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} onClickOutside={() => setIsCalendarOpen(false)} open={isCalendarOpen} className={styles.calendar} required />
        <div className={styles.inputGroup}>
          <textarea className={styles.formControl} placeholder="Comment" aria-label="Comment" id="comment" aria-describedby="comment-description" value={comment} onChange={(e) => setComment(e.target.value)} name="comment" required />
        </div>
      </div>

      <button className={styles.btn} type="submit" disabled={!isFormValid}>
        <span className={styles.span}>Search</span>
      </button>
    </form>
  );
};

const InputWithIcon = React.forwardRef(({ icon, placeholder, onClick, value, onChange, type, name, required, defaultValue }, ref) => (
  <div className={styles.inputGroup}>
    <input type={type || "text"} className={styles.formControl} placeholder={placeholder} value={value} onChange={onChange} ref={ref} name={name} required={required} defaultValue={defaultValue} />
    <Icon name={icon} className={styles.icon} onClick={onClick} />
  </div>
));

export default FormField;
