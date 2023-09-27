import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
import { useNavigate } from "react-router-dom";

import { RootState, AppDispatch } from "../../../app/store";
import styles from "./payCurs.module.css";
import { buyCourse } from "../../../features/userSlice";

const RentForm = ({
  isOpen,
  closeModal,
  formData,
  handleInputChange,
  type,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.application.token);
  const [fieldsFilled, setFieldsFilled] = useState({
    city: true,
    rentalDate: true,
    phoneNumber: true,
    paymentMethod: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.city || !formData.phoneNumber || !formData.paymentMethod) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    setIsLoading(true);

    setTimeout(async () => {
      setIsLoading(true);
      try {
        // Выполняем платеж и ждем успешного ответа
        await dispatch(buyCourse({ userId: ownid.userId, courseType: type }));
        setIsPaymentSuccessful(true);
        setIsLoading(false);
        setTimeout(() => {
          navigate("/courses");
        }, 1300); // Переход на страницу курсов через 2 секунды после успешной оплаты
      } catch (error) {
        setIsLoading(false);
        setIsPaymentSuccessful(false);
        // Обработка ошибки, если не удалось совершить платеж
      }
    }, 1700);
  };

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
        {isLoading ? (
          <div className={styles.loadingSpinner}>
            <div className={styles.spinner}></div>
            <div className={styles.spinnerText}>Производится оплата</div>
          </div>
        ) : (
          <>
            {isPaymentSuccessful ? (
              <div className={styles.successIndicator}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <div className={styles.successText}>
                  Оплата успешно завершена
                </div>
              </div>
            ) : (
              <form>
                <div
                  className={`${styles.formGroup} ${
                    !fieldsFilled.city && styles.error
                  }`}
                >
                  <label htmlFor="city">Город</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange()}
                  />
                </div>

                <div
                  className={`${styles.formGroup} ${
                    !fieldsFilled.phoneNumber && styles.error
                  }`}
                >
                  <label htmlFor="phoneNumber">Номер телефона</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange()}
                  />
                </div>
                <div
                  className={`${styles.formGroup} ${
                    !fieldsFilled.paymentMethod && styles.error
                  }`}
                >
                  <label htmlFor="paymentMethod">Способ оплаты</label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange()}
                  >
                    <option value="cash">Наличные</option>
                    <option value="card">Кредитная карта</option>
                  </select>
                </div>
                <button
                  className={styles.butRent}
                  onClick={handleSubmit}
                  type="submit"
                >
                  Отправить
                </button>
                <button className={styles.butRent} onClick={closeModal}>
                  Закрыть
                </button>
              </form>
            )}
          </>
        )}
      </ReactModal>
    </>
  );
};

export default RentForm;
