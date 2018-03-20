import React from 'react';
import Styles from './Col.module.css';

class Col extends React.Component{
    render() {
        return (
            <div className={`${Styles.columnFab}`}
                 style={{width:`${this.props.size *(100/12)}%`}}
            >{this.props.children}
            </div>
        );
    }
}

Col.propTypes = {
    size:(props,propName) => {
        const prop = props[propName];
        if(prop >= 1 && prop <= 12) {return;}
        return new Error('Column size should be between 1 and 12');
    }
};
Col.defaultProps = {
    size: 1
};

export default Col;