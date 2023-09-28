import styles from './Footer.module.css'
import Twitter from './Twitter.svg'
import facebook from './facebook.svg'
import insta from './insta.svg'
import you from './yootub.svg'
import teleg from './logos_telegram.svg'
import wats from './logos_whatsapp-icon.svg'
import email from './Vector.svg'
import phone from './entypo_old-phone.svg'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.company}> <h3>Сompany</h3>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Affiliates</p>
                    <img src={Twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={insta} alt="" />
                    <img src={you} alt="" />
                </div>
                <div className={styles.lang}><h3>Languages</h3>
                    <p>Bash </p>
                    <p>C</p>
                    <p>C++</p>
                    <p>C#</p>
                    <p>Go</p>
                    <p>HTML & CSS</p>
                    <p>JavaScript</p>
                    <p>Java</p>
                    <p>Swift</p>
                </div>
                <div className={styles.contacts}><h3>Contacts</h3>
                <img src={teleg}  alt="" />
                <img src={wats}  alt="" />
                <img src={email}  alt="" />
                <img src={phone}  alt="" />

                </div>
                <div className={styles.partners}><h3>Partners</h3></div>
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