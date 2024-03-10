import { FunctionComponent } from "react";
import styles from "./TurigmaaiFrame.module.css";

const TurigmaaiFrame: FunctionComponent = () => {
  return (
    <div className={styles.turigmaaiFrame}>
      <div className={styles.utilityPages}>
        <div className={styles.homeAboutUs}>
          <div className={styles.checkbox}>
            <div className={styles.firstNameCheckbox} />
            <div className={styles.prospectTitleInCorrectWrapper}>
              <div className={styles.prospectTitleInCorrect}>
                Prospect title in-correct
              </div>
            </div>
          </div>
          <div className={styles.checkbox1}>
            <div className={styles.checkboxChild} />
            <div className={styles.prospectPhoneNumberWrongWrapper}>
              <div className={styles.prospectPhoneNumber}>
                Prospect phone number wrong
              </div>
            </div>
          </div>
          <div className={styles.checkbox2}>
            <div className={styles.checkboxItem} />
            <div className={styles.prospectDidntAnswerWrapper}>
              <div className={styles.prospectDidntAnswer}>
                Prospect didn’t answer
              </div>
            </div>
          </div>
        </div>
        <div className={styles.callNotesText}>
          <h3 className={styles.callNotes}>Call Notes</h3>
          <div className={styles.thereAreMany}>
            There are many variations of passages of Lorem Ipscted humour, or
            randomised words which don't look slightly believable. If you are
            going to use a passage .
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurigmaaiFrame;
