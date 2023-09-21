import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from "react";
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');


import { RootState, AppDispatch } from '../../../app/store';
import styles from "./payCurs.module.css";
import { buyCourse } from '../../../features/userSlice';

const RentForm = ({ isOpen, closeModal, formData, handleInputChange }) => {

  const dispatch = useDispatch<AppDispatch>();
  const userData = useSelector((state: RootState) => state.user);
  const token = useSelector((state:RootState) =>state.application.token )
  const [fieldsFilled, setFieldsFilled] = useState({
    city: true,
    rentalDate: true,
    phoneNumber: true,
    paymentMethod: true,
  });
  

  const handleSubmit1 = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.city || !formData.rentalDate || !formData.phoneNumber || !formData.paymentMethod) {
      alert('Пожалуйста, заполните все поля');
     
      return;
  }
    dispatch(buyCourse({ userId: ownid.userId, courseType: 'basicCourse' }));
  }
  const handleSubmit2 = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.city || !formData.rentalDate || !formData.phoneNumber || !formData.paymentMethod) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
    dispatch(buyCourse({ userId: ownid.userId, courseType: 'plusCourse'}));
  }
  const handleSubmit3 = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.city || !formData.rentalDate || !formData.phoneNumber || !formData.paymentMethod) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
    dispatch(buyCourse({ userId: ownid.userId, courseType: 'proCourse' }));
    
  }

  function parseJWT(tokenUser) {
    if (typeof tokenUser !== "string") {
      // Обработка ошибки или возврат значения по умолчанию
      return null;
    }
    const base64Url = tokenUser.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }
  const ownid = parseJWT(token);
  return (
    <>
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Покупка курса"
    >
      <h2>Курс</h2>
      <form>
        <div className={`${styles.formGroup} ${!fieldsFilled.city && styles.error}`}>
          <label htmlFor="city">Город</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange()}
          />
        </div>
          <div className={`${styles.formGroup} ${!fieldsFilled.rentalDate && styles.error}`}>
            <label htmlFor="rentalDate">Дата аренды</label>
            <input
              type="date"
              id="rentalDate"
              name="rentalDate"
              value={formData.rentalDate}
              onChange={handleInputChange()}
            />  
          </div>
        <div className={`${styles.formGroup} ${!fieldsFilled.phoneNumber && styles.error}`}>
          <label htmlFor="phoneNumber">Номер телефона</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange()}
          />
        </div>
        <div className={`${styles.formGroup} ${!fieldsFilled.paymentMethod && styles.error}`}>
          <label htmlFor="paymentMethod">Способ оплаты</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange()}
          >
            <option value="card">Кредитная карта</option>
            <option value="cash">Наличные</option>
          </select>
        </div>
        <button className={styles.butRent} onClick={handleSubmit1} type="submit">Отправить</button>
      </form>
      <button className={styles.butRent} onClick={closeModal}>Закрыть</button>
    </ReactModal>



    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Покупка курса"
    >
      <h2>Курс</h2>
      <form>
        <div className={`${styles.formGroup} ${!fieldsFilled.city && styles.error}`}>
          <label htmlFor="city">Город</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange()}
          />
        </div>
        <div className={`${styles.formGroup} ${!fieldsFilled.rentalDate && styles.error}`}>
          <label htmlFor="rentalDate">Дата аренды</label>
          <input
            type="date"
            id="rentalDate"
            name="rentalDate"
            value={formData.rentalDate}
            onChange={handleInputChange()}
          />  
        </div>
        <div className={`${styles.formGroup} ${!fieldsFilled.phoneNumber && styles.error}`}>
          <label htmlFor="phoneNumber">Номер телефона</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange()}
          />
        </div>
        <div className={`${styles.formGroup} ${!fieldsFilled.paymentMethod && styles.error}`}>
          <label htmlFor="paymentMethod">Способ оплаты</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange()}
          >
            <option value="card">Кредитная карта</option>
            <option value="cash">Наличные</option>
          </select>
        </div>
        <button className={styles.butRent} onClick={handleSubmit2} type="submit">Отправить</button>
      </form>
      <button className={styles.butRent} onClick={closeModal}>Закрыть</button>
    </ReactModal>




    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Покупка курса"
    >
      <h2>Курс</h2>
      <form>
        <div className={`${styles.formGroup} ${!fieldsFilled.city && styles.error}`}>
          <label htmlFor="city">Город</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange()}
          />
        </div>
        <div className={`${styles.formGroup} ${!fieldsFilled.rentalDate && styles.error}`}>
          <label htmlFor="rentalDate">Дата аренды</label>
          <input
            type="date"
            id="rentalDate"
            name="rentalDate"
            value={formData.rentalDate}
            onChange={handleInputChange()}
          />  
        </div>
        <div className={`${styles.formGroup} ${!fieldsFilled.phoneNumber && styles.error}`}>
          <label htmlFor="phoneNumber">Номер телефона</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange()}
          />
        </div>
        <div className={`${styles.formGroup} ${!fieldsFilled.paymentMethod && styles.error}`}>
          <label htmlFor="paymentMethod">Способ оплаты</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange()}
          >
            <option value="card">Кредитная карта</option>
            <option value="cash">Наличные</option>
          </select>
        </div>
        <button className={styles.butRent} onClick={handleSubmit3} type="submit">Отправить</button>
      </form>
      <button className={styles.butRent} onClick={closeModal}>Закрыть</button>
    </ReactModal>
    </>
  );
}

export default RentForm;