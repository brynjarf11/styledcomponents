import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Col.module.css';

class Col extends React.Component{
    render() {
        console.log(Styles.columnFab);
        return (
            <div className={`${Styles.columnFab}`}
                 style={{width:`${this.props.size *8.3333}%`}}
            >{this.props.children}
            </div>
        );

    }
}

Col.propTypes = {
    size:PropTypes.number,
    child:PropTypes.node
};
Col.defaultProps = {
    size: 1
};

export default Col;