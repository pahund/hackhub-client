/**
 * Hacker.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import styles from "./hacker.css";
import Paper from "material-ui/Paper";
import Avatar from "../Avatar";

export default props => {
    return (
        <Paper className={styles.hacker} style={{
            borderRadius: "10px"
        }}>
            <div className={styles.avatar}>
                <Avatar userName={props.userName} />
            </div>
            <div className={styles.name}>
                <div>
                    <strong>{props.name}</strong>
                    {props.description ? <br /> : null}
                    {props.description}
                </div>
            </div>
        </Paper>
    );
}
