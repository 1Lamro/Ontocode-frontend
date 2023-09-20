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
                    <div className={styles.courseBlock}>
                        <div>
                            {course.title}
                        </div>
                        <div>
                            {course.text}
                        </div>
                        <Link to={`/course/${course._id}`}>Перейти к блоку</Link>
                    </div>
                )
            })}
        </div>
    );
};

export default Course;