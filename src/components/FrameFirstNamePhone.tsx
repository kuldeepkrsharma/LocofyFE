import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameFirstNamePhone.module.css";

export type FrameFirstNamePhoneType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
};

const FrameFirstNamePhone: FunctionComponent<FrameFirstNamePhoneType> = ({
  propWidth,
  propPadding,
  propFlex,
}) => {
  const frameFirstNamePhoneStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      flex: propFlex,
    };
  }, [propWidth, propPadding, propFlex]);

  return (
    <div
      className={styles.frameFirstNamePhone}
      style={frameFirstNamePhoneStyle}
    >
      <div className={styles.turigmaaiLabel}>
        <div className={styles.lastNameEmailFrame}>
          <div className={styles.companyLocationFrame}>
            <b className={styles.firstName}>First Name</b>
            <b className={styles.phone}>Phone</b>
          </div>
          <div className={styles.companyLocationFrame1}>
            <b className={styles.lastName}>Last Name</b>
            <b className={styles.email}>Email</b>
          </div>
          <div className={styles.companyLocationFrame2}>
            <b className={styles.company}>Company</b>
            <b className={styles.location}>Location</b>
          </div>
          <div className={styles.companyLocationFrame3}>
            <b className={styles.title}>Title</b>
            <b className={styles.campaignSNo}>Campaign S. No.</b>
          </div>
        </div>
      </div>
      <div className={styles.emailText}>
        <div className={styles.previousbuttonFrame}>
          <img
            className={styles.previousButtonIcon}
            loading="lazy"
            alt=""
            src="/previousbutton@2x.png"
          />
          <div className={styles.iocn}>
            <div className={styles.callScript}>
              <div className={styles.next}>Next</div>
            </div>
            <div className={styles.iconframe}>
              <div className={styles.iconframeChild} />
              <img
                className={styles.iocnIcon}
                loading="lazy"
                alt=""
                src="/iocn.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.turigmaaiFrame}>
            <div className={styles.searchInputBoundingBox} />
          </div>
          <button className={styles.searchButton}>
            <b className={styles.search}>Search</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameFirstNamePhone;
