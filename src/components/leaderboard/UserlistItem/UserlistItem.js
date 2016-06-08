/**
 * UserlistItem.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import styles from "./userlistItem.css";
import Paper from "material-ui/Paper";
import Avatar from "../../users/Avatar";

export default props => {
    return (
        <Paper className={styles.userlistItem} style={{
            borderRadius: "10px"
        }}>
            <div className={styles.name}>
                <Avatar userName={props.userName} />
                <div>
                    <strong>{props.name}</strong>
                    {props.description ? <br /> : null}
                    {props.description}
                </div>
            </div>
        </Paper>
    );
}
