import React, { useEffect } from 'react';
import { RootState } from '../../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { Courses, fetchCourses } from '../../../features/courseSlice';
import styles from './Course.module.css'
import { Link } from 'react-router-dom';

const Course = () => {
    const courses = useSelector((state: RootState) => state.course.course)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            {courses.map((course: Courses) => {
                return (
                    <Link to={`/course/${course._id}`} className={styles.courseBlock}>
                        <div className={styles.typeAccess}>Basic</div>
                        <div className={styles.blockCont}>
                            <h3>
                                {course.title}
                            </h3>
                            <p>
                                {course.text}
                            </p>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
};

export default Course;