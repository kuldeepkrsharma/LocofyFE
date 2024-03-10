import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameBannerBlog.module.css";

const FrameBannerBlog: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <main className={styles.frameBannerBlog}>
      <section className={styles.infoTurigmaiFrame}>
        <div className={styles.mailPhonecallFrame}>
          <h1 className={styles.resetPassword}>Reset Password</h1>
        </div>
        <div className={styles.resetButton}>
          <img className={styles.backgoundIcon} alt="" src="/backgound.svg" />
          <div className={styles.lineSeparator}>
            <div className={styles.button}>
              <div className={styles.background} />
              <input
                className={styles.enterYourLogin}
                placeholder="Enter Your login ID"
                type="text"
              />
            </div>
            <div className={styles.button1}>
              <div className={styles.background1} />
              <div className={styles.enterNewPassword}>Enter new password</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.background2} />
              <div className={styles.reEnterNewPassword}>
                Re-Enter new password
              </div>
            </div>
            <div className={styles.homeAboutUsIntegrationsFra}>
              <button className={styles.button3} onClick={onButtonClick}>
                <b className={styles.resetPassword1}>Reset Password</b>
              </button>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.button4} onClick={onButton1Click}>
              <b className={styles.login}>Login</b>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FrameBannerBlog;
