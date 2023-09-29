import React, { useEffect } from "react";
import { RootState } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { Courses, fetchCourses } from "../../../features/courseSlice";
import styles from "./Course.module.css";
import { useParams } from "react-router-dom";
import { oneUser } from "../../../features/userSlice";

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
        1
        {
        <>
          <div>
            {courseOne[0].title}
          </div>
          <div>
            {courseOne[0].text}
          </div>
        </>
        }
      </div>
    </div>
  );
};

export default OneCourse;
