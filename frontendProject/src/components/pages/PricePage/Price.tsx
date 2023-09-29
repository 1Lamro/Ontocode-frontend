import React, { useState } from "react";
import styles from "./Price.module.css";
import {
  fetchComment,
  deletedComment,
  addComment,
} from "../../../features/priceSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
//import RentForm from "../payCurs/payCurs";
import Basic from "./Basic";
import Plus from "./Plus";
import Pro from "./Pro";
import Advantages from "./Advantages";

// import { useParams } from "react-router-dom";

const PricePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const comments = useSelector((state: RootState) => state.price.comment);
  const token = useSelector((state: RootState) => state.application.token);
  const [comment, setComment] = useState("");
  const [formData, setFormData] = useState({
    city: "",
    rentalDate: "",
    phoneNumber: "",
    paymentMethod: "",
  });

  const handleInputChange =
    (fieldsFilled, setFieldsFilled) => (e: React.FormEvent) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
      setFieldsFilled({
        ...fieldsFilled,
        [name]: !!value, // Поле заполнено, если его значение не пустое
      });
    };
  const handleOnChangeTextArea = (text: string) => {
    setComment(text);
  };

  function parseJWT(tokenUser: unknown) {
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

  const handleSendComment = (comment: string) => {
    if (!token) {
      alert("Вы не авторизованы");
    } else {
      dispatch(addComment({
        comment, userId: ownid.userId,
        user: undefined,
        _id: "",
        text: "",
        courseId: ""
      }));
    }
    setComment("");
  };

  const handleDeleteComment = (id: string, user: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    comments.map((item) => {
      if (ownid.userId === user) {
        dispatch(deletedComment(id));
      }
    });
  };

  React.useEffect(() => {
    dispatch(fetchComment());
  }, [dispatch]);

  return (<>

    <div className={styles.input}>
      <div className={styles.allCards}>
        <div className={styles.accessBlock}>
          <Basic formData={formData} handleInputChange={handleInputChange} />
        </div>
        <div className={styles.accessBlock}>
          <Plus formData={formData} handleInputChange={handleInputChange} />
        </div>
        <div className={styles.accessBlock}>
          <Pro formData={formData} handleInputChange={handleInputChange} />
        </div>
      </div>
    </div>
    <div className={styles.table}>
      <Advantages />
    </div>
  </>
  );
};

export default PricePage;
