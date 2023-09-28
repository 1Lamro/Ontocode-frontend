import styles from "./Company.module.css";
import Screenshot from "./Screenshot.png";
import karta from "./karta.gif";
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import logo3 from "./logo3.png"
import logo4 from "./logo4.png"
const CompanyPage = () => {
  return (
    <>
      <div className={styles.global}>
        <div className={styles.twoTable}>
          <div className={styles.oneTable}>
            <div className={styles.headerText}>
              <div className={styles.text}>Codecademy from Skillsoft</div>
              <div className={styles.text1}>
                Build a tech-forward team with training that sticks
              </div>
            </div>
            <div className={styles.text2}>
              Level up and level set your team’s technical skills with the most
              interactive training for programming and data skills.
            </div>
            <div className={styles.text3}>
              <img src={Screenshot} className={styles.screenshot} />
            </div>
          </div>
          <div className={styles.secondTable}>
            <div className={styles.headerText2}>
              <div className={styles.text4}>Start your team’s free trial</div>
              <div className={styles.text5}>
                Invite up to 10 members of your team to join a free two-week
                trial.
              </div>
            </div>
            <div className={styles.center}>
              <div className={styles.input}>
                <div className={styles.inputText}>First Name *</div>
                <input className={styles.input1}></input>
              </div>
              <div className={styles.input2}>
                <div className={styles.inputText}>Last Name *</div>
                <input className={styles.input3}></input>
              </div>
              <div className={styles.input4}>
                <div className={styles.inputText}>Company Name *</div>
                <input className={styles.input3}></input>
              </div>
              <div className={styles.input4}>
                <div className={styles.inputText}>Company Email Address *</div>
                <input className={styles.input3}></input>
              </div>
              <div className={styles.input4}>
                <div className={styles.inputText}>Phone Number</div>
                <input className={styles.input3}></input>
              </div>
            </div>
            <div className={styles.footer}>
              <button className={styles.footer1}>Start free trial</button>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.mainTwo}>
          <div className={styles.mainBlock}>
            <div className={styles.mainHeader}>
              <div className={styles.mainText}>
                A more engaging way to learn
              </div>
              <div className={styles.mainText1}>
                Our interactive platform makes learning active and engaging.
                Your team members don’t just watch or read about someone else
                coding — they write and edit their own code live, practicing and
                applying what they learn in real- world situations.
              </div>
            </div>
          </div>
          <div className={styles.karta}>
            <img src={karta} className={styles.karta}></img>
          </div>
        </div>
        <div className={styles.mainBlock2}>
          <div className={styles.mainText2}>
            <div className={styles.text7}>Build the skills you need</div>
            <div className={styles.text8}>Created by industry experts, our course catalog covers all of the most sought-after technical skills and languages (like Python, React, and SQL).</div>
          </div>

          <div className={styles.table}>
            <div className={styles.carta}>
              <div className={styles.logo1}>
                <img src={logo1}></img>
              </div>
              <div className={styles.cartaText}>Computer science</div>
              <div className={styles.cartaText1}>Improve your onboarding to bring new team members up to speed quicker</div>
              <a href="" className={styles.cartaText2}>See courses</a>
            </div>
            <div className={styles.carta}>
              <div className={styles.logo1}>
                <img src={logo2}></img>
              </div>
              <div className={styles.cartaText}>Data science</div>
              <div className={styles.cartaText1}>Develop the skills needed to make better data-driven business decisions</div>
              <a href="" className={styles.cartaText2}>See courses</a>
            </div>
            <div className={styles.carta}>
              <div className={styles.logo1}>
                <img src={logo3}></img>
              </div>
              <div className={styles.cartaText}>Web development</div>
              <div className={styles.cartaText1}>Empower teams to build and manage websites and web applications
              </div>
              <a href="" className={styles.cartaText2}>See courses</a>
            </div>
            <div className={styles.carta}>
              <div className={styles.logo1}>
                <img src={logo4}></img>
              </div>
              <div className={styles.cartaText}>Code foundations
              </div>
              <div className={styles.cartaText1}>Create a technical baseline and scale digital literacy for your company</div>
              <a href="" className={styles.cartaText2}>See courses</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyPage;
