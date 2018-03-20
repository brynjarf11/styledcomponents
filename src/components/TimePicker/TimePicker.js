import React from 'react';
import PropTypes from 'prop-types';
import styles from './timepicker-module.css';

class TimePicker extends React.Component {
    componentDidMount() {
        let hours = [];
        if(this.props.format === 12){
            this.setState({ useAM: true });
            for(let i = 1; i < 13; i++){
                hours.push(i);
            }
            this.setState({ hours: hours });
        }
        else {
            this.setState({ useAM: false });
            for(let i = 0; i < 24; i++){
                hours.push(i);
            }
            this.setState({ hours: hours });
        }

        let minutes = [];
        for(let i = 0; i < 60; i++){
            minutes.push(i);
        }
        this.setState({ minutes: minutes });
    }
    constructor(props) {
        super(props);
        this.hoursClicked = this.hoursClicked.bind(this);
        this.hourPicked = this.hourPicked.bind(this);
        this.minutesClicked = this.minutesClicked.bind(this);
        this.minutePicked = this.minutePicked.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            time: "",
            hours: [],
            hoursAM: [],
            minutes: [],
            selectedHour: 0,
            selectedMinute: 0,
            useAM: false,
            showHours: false,
            showMinutes: false
        };
    }

    hoursClicked() {
        this.setState({showHours: true});
        this.setState({showMinutes: false});
    }

    minutesClicked() {
        this.setState({showHours: false});
        this.setState({showMinutes: true});
    }

    hourPicked(e) {
        this.setState({showHours: false});
        this.setState({selectedHour:e.target.innerText});
        document.getElementById("hours").innerText = "Hours: " +e.target.innerText;
    }

    minutePicked(e) {
        this.setState({showMinutes: false});
        this.setState({selectedMinute:e.target.innerText});
        document.getElementById("minutes").innerText = "Minutes: " +e.target.innerText;
    }

    onSubmit(){
        let h = this.state.selectedHour;
        let m = this.state.selectedMinute;
        let t = h + ":" + m;
        this.setState({ time: t });
        this.props.onTimePick( t );
    }

    render() {
        const { showHours, showMinutes, hours, minutes, useAM } = this.state;
        return (
            <div>
                <div  className={`${styles.container}`}>
                    <div>
                        {useAM ?
                            <div className={`${styles.typebox}`}>AM/PM</div> : <div className={`${styles.typebox}`}>
                                24H
                            </div>
                        }

                        <div id="hours" className={`${styles.pickbox}`} onClick={this.hoursClicked}>Hours</div>
                        <div id="minutes" className={`${styles.pickbox}`} onClick={this.minutesClicked}>Minutes</div>
                        <div id="done" className={`${styles.pickbox} ${styles.submit}`} onClick={this.onSubmit}>Submit</div>
                    </div>
                    <div>
                        {showHours ?
                            <div className={`${styles.picker}`}>
                                    {hours.map(m => (
                                    <div key={m} className={`${styles.item}`} onClick={this.hourPicked}>{m}</div>))}
                            </div> : ""}

                        {showMinutes ?
                            <div className={`${styles.picker}`}>
                                {minutes.map(m => ( <div key={m} className={`${styles.item}`} onClick={this.minutePicked}>{m}</div> ))}
                            </div> : ""}
                    </div>
                </div>
            </div>
        );
    }
}

TimePicker.propTypes = {
    format: PropTypes.number,
    onTimePick: PropTypes.func
};

TimePicker.defaultProps = {
    format: 24,
};

export default TimePicker;