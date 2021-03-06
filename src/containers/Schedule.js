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
import isPast from "../util/isPast";

function renderScheduleItems(items, day) {
    return items.filter(item => item.start.getDay() === day).map(({ start, end, events, status }) => (
        <ScheduleItem key={`schedule-${start}`}
                      start={start}
                      end={end}
                      eventType1={events[0].type}
                      eventDescription1={events[0].description}
                      eventLocation1={events[0].location}
                      eventType2={events[1] ? events[1].type : null}
                      eventDescription2={events[1] ? events[1].description : null}
                      eventLocation2={events[1] ? events[1].location : null}
                      status={status} />
    ));
}

function Schedule({ scheduleItems }) {
    const funEventDay = renderScheduleItems(scheduleItems, 2);
    const hackDay1 = renderScheduleItems(scheduleItems, 3);
    const hackDay2 = renderScheduleItems(scheduleItems, 4);
    return (
        <MainBox>
            <h1>Schedule</h1>
            <ScheduleLegend />
            {isPast("2016-06-21") ? null : (
                <div>
                    <h2>Tuesday, 21 June 2016</h2>
                    {funEventDay}
                </div>
            )}
            {isPast("2016-06-22") ? null : (
                <div>
                    <h2>Wednesday, 22 June 2016</h2>
                    {hackDay1}
                </div>
            )}
            {isPast("2016-06-23") ? (
                <div><em>Nothing to see here, TechHack is over…</em></div>
            ) : (
                <div>
                    <h2>Thursday, 23 June 2016</h2>
                    {hackDay2}
                    <p><small><em>All times are in Berlin's timezone: Central European Summer Time (CEST)</em></small></p>
                </div>
            )}
        </MainBox>
    );
}

export default Schedule;

export default connect(
    state => ({
        scheduleItems: state.scheduleItems
    })
)(Schedule);
