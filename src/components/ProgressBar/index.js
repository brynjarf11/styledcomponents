import React from 'react';
import PropTypes from 'prop-types';
import styles,{myProgress,myValue} from './ProgressBar.module.css';

const ProgressBar = ({progress,striped,animated,state}) => {


    if(striped === true ){
        if(animated === true) {
            return (
                <div className={myProgress}>
                    <div className={`${styles.myBarAnim}  ${styles[`str-${state}`]}`} style={{
                        width: `${progress}%`,
                    }}>
                        <p className={myValue}>{progress}%</p>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className={myProgress}>
                    <div className={`${styles.myBar}  ${styles[`str-${state}`]}`} style={{
                        width: `${progress}%`

                    }}>
                        <p className={myValue}>{progress}%</p>
                    </div>
                </div>
            );

        }
    }
    else{
        if(animated === true) {
            return (
                <div className={myProgress}>
                    <div className={`${styles.myBarAnim}  ${styles[state]}`} style={{
                        width: `${progress}%`

                    }}>
                        <p className={myValue}>{progress}%</p>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className={myProgress}>
                    <div className={`${styles.myBar}  ${styles[state]}`} style={{
                        width: `${progress}%`
                    }}>
                        <p className={myValue}>{progress}%</p>
                    </div>
                </div>
            );
        }
    }
};

ProgressBar.propTypes = {
    progress: (props,propName) =>{
        if(props[propName] >= 0 && props[propName] <= 100) {return;}
        return new Error('Number must be between 0 and 100');
    },
    striped: PropTypes.bool.isRequired,
    animated: PropTypes.bool.isRequired,
    state: PropTypes.oneOf(['info','success','warning','danger'])
};

export default ProgressBar;
