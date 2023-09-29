import styles from './Advantages.module.css'
import check from './check.svg'

const Advantages = () => {
    return (
        <>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td>Привилегии</td>
                        <td>Basic</td>
                        <td>Plus</td>
                        <td>Pro</td>
                    </tr>
                    <tr>
                        <td colSpan="4">Начни обучаться программированию</td>
                    </tr>
                    <tr>
                        <td className={styles.whiteTd}>Базовый доступ к бесплатным курсам</td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Помощь сообщества</td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td className={styles.whiteTd}>Обучающие ресурсы</td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Все курсы</td>
                        <td>-</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td colSpan="4">Развитие навыков</td>
                    </tr>
                    <tr>
                        <td className={styles.whiteTd}>Skill&nbsp;paths&nbsp;</td>
                        <td className={styles.whiteTd}>-</td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Real-world&nbsp;projects&nbsp;</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td className={styles.whiteTd}>Сертификат об окончании</td>
                        <td className={styles.whiteTd}>-</td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td colSpan="4">Устройство на работу</td>
                    </tr>
                    <tr>
                        <td className={styles.whiteTd}>Карьерная неделя</td>
                        <td className={styles.whiteTd}>-</td>
                        <td className={styles.whiteTd}>-</td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Профессиональная сертификация</td>
                        <td>-</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td className={styles.whiteTd}>Technical&nbsp;interview&nbsp;prep&nbsp;</td>
                        <td className={styles.whiteTd}>-</td>
                        <td className={styles.whiteTd}>-</td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Career&nbsp;services&nbsp;</td>
                        <td>-</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td className={styles.whiteTd}>Задачи с кодом</td>
                        <td className={styles.whiteTd}>-</td>
                        <td className={styles.whiteTd}>-</td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Ассесмент</td>
                        <td>-</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Advantages;