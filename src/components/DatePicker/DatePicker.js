import React from 'react';
import PropTypes from 'prop-types';
import styles from './datepicker-module.css';

class DatePicker extends React.Component {
    componentDidMount() {
        let days = [];
        for(let i = 1; i < 31; i++){
            days.push(i);
        }
        this.setState({ days: days });

        let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        this.setState({ months: months });
    }
    constructor(props) {
        super(props);
        this.monthClicked = this.monthClicked.bind(this);
        this.monthPicked = this.monthPicked.bind(this);
        this.daysClicked = this.daysClicked.bind(this);
        this.dayPicked = this.dayPicked.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addToYear = this.addToYear.bind(this);
        this.subFromYear = this.subFromYear.bind(this);
        this.state = {
            date: "",
            year: 2018,
            months: [],
            days: [],
            minutes: [],
            selectedMonth: '',
            selectedDay: 0,
            showMonths: false,
            showDays: false
        };
    }

    monthClicked() {
        this.setState({showMonths: true});
        this.setState({showDays: false});
    }

    daysClicked() {
        this.setState({showMonths: false});
        this.setState({showDays: true});
    }

    monthPicked(e) {
        let m = e.target.innerText.toLowerCase();
        let numberOfDays;
        if(m === "january" || m === "march" || m === "may" || m === "july" || m ==="august" || m === "october" || m === "december"){
            numberOfDays = 31;
        }
        else if(m === "april" || m === "june" || m === "september" || m === "november"){
            numberOfDays = 30;
        }
        else{
            let y = this.state.year;
            let ans = y%4;
            console.log(ans);
            if(y % 4 === 0){
                numberOfDays = 27;
            }
            else{
                numberOfDays = 28;
            }
        }
        let days = [];
        for(let i = 1; i < numberOfDays+1; i++){
            days.push(i);
        }
        this.setState({ days: days });
        this.setState({showMonths: false});
        this.setState({selectedMonth:e.target.innerText});
        document.getElementById("months").innerText = e.target.innerText;
        document.getElementById("days").innerText = "Day";
    }

    dayPicked(e) {
        this.setState({showDays: false});
        this.setState({selectedDay:e.target.innerText});
        document.getElementById("days").innerText = e.target.innerText;
    }

    onSubmit(){
        const { locale } = this.props;
        let y = this.state.year;
        let m = this.state.selectedMonth;
        let m_number;
        let d = this.state.selectedDay;
        for(let i = 0; i < this.state.months.length; i++){
            if(m.toLowerCase() === this.state.months[i]){
                m_number = i;
            }
        }
        let date = new Date(Date.UTC(y, m_number, d));

        date.toLocaleDateString(locale, { timeZone: 'UTC' });
        console.log(date);
        this.setState({ date: date });
        this.props.onDatePick( date );
    }

    addToYear() {
        let year = this.state.year;
        year = year+1;
        this.setState({ year: year });
    }
    subFromYear() {
        let year = this.state.year;
        year = year-1;
        this.setState({ year: year });
    }

    render() {
        const { showDays, showMonths, days, months, year } = this.state;
        return (
            <div>
                <div  className={`${styles.container}`}>
                    <div>
                        <div className={`${styles.typebox}`}>Date</div>
                        <div className={`${styles.pickbox}`}>
                            <i className="fa fa-minus" onClick={this.subFromYear} />
                            { year }
                            <i className="fa fa-plus" onClick={this.addToYear} />
                        </div>
                        <div id="months" className={`${styles.pickbox}`} onClick={this.monthClicked}>Month</div>
                        <div id="days" className={`${styles.pickbox}`} onClick={this.daysClicked}>Day</div>
                        <div id="done" className={`${styles.pickbox} ${styles.submit}`} onClick={this.onSubmit}>Submit</div>
                    </div>
                    <div>
                        {showMonths ?
                            <div className={`${styles.picker}`}>
                                {months.map(m => (
                                    <div key={m} className={`${styles.item}`} onClick={this.monthPicked}>{m}</div>))}
                            </div> : ""}

                        {showDays ?
                            <div className={`${styles.picker}`}>
                                {days.map(m => ( <div key={m} className={`${styles.item} ${styles.day}`} onClick={this.dayPicked}>{m}</div> ))}
                            </div> : ""}
                    </div>
                </div>
            </div>
        );
    }
}

DatePicker.propTypes = {
    onDatePick: PropTypes.func,
    locale: PropTypes.string
};

DatePicker.defaultProps = {
    locale: 'is-IS'
};

export default DatePicker;