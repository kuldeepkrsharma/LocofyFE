import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EnterIDFrame.module.css";

const EnterIDFrame: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/instructions");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/resetpassword");
  }, [navigate]);

  return (
    <section className={styles.enterIDFrame}>
      <div className={styles.enterPasswordButton}>
        <div className={styles.resetPasswordButton}>
          <h1 className={styles.login}>Login</h1>
        </div>
        <form className={styles.backgoundParent}>
          <img className={styles.backgoundIcon} alt="" src="/backgound.svg" />
          <div className={styles.loginButton}>
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
              <input
                className={styles.enterYourPassword}
                placeholder="Enter Your Password"
                type="text"
              />
            </div>
            <div className={styles.resetPassBtn}>
              <button className={styles.button2} onClick={onButtonClick}>
                <b className={styles.login1}>Login</b>
              </button>
            </div>
          </div>
          <div className={styles.buttonEnterPswd}>
            <button className={styles.button3} onClick={onButton1Click}>
              <b className={styles.resetPassword}>Reset Password</b>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnterIDFrame;
