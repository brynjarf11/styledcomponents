import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Tab.module.css';

class Tab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tab:1
        }
    }
    /*
    tabsHandler = () => {
        this.setState({tab:this.props.selectionKey});
        let tabs = this.state.tab;
        //this.props.tabsChanger(tabs);
    };*/
    render() {
        return (
            <div className={Styles.tab}  >
                {this.props.title}
            </div>
        );
    }
}

Tab.propTypes = {
    title:PropTypes.string.isRequired,
    selectionKey:PropTypes.number.isRequired
};

export default Tab;
