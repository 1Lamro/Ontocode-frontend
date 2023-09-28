import React, { useEffect } from "react";
import styles from "./Price.module.css";
import RentForm from "../payCurs/payCurs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { oneUser } from "../../../features/userSlice";

function Basic({
  handleInputChange,
  formData,
}) {
    const token = useSelector((state: RootState) => state.application.token);
    const user = useSelector((state: RootState) => state.user.users);
    const [active, setActive] = React.useState(false);
    const dispatch = useDispatch()

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

      useEffect(() => {
        dispatch(oneUser(ownid.userId))
      }, [dispatch])

    const open = () => {
        if (!token) {
            alert("Сначала авторизируйтесь!");
        } else if (user.plusCourse || user.proCourse || user.basicCourse){
            alert("Вы уже приобрели этот курс")
        } else {
            setActive(true);
        }
    }
    
    const close = () => {
        setActive(false)
    }
    
  return (
    <>
      <div className={styles.oneCard}>
      <div className={styles.header}>Basic</div>
      <div className={styles.center}>
        <div className={styles.pr}>
          <div className={styles.price}>
            $<span>0</span>
          </div>
        </div>
        <div className={styles.free}>Always free</div>
        <div className={styles.text}>
          Начните изучать что-то
        </div>
      </div>
      <div className={styles.footer}>
        {!token ? <button onClick={open}  className={styles.footerText}>
          Sign up
        </button> : null}
        <RentForm
          type={"basicCourse"}
          isOpen={active}
          closeModal={close}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      </div>
      </div>
    </>
  );
}

export default Basic;
