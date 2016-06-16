/**
 * ScheduleItem.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 15 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import styles from "./scheduleItem.css";
import Paper from "material-ui/Paper";

export default ({
    start,
    end,
    eventType1,
    eventDescription1,
    eventType2,
    eventDescription2
}) => {
    return (
        <Paper className={styles.scheduleItem} style={{
            borderRadius: "10px"
        }}>
            <div className={styles.time}>
                {!end ? "from " : null}
                {formatDate(start)} {end ? ` – ${formatDate(end)}` : null}
            </div>
            <div className={styles.eventsWrapper}>
                <div className={`${styles.event} ${styles.event1} ${styles[eventType1]}`}>
                    {eventDescription1}
                </div>
                {
                    eventType2 ? (
                        <div className={`${styles.event} ${styles.event2} ${styles[eventType2]}`}>
                            {eventDescription2}
                        </div>
                    ) : null
                }
            </div>
        </Paper>
    );
}

function formatDate(date) {
    return `${zeroPad(date.getHours())}:${zeroPad(date.getMinutes())}`;
}

function zeroPad(n) {
    return (`00${n}`).slice(-2);
}
