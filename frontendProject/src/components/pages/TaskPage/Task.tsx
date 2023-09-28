import React, { useEffect } from 'react';
import { RootState } from '../../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Task.module.css'
import { getTask } from '../../../features/taskSlice';
import { useParams } from 'react-router-dom';

const Task = () => {
    const task = useSelector((state: RootState) => state.task.tasks)
    const dispatch = useDispatch()

    const id = useParams().id
    
    console.log(id);

    useEffect(() => {
        dispatch(getTask(id));
    }, []);

    return (
        <div className={styles.container}>
          <h3>Title: {task.title}</h3>
          <p>Question: {task.question}</p>
          <p>Solution: {task.solution}</p>
        </div>
    );
};

export default Task;