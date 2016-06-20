/**
 * ScheduleItem.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 15 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import styles from "./scheduleItem.css";
import Paper from "material-ui/Paper";
import Location from "material-ui/svg-icons/communication/location-on";

export default ({
    start,
    end,
    eventType1,
    eventDescription1,
    eventLocation1,
    eventType2,
    eventDescription2,
    eventLocation2,
    status
}) => {
    const event1 = renderEvent(eventType1, eventDescription1, eventLocation1);
    const event2 = renderEvent(eventType2, eventDescription2, eventLocation2);
    return (
        <Paper className={`${styles.scheduleItem} ${styles[status]}`} style={{
            borderRadius: "10px"
        }}>
            <div className={styles.time}>
                {!end ? "from " : null}
                {formatDate(start)} {end ? ` – ${formatDate(end)}` : null}
            </div>
            <div className={styles.eventsWrapper}>
                {event1}
                {eventType2 ? event2 : null}
            </div>
        </Paper>
    );
}

const renderEvent = (eventType, eventDescription, eventLocation) => (
    <div className={`${styles.event} ${styles[eventType]}`}>
        <div dangerouslySetInnerHTML={{__html: eventDescription}} />
        {eventLocation ? (
            <div className={styles.location}>
                <a href={eventLocation.mapUrl}><Location /></a>
                <div dangerouslySetInnerHTML={{__html: eventLocation.description}} />
            </div>
        ) : null}
    </div>
);

function formatDate(date) {
    return `${zeroPad(date.getHours())}:${zeroPad(date.getMinutes())}`;
}

function zeroPad(n) {
    return (`00${n}`).slice(-2);
}
