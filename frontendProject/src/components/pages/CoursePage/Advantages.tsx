import styles from './Advantages.module.css'
import check from './check.svg'

const Advantages = () => {
    return (
        <>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td>Features</td>
                        <td>Basic</td>
                        <td>Plus</td>
                        <td>Pro</td>
                    </tr>
                    <tr>
                        <td colspan="4">Начни обучаться программированию</td>
                    </tr>
                    <tr>
                        <td>Basic&nbsp;access&nbsp;to&nbsp;free&nbsp;courses&nbsp;</td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Community&nbsp;support&nbsp;</td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Learning&nbsp;resources&nbsp;</td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Practice&nbsp;on&nbsp;our&nbsp;mobile&nbsp;app&nbsp;</td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>All&nbsp;courses&nbsp;</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Quizzes&nbsp;</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Personalized&nbsp;practice&nbsp;</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td colspan="4">Build your skills</td>
                    </tr>
                    <tr>
                        <td>Skill&nbsp;paths&nbsp;</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Real-world&nbsp;projects&nbsp;</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Certificates&nbsp;of&nbsp;completion&nbsp;</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td colspan="4">Land a job</td>
                    </tr>
                    <tr>
                        <td>Career&nbsp;paths&nbsp;</td>
                        <td>-</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Professional&nbsp;certifications&nbsp;</td>
                        <td>-</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Technical&nbsp;interview&nbsp;prep&nbsp;</td>
                        <td>-</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Career&nbsp;services&nbsp;</td>
                        <td>-</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Code&nbsp;challenges&nbsp;</td>
                        <td>-</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td>Assessments&nbsp;</td>
                        <td>-</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                    </tr>
                    <tr>
                        <td colspan="4">Additional features</td>
                    </tr>
                    <tr>
                        <td>Priority&nbsp;customer&nbsp;support&nbsp;</td>
                        <td>-</td>
                        <td><img src={check}/></td>
                        <td><img src={check}/></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Advantages;