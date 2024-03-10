import { FunctionComponent, useCallback } from "react";
import Image1 from "./Image1";
import styles from "./TextNode.module.css";

const TextNode: FunctionComponent = () => {
  const onBlogClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='heroHeaderContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.textNode}>
      <div className={styles.textNode1}>
        <div className={styles.line}>
          <div
            className={styles.blogSectionHeader}
            data-scroll-to="blogSectionHeaderContainer"
          >
            <div className={styles.blogWrapper}>
              <button className={styles.blog} onClick={onBlogClick}>
                <b className={styles.blog1}>GO TO THE TOP</b>
              </button>
            </div>
            <h1 className={styles.mostPopularArticles}>
              Most popular articles
            </h1>
          </div>
        </div>
        <div className={styles.blogs}>
          <div className={styles.easySectionSubheader}>
            <div className={styles.companyFrame}>
              <b className={styles.createAccount}>{`01. Upload Campaign `}</b>
            </div>
            <textarea
              className={styles.companyFrame1}
              placeholder="02. AI Automates PreSales"
              rows={6}
              cols={16}
            />
            <div className={styles.companyFrame2}>
              <b className={styles.trackAnalytics}>03. Instant Results</b>
            </div>
          </div>
          <div className={styles.novemberFrame}>
            <div className={styles.headerFrame}>
              <Image1 image="/image-2@2x.png" />
              <div className={styles.frameParent}>
                <div className={styles.november152022Parent}>
                  <div className={styles.november152022}>November 15, 2022</div>
                  <div className={styles.topTipsForContainer}>
                    <p className={styles.topTipsFor}>
                      10 Top tips for making your
                    </p>
                    <p className={styles.saasProductSticky}>
                      Saas product sticky
                    </p>
                  </div>
                  <div className={styles.itIsA}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page from when
                    looking at it layout. The point of using Lorem Ipsum
                  </div>
                </div>
                <b className={styles.readMore}>Read More</b>
              </div>
            </div>
            <div className={styles.readMoreButton}>
              <div className={styles.mailIcon}>
                <Image1 image="/image-3@2x.png" />
                <div className={styles.textNode2}>
                  <div className={styles.novemberFrame1}>
                    <div className={styles.november1520221}>
                      November 15, 2022
                    </div>
                    <div className={styles.automateReportsGeneration}>
                      Automate Reports Generation with Saasup
                    </div>
                    <div className={styles.itIsA1}>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page from when
                      looking at it layout. The point of using Lorem Ipsum
                    </div>
                  </div>
                  <b className={styles.readMore1}>Read More</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.frameContainerIcon} loading="lazy" alt="" />
      </div>
    </section>
  );
};

export default TextNode;
