import React, { useEffect } from "react";
import { RootState } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { Courses, fetchCourses } from "../../../features/courseSlice";
import styles from "./Course.module.css";
import { Link } from "react-router-dom";
import { oneUser } from "../../../features/userSlice";

const Course = () => {
    const courses = useSelector((state: RootState) => state.course.course);
    const user = useSelector((state: RootState) => state.user.users);
    const token = useSelector((state: RootState) => state.application.token);
    console.log(user);

    const dispatch = useDispatch();
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

    React.useEffect(() => {
        dispatch(fetchCourses());
        dispatch(oneUser(ownid.userId));
    }, [dispatch]);

    return (
        <div className={styles.container}>
            {user.basicCourse ?
                courses.map((course: Courses) => {
                    return (
                        course.typeAccess === "basic" ? (
                            <Link to={`/course/${course._id}`} className={styles.courseBlock}>
                                <div className={styles.typeAccess}>Basic</div>
                                <div className={styles.blockCont}>
                                    <h3>{course.title}</h3>
                                    <p>{course.text}</p>
                                </div>
                            </Link>
                        ) : (
                            <div className={styles.courseBlock}>
                                <div className={styles.typeAccess}>Basic</div>
                                <div className={styles.blockCont}>
                                    <h3>{course.title}</h3>
                                    <p>{course.text}</p>
                                </div>
                            </div>
                        )
                )}) : user.plusCourse ? courses.map((course: Courses) => {
                    return (
                        course.typeAccess === "basic" || course.typeAccess === "plus" ? (
                            <Link to={`/course/${course._id}`} className={styles.courseBlock}>
                                <div className={styles.typeAccess}>Basic</div>
                                <div className={styles.blockCont}>
                                    <h3>{course.title}</h3>
                                    <p>{course.text}</p>
                                </div>
                            </Link>
                        ) : (
                            <div className={styles.courseBlock}>
                                <div className={styles.typeAccess}>Basic</div>
                                <div className={styles.blockCont}>
                                    <h3>{course.title}</h3>
                                    <p>{course.text}</p>
                                </div>
                            </div>
                        )
                )}) : user.proCourse ? courses.map((course: Courses) => {
                    return (
                        course.typeAccess === "basic" || course.typeAccess === "plus" || course.typeAccess === "pro" ? (
                            <Link to={`/course/${course._id}`} className={styles.courseBlock}>
                                <div className={styles.typeAccess}>Basic</div>
                                <div className={styles.blockCont}>
                                    <h3>{course.title}</h3>
                                    <p>{course.text}</p>
                                </div>
                            </Link>
                        ) : (
                            <div className={styles.courseBlock}>
                                <div className={styles.typeAccess}>Basic</div>
                                <div className={styles.blockCont}>
                                    <h3>{course.title}</h3>
                                    <p>{course.text}</p>
                                </div>
                            </div>
                        )
                )}) : null}
        </div>
    );
};

export default Course;