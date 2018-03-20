import React from 'react';
import PropTypes from 'prop-types';

import styles, {} from './Carousel.module.css';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.iterateLeft = this.iterateLeft.bind(this);
        this.iterateRight = this.iterateRight.bind(this);
        this.changeSize = this.changeSize.bind(this);
        this.state = {
            currentImage: this.props.images[0],
            currentSize: this.props.size,
            counter: 0
        }
    }
    iterateLeft() {
        if(this.state.counter !== 0) {
            this.setState({
                currentImage: this.props.images[(this.state.counter) -1],
                counter: this.state.counter-1
            });
        }
    }
    iterateRight() {
        if(this.state.counter !== (this.props.images.length)-1) {
            this.setState({
                currentImage: this.props.images[(this.state.counter) +1],
                counter: this.state.counter+1
            });
        }
    }
    changeSize(e) {
        console.log(e.target.value);
        let size = e.target.value;
        this.setState({
            currentSize: size
        })

    }
    render() {
        return (
            <div className={styles.myCarousel}>
                <div className={`${styles.center} ${styles.image} `}>
                    <img className={styles[this.state.currentSize]} src={this.state.currentImage}/>
                </div>
                <div className={`${styles.center}`}>
                    <div className={`${styles.arrowLeft} ${["fa fa-arrow-left"]}`} onClick={this.iterateLeft}> </div>
                    <div className={`${styles.arrowRight} ${["fa fa-arrow-right"]}`} onClick={this.iterateRight}> </div>
                </div>
                <div className={`${styles.center}`}>
                    <button className={`${styles.btn}`} value={"small"} onClick={this.changeSize}>Small</button>
                    <button className={`${styles.btn}`} value={"medium"} onClick={this.changeSize}>Medium</button>
                    <button className={`${styles.btn}`} value={"large"} onClick={this.changeSize}>Large</button>
                </div>
            </div>
        );

    }
}

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default Carousel;