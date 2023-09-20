import React, { useState } from "react";
import styles from "./Price.module.css";
import {
  fetchComment,
  deletedComment,
  addComment,
} from "../../../features/priceSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
// import { useParams } from "react-router-dom";

const PricePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const comments = useSelector((state: RootState) => state.price.comment);
  const token = useSelector((state: RootState) => state.application.token);
  const [comment, setComment] = useState("");
  const handleOnChangeTextArea = (text: string) => {
    setComment(text);
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

  const handleSendComment = (comment: string) => {
    if (!token) {
      alert("Вы не авторизованы");
    } else {

      dispatch(addComment({ comment, userId: ownid.userId }));
    }
    setComment("");
  };

  const handleDeleteComment = (id: string, user: string) => {
    comments.map((item) => {
      if (ownid.userId === user) {
        dispatch(deletedComment(id));
      }
    });
  };


  React.useEffect(() => {
    dispatch(fetchComment());
  }, [dispatch]);

  return (
    <div className={styles.input}>
      <div className={styles.allCards}>
        <div className={styles.oneCard}>
          {" "}
          {/*Первая карточка*/}
          <div className={styles.header}>Basic</div>
          <div className={styles.center}>
            <div className={styles.pr}>
              <div className={styles.price}>
                $<span>0</span>
              </div>
            </div>
            <div className={styles.free}>Always free</div>
            <div className={styles.text}>
              Start learning something new with basic access
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.footerText}>Sign up</div>
          </div>
        </div>
        <div className={styles.secondCard}>
          {" "}
          {/*Вторая карточка*/}
          <div className={styles.header1}>
            <div className={styles.headerText}>Plus</div>
            <div className={styles.text1}>
              <div className={styles.headerText1}>Learn a skill</div>
            </div>
          </div>
          <div className={styles.center1}>
            <div className={styles.centerText}>
              <div className={styles.centerPrice}>
                $<span>17</span>
              </div>
              <div className={styles.block}>
                <div className={styles.text2}>Billed annually</div>
                <div className={styles.text3}>or $34.99 billed monthly</div>
              </div>
            </div>
            <div className={styles.centerText1}>
              <div className={styles.centerText2}>
                <div className={styles.text4}>
                  Build in-demand technical skills for work or a personal
                  project
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
              <div className={styles.footerBlock2}>Try Plus for free</div>
            </div>
          </div>
        </div>
        <div className={styles.thirdCard}>
          {" "}
          {/*Третий карточк*/}
          <div className={styles.header2}>
            <div className={styles.headerText2}>Pro</div>
            <div className={styles.text5}>
              <div className={styles.headerText3}>Build a career</div>
            </div>
          </div>
          <div className={styles.center1}>
            <div className={styles.centerText}>
              <div className={styles.centerPrice}>
                $<span>30</span>
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
                <button>Try Pro for free</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <textarea
        name=""
        value={comment}
        onChange={(e) => handleOnChangeTextArea(e.target.value)}
        id={styles.textarea}
        cols="30"
        rows="5"
      ></textarea>
      <button disabled={!comment} onClick={() => handleSendComment(comment)}>
        add
      </button>
      <div>
        {comments.map((item, index) => {
           const isCurrentUserComment = item.user?._id === ownid.userId;
           
          return (
            <div key={index}>
              <div>{item.user?.username}</div>
              <div>
                {item.text}
{isCurrentUserComment &&(

                <button
                  onClick={() => {
                    handleDeleteComment(item._id, item.user?._id);
                    console.log(item._id, item.user?._id);
                    
                  }}
                >
                  x
                </button>
)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricePage;
