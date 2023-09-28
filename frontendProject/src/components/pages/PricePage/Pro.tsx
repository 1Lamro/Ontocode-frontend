import React from "react";
import styles from "./Price.module.css";
import RentForm from "../payCurs/payCurs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { oneUser } from "../../../features/userSlice";

function Pro({
  handleInputChange,
  formData,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
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
        } else if (user.proCourse){
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
      <div className={styles.thirdCard}>
      <div className={styles.header2}>
        <div className={styles.headerText2}>Pro</div>
        <div className={styles.text5}>
          <div className={styles.headerText3}>Build a career</div>
        </div>
      </div>
      <div className={styles.center1}>
        <div className={styles.centerText}>
          <div className={styles.centerPrice}>
          ₽<span>170 000</span>
          </div>
          <div className={styles.block}>
            <div className={styles.text2}>Billed annually</div>
            <div className={styles.text3}>or $59.99 billed monthly</div>
          </div>
        </div>
        <div className={styles.centerText1}>
          <div className={styles.centerText2}>
            <div className={styles.text6}>
              Develop the skills and experience to land a job in tech{" "}
            </div>
            <div className={styles.logoTextBlock}>
              <div className={styles.logoText1}>
                {" "}
                Everything in Plus and more
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBlock3}>
        <div className={styles.footerBlock4}>
          <div className={styles.footerBlock5}>
            <button onClick={open}>Приобретите Pro</button>
            <RentForm
              type={'proCourse'}
              isOpen={active}
              closeModal={close}
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Pro;
