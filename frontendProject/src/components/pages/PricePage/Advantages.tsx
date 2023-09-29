import styles from './Advantages.module.css'
import check from './check.svg'

const Advantages = () => {
    return (
        <>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td className={styles.headerTable1}>Привилегии</td>
                        <td className={styles.headerTable2}>Basic</td>
                        <td className={styles.headerTable3}>Plus</td>
                        <td className={styles.headerTable4}>Pro</td>
                    </tr>
                    <tr>
                        <td colSpan="4" className={styles.headBlock}>Начни обучаться программированию</td>
                    </tr>
                    <tr>
                        <td className={styles.whiteTd1}>Базовый доступ к бесплатным курсам</td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td className={styles.greyTd1}>Помощь сообщества</td>
                        <td className={styles.greyTd}><img src={check}/></td>
                        <td className={styles.greyTd}><img src={check}/></td>
                        <td className={styles.greyTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td className={styles.whiteTd1}>Обучающие ресурсы</td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td className={styles.greyTd1}>Все курсы</td>
                        <td className={styles.greyTd}>-</td>
                        <td className={styles.greyTd}>-</td>
                        <td className={styles.greyTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td colSpan="4" className={styles.headBlock}>Развитие навыков</td>
                    </tr>
                    <tr>
                        <td className={styles.whiteTd1}>Skill&nbsp;paths&nbsp;</td>
                        <td className={styles.whiteTd}>-</td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td className={styles.greyTd1}>Real-world&nbsp;projects&nbsp;</td>
                        <td className={styles.greyTd}>-</td>
                        <td className={styles.greyTd}><img src={check}/></td>
                        <td className={styles.greyTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td className={styles.whiteTd1}>Сертификат об окончании</td>
                        <td className={styles.whiteTd}>-</td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td colSpan="4" className={styles.headBlock}>Устройство на работу</td>
                    </tr>
                    <tr>
                        <td className={styles.whiteTd1}>Карьерная неделя</td>
                        <td className={styles.whiteTd}>-</td>
                        <td className={styles.whiteTd}>-</td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td className={styles.greyTd1}>Профессиональная сертификация</td>
                        <td className={styles.greyTd}>-</td>
                        <td className={styles.greyTd}>-</td>
                        <td className={styles.greyTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td className={styles.whiteTd1}>Technical&nbsp;interview&nbsp;prep&nbsp;</td>
                        <td className={styles.whiteTd}>-</td>
                        <td className={styles.whiteTd}>-</td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td className={styles.greyTd1}>Career&nbsp;services&nbsp;</td>
                        <td className={styles.greyTd}>-</td>
                        <td className={styles.greyTd}>-</td>
                        <td className={styles.greyTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td className={styles.whiteTd1}>Задачи с кодом</td>
                        <td className={styles.whiteTd}>-</td>
                        <td className={styles.whiteTd}>-</td>
                        <td className={styles.whiteTd}><img src={check}/></td>
                    </tr>
                    <tr>
                        <td className={styles.greyTd1}>Ассесмент</td>
                        <td className={styles.greyTd}>-</td>
                        <td className={styles.greyTd}>-</td>
                        <td className={styles.greyTd}><img src={check}/></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Advantages;