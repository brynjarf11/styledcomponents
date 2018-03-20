import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Tabs.module.css';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSelectedTab:1
        };
    }

    /*
    tabsChanger = (tab) => {
        this.setState({currentSelectedTab:tab});

    };*/


        render() {
        if(this.props.layout === 'horizontal') {
            if(this.props.theme === 'dark'){
                return (
                    <div className={`${Styles.wrapper} ${Styles["layout-vertical"]} `}>
                        <div className={` ${Styles.tabsBase} ${Styles["layout-horizontal"]} ${Styles["theme-dark"]}`} >{this.props.children}

                        </div>
                        <div className={`${Styles.pannel} `}>

                        </div>
                    </div>
                );

            }
            else if(this.props.theme === 'light') {
                return (
                    <div className={`${Styles.wrapper} ${Styles["layout-vertical"]}`}>
                        <div className={` ${Styles.tabsBase} ${Styles["layout-horizontal"]}`}>{this.props.children}

                        </div>
                        <div className={`${Styles.pannel} ${Styles["theme-light"]}`}>

                        </div>
                    </div>
                );

            }

        }
        else if (this.props.layout === 'vertical') {
            if(this.props.theme === 'dark'){
                return (
                    <div className={`${Styles.wrapper} ${Styles["layout-horizontal"]}`}>
                        <div className={` ${Styles.tabsBase} ${Styles["layout-vertical"]}`}>{this.props.children}

                        </div>
                        <div className={`${Styles.pannel} ${Styles["theme-dark"]}`}>

                        </div>
                    </div>
                );
            }
            else if(this.props.theme === 'light') {
                return (
                    <div className={`${Styles.wrapper} ${Styles["layout-horizontal"]}`}>
                        <div className={` ${Styles.tabsBase} ${Styles["layout-vertical"]}`}>{this.props.children}

                        </div>
                        <div className={`${Styles.pannel} ${Styles["theme-light"]}`}>

                        </div>
                    </div>
                );

            }

        }

    }
}

Tabs.propTypes = {
    theme: PropTypes.oneOf(['dark','light']),
    layout: PropTypes.oneOf(['horizontal','vertical']),
    children:PropTypes.node,
    onSelect:PropTypes.func,
    currentSelectedTab:PropTypes.number
};

Tabs.defaultProps = {
    theme:'light',
    layout:'horizontal'
};

export default Tabs;
