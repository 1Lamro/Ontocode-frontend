import React, { useEffect } from "react";
import { RootState } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { Courses, fetchCourses } from "../../../features/courseSlice";
import styles from "./Course.module.css";
import { Link, useParams } from "react-router-dom";
import { oneUser } from "../../../features/userSlice";
import { Carousel, CarouselItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const OneCourse = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCourses());
    dispatch(oneUser(ownid.userId));
  }, [dispatch]);

  const courses = useSelector((state: RootState) => state.course.course);
  const user = useSelector((state: RootState) => state.user.users);
  const token = useSelector((state: RootState) => state.application.token);
  const id = useParams()
  const courseOne = courses.filter((courseThis) => courseThis._id === id.id)

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


  console.log(courseOne);


  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          {courseOne[0].title}
        </div>
        <div className={styles.text}>
          {courseOne[0].text}
        </div>
        <Link to='/tasks/650837df617947cf3f034722'>Пройти задание</Link>
      </div>
      <div className={styles.example}>
        <Carousel>
          <CarouselItem>
            <iframe
              title="YouTube Video"
              width="1000"
              height="600"
              src='https://www.youtube.com/embed/yxnWxlHy_SU'
              allowFullScreen
            ></iframe>
          </CarouselItem>
          <CarouselItem>
            <iframe
              title="YouTube Video"
              width="300"
              height="300"
              src='https://www.youtube.com/embed/DOEtVdkKwcU'
              allowFullScreen
            ></iframe>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
};

export default OneCourse;
