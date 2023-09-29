import styles from './Footer.module.css'
import Twitter from './Twitter.svg'
import facebook from './facebook.svg'
import insta from './insta.svg'
import you from './yootub.svg'
import teleg from './logos_telegram.svg'
import wats from './logos_whatsapp-icon.svg'
import email from './Vector.svg'
import phone from './entypo_old-phone.svg'
import intocode from './intocode.jpg'
import yandex from './yandex.png'
import asus from './asus.jpg'
import microsoft from './microsoft.png'
import ploskaya from './плоская.jpg'
import bash from './bash.png'
import C from './c.png'
import CPlus from './c++.png'
import CSh from './cSh.png'
import Go from './go.png'
import Html from './html.png'
import Css from './css.png'
import JavaSc from './javaScript.png'
import Java from './java.png'
import Swifr from './swift.jpg'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.company}> <h3>Сompany</h3>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Affiliates</li>
                    <li><Link to='https://youtu.be/4Dy9hzbucHE' target='https://youtu.be/4Dy9hzbucHE'><img src={Twitter} alt="twitter" /></Link></li>
                    <li><Link to='https://www.youtube.com/watch?v=lKWVOoa-Hm0' target='https://www.youtube.com/watch?v=lKWVOoa-Hm0'><img src={facebook} alt="facebook" /></Link></li>
                    <li><Link to='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiKvc70ws6BAxXMHBAIHUJmBPcQFnoECBAQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fintocode%2F&usg=AOvVaw1ngVOn-hcfShGgN9TcT3zK&opi=89978449' target='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiKvc70ws6BAxXMHBAIHUJmBPcQFnoECBAQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fintocode%2F&usg=AOvVaw1ngVOn-hcfShGgN9TcT3zK&opi=89978449'><img src={insta} alt="instagram" /></Link></li>
                    <li><Link to='https://www.youtube.com/watch?v=wa7knhzVShQ' target='https://www.youtube.com/watch?v=wa7knhzVShQ'><img src={you} alt="youtube" /></Link></li>
                </div>
                <div className={styles.lang}><h3>Languages</h3>
                    <li>C++ <img src={CPlus} alt="" className={styles.lp}/></li>
                    <li>C# <img src={CSh} alt="" className={styles.lp}/></li>
                    <li>HTML<img src={Html} alt="" className={styles.lp}/></li>
                    <li>CSS <img src={Css} alt="" className={styles.lp}/></li>
                    <li>JavaScrilit <img src={JavaSc} alt="" className={styles.lp}/></li>
                    <li>Java <img src={Java} alt="" className={styles.lp}/></li>
                    <li>Swift <img src={Swifr} alt="" className={styles.lp}/></li>
                </div>
                <div className={styles.contacts}><h3>Contacts</h3>
                <li><Link to='https://t.me/intocode' target='https://t.me/intocode'><img src={teleg}  alt="telegram" /></Link></li>
                <li><Link to='https://www.youtube.com/watch?v=Gc9hw2V-7pk' target='https://www.youtube.com/watch?v=Gc9hw2V-7pk'><img src={wats}  alt="whatsApp" /></Link></li>
                <li><Link to='https://mail.ru' target='https://mail.ru'><img src={email}  alt="email" /></Link></li>
                <li><Link to='https://www.youtube.com/watch?v=72gt1WB0QGg' target='https://www.youtube.com/watch?v=72gt1WB0QGg'><img src={phone}  alt="phone" /></Link></li>

                </div>
                <div className={styles.partners}>
                    <h3>Partners</h3>
                    <Link to='https://t.me/intocode' target='https://t.me/intocode'><li><img src={intocode} alt="" className={styles.lp}/> Intocode</li></Link>
                    <Link to='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiRltygyc6BAxWlFBAIHQEyBU0QFnoECBUQAQ&url=https%3A%2F%2Fya.ru%2F&usg=AOvVaw1gAEJFOLA02X4naLK30vy5&opi=89978449' target='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiRltygyc6BAxWlFBAIHQEyBU0QFnoECBUQAQ&url=https%3A%2F%2Fya.ru%2F&usg=AOvVaw1gAEJFOLA02X4naLK30vy5&opi=89978449'><li><img src={yandex} alt="" className={styles.photo}/> Yandex</li></Link>
                    <Link to='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjsj8Kxyc6BAxVpLBAIHV17CAQQFnoECA4QAQ&url=https%3A%2F%2Fwww.asus.com%2Fru%2F&usg=AOvVaw2eXtR2cjBj9TQEGhaBWrTM&opi=89978449' target='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjsj8Kxyc6BAxVpLBAIHV17CAQQFnoECA4QAQ&url=https%3A%2F%2Fwww.asus.com%2Fru%2F&usg=AOvVaw2eXtR2cjBj9TQEGhaBWrTM&opi=89978449'><li><img src={asus} alt="" className={styles.photo}/> Asus</li></Link>
                    <Link to='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjDlYy8yc6BAxUVJRAIHTB8CrEQFnoECAcQAQ&url=https%3A%2F%2Fwww.microsoft.com%2Fru-ru&usg=AOvVaw1G-JpzkmlHbvENdkXxtWzM&opi=89978449' target='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjDlYy8yc6BAxUVJRAIHTB8CrEQFnoECAcQAQ&url=https%3A%2F%2Fwww.microsoft.com%2Fru-ru&usg=AOvVaw1G-JpzkmlHbvENdkXxtWzM&opi=89978449'><li><img src={microsoft} alt="" className={styles.photo}/> Microsoft</li></Link>
                    <Link to='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwicgJXGyc6BAxWAHBAIHQKbCpYQFnoECA4QAQ&url=https%3A%2F%2Fm.radiokot.ru%2Fforum%2Fviewtopic.php%3Fp%3D3847793&usg=AOvVaw0HkeHME-7ZHMPm6cb_WzlX&opi=89978449' target='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwicgJXGyc6BAxWAHBAIHQKbCpYQFnoECA4QAQ&url=https%3A%2F%2Fm.radiokot.ru%2Fforum%2Fviewtopic.php%3Fp%3D3847793&usg=AOvVaw0HkeHME-7ZHMPm6cb_WzlX&opi=89978449'><li><img src={ploskaya} alt="" className={styles.photo}/> Плоскоземельщики</li></Link>
                    <Link to='https://youtube.com/shorts/kYg7_U5pHbA?feature=share' target='https://youtube.com/shorts/kYg7_U5pHbA?feature=share'><li>Al-Kaida</li></Link>
                </div>
            </div>
            <div className={styles.under}>
                <div className={styles.under1}>
                    <div>Privacy Policy</div>
                    <div>Cookie Policy</div>
                    <div>Do Not Sell My Personal Information</div>
                    <div>Terms</div>
                </div>
                <div className={styles.under1}>
                    <div>Made with </div>
                    <div>in FRCHESTE © 2023 OntoCode</div>
                </div>
            </div>
        </div>
    )
}

export default Footer