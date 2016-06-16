/**
 * Schedule.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import MainBox from "../components/MainBox";
import ScheduleItem from "../components/ScheduleItem";
import ScheduleLegend from "../components/ScheduleLegend";
import scheduleItemSorter from "../util/scheduleItemSorter";

function renderScheduleItems(items, day) {
    return items.filter(item => item.start.getDay() === day).map(({ start, end, events }) => (
        <ScheduleItem key={`schedule-${start}`}
                      start={start}
                      end={end}
                      eventType1={events[0].type}
                      eventDescription1={events[0].description}
                      eventType2={events[1] ? events[1].type : null}
                      eventDescription2={events[1] ? events[1].description : null} />
    ));
}

function Schedule({ scheduleItems }) {
    const sortedScheduleItems = scheduleItems.sort(scheduleItemSorter);
    const funEventDay = renderScheduleItems(sortedScheduleItems, 2);
    const hackDay1 = renderScheduleItems(sortedScheduleItems, 3);
    const hackDay2 = renderScheduleItems(sortedScheduleItems, 4);
    return (
        <MainBox>
            <h1>Schedule</h1>
            <ScheduleLegend />
            <h2>Tuesday, 21 June 2016</h2>
            {funEventDay}
            <h2>Wednesday, 22 June 2016</h2>
            {hackDay1}
            <h2>Thursday, 23 June 2016</h2>
            {hackDay2}
            <p><small><em>All times are in Berlin's timezone: Central European Summer Time (CEST)</em></small></p>
        </MainBox>
    );
}

export default Schedule;

export default connect(
    state => ({
        scheduleItems: state.scheduleItems
    })
)(Schedule);
