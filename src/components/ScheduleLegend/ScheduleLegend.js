/**
 * ScheduleLegend.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 16 Jun 2016
 */
import React from "react";
import styles from "./scheduleLegend.css";

export default props => (
    <div className={styles.scheduleLegend}>
        <div className={`${styles.item} ${styles.hack}`}>
            Hackathon / Dev Time
        </div>
        <div className={`${styles.item} ${styles.prez}`}>
            Results Presentation
        </div>
        <div className={`${styles.item} ${styles.break}`}>
            Breaks / Lunch / Event
        </div>
        <div className={`${styles.item} ${styles.other}`}>
            Other
        </div>
    </div>
);
