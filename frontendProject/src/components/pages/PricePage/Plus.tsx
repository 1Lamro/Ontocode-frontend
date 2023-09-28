import React from "react";
import styles from "./Price.module.css";
import RentForm from "../payCurs/payCurs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { oneUser } from "../../../features/userSlice";

function Plus({
  handleInputChange,
  formData,
}) {
  const token = useSelector((state: RootState) => state.application.token);
  const user = useSelector((state: RootState) => state.user.users);
  const [active, setActive] = React.useState(false);
  const dispatch = useDispatch()

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

  React.useEffect(() => {
    dispatch(oneUser(ownid.userId))
  }, [dispatch])

  const open = () => {
    if (!token) {
      alert("Сначала авторизируйтесь!");
    } else if (user.proCourse || user.plusCourse) {
      alert("Вы уже приобрели этот курс")
    } else {
      setActive(true);
    }
  }
  //window.location.reload()
  const close = () => {
    setActive(false)
  }

  return (
    <>
      <div className={styles.secondCard}>
        <div className={styles.header1}>
          <div className={styles.headerText}>Plus</div>
          <div className={styles.text1}>
            <div className={styles.headerText1}>Обучение новому</div>
          </div>
        </div>
        <div className={styles.center1}>
          <div className={styles.centerText}>
            <div className={styles.centerPrice}>
              ₽<span>50 000</span>
            </div>
            <div className={styles.block}>
              <div className={styles.text2}>Billed annually</div>
              <div className={styles.text3}>or $34.99 billed monthly</div>
            </div>
          </div>
          <div className={styles.centerText1}>
            <div className={styles.centerText2}>
              <div className={styles.text4}>
                Build in-demand technical skills for work or a personal project
              </div>
              <div className={styles.logoTextBlock}>
                <div className={styles.logoText}>
                  {" "}
                  Everything in Basic and more
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBlock}>
          <div className={styles.footerBlock1}>
            <button onClick={() => open()} className={styles.footerBlock2}>
              Приобретите Plus
            </button>
            <RentForm
              type={"plusCourse"}
              isOpen={active}
              closeModal={close}
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Plus;
