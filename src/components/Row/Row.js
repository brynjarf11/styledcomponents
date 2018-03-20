import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Row.module.css';

class Row extends React.Component {
    render() {
        return (
            <div className={Styles.Row}>{this.props.children}

            </div>
        );
    }
}

Row.propTypes = {
    children:PropTypes.node
};

export default Row;