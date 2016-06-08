/**
 * MainBox.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 08 Jun 2016
 */
import React from "react";
import styles from "./mainBox.css";

function MainBox(props) {
    const { children } = props;
    return (
        <div className={styles.mainBox}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default MainBox;
