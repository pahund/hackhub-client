/**
 * Avatar.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import styles from "./avatar.css";

export default ({ small, userName }) => {
    return (
        <div className={`${styles.avatar} ${small ? styles.small : ""}`}>
            <img src={`/images/avatars/${userName}.jpg`} />
        </div>
    );
}
