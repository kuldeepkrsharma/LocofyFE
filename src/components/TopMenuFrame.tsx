import { FunctionComponent } from "react";
import FrameFirstNamePhone from "./FrameFirstNamePhone";
import styles from "./TopMenuFrame.module.css";

const TopMenuFrame: FunctionComponent = () => {
  return (
    <div className={styles.topMenuFrame}>
      <div className={styles.frameParent}>
        <div className={styles.frameFirstNamePhoneParent}>
          <FrameFirstNamePhone />
          <div className={styles.callScript}>
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/background.svg"
            />
            <h1 className={styles.callScript1}>Call Script</h1>
            <div className={styles.loremIpsumDolorContainer}>
              <p className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                cursus pharetra, mollis cras. Luctus pharetra duis nisi,
                fermentum, ipsum et felis odio. Nec semper nunc,s amet f arcu
                interdum Nec semper nunc,s amet f arcu interdum quam.
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.egestasAmetFermentum}>
                Egestas amet fermentum aliquam blandit pharetra eleifend. Id
                duis ipsum ac ante. Lectus enim, maecenas adipiscing neque,
                pellentesque nunc ut ipsum. Et adipiscing euismod placerat
                lacus. In sed arcu ullamcorper pharetra, nunc lobortis facilisis
                cursus erat.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.faq}>
          <h1 className={styles.frequentlyAskedQuestions}>
            Frequently Asked Questions
          </h1>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.aICopilotWrapper}>
            <div className={styles.aICopilot}>
              <div className={styles.faqParent}>
                <textarea
                  className={styles.faq1}
                  placeholder="Topic 1"
                  rows={9}
                  cols={13}
                />
                <textarea
                  className={styles.faq2}
                  placeholder="Topic 1"
                  rows={9}
                  cols={13}
                />
                <textarea
                  className={styles.faq3}
                  placeholder="Topic 1"
                  rows={9}
                  cols={13}
                />
                <textarea
                  className={styles.faq4}
                  placeholder="Topic 1"
                  rows={9}
                  cols={13}
                />
                <textarea
                  className={styles.faq5}
                  placeholder="Topic 1"
                  rows={9}
                  cols={13}
                />
                <textarea
                  className={styles.faq6}
                  placeholder="Topic 1"
                  rows={9}
                  cols={13}
                />
                <textarea
                  className={styles.faq7}
                  placeholder="Topic 1"
                  rows={9}
                  cols={13}
                />
                <textarea
                  className={styles.faq8}
                  placeholder="Topic 1"
                  rows={9}
                  cols={13}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.callNotes}>
          <h1 className={styles.notepad}>Notepad</h1>
        </div>
      </div>
    </div>
  );
};

export default TopMenuFrame;
