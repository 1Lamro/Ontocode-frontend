import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import { deleteUser, oneUser } from '../../../features/userSlice';
import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.css'
import ProfileUpdate from './ProfileUpdate';


const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.users); // Получаем информацию о пользователе из Redux
  const token = useSelector((state: RootState) => state.application.token);
  const navigate = useNavigate();

  function parseJWT(token: string) {
    const base64Url = token.split(".")[1];
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
  const userCard = parseJWT(token);

  useEffect(() => {
    dispatch(oneUser(userCard.userId));
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/");
    location.reload();
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <h2 className={styles.headerText}>Ваш Личный кабинет</h2>
        <img src={`http://localhost:3333/images/${user.avatar}`} alt="Ваша аватарка" className={styles.avatar} />
        <div className={styles.card}>
          <p className={styles.name}>Никнейм: {user.username}</p>
          <p className={styles.name}>Ваш Email: {user.email}</p>
          <p className={styles.name}>Ваша Роль: {user.role}</p>

          <p className={styles.name}>Ваш Опыт: {user.progress}</p>
        </div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
        >
          Изменить профиль
        </button>
        <div>
          <button
            onClick={() => handleDelete(user._id)}
            className={styles.deletedUserButton}
          >
            Удалить пользователя
          </button>
        </div>
        <ProfileUpdate id={user._id} token={token} />
      </div>
    </div>
  );
};

export default Profile;