import React from 'react';
import PropTypes from 'prop-types';
import styles from './cartoonnetworkspinner-module.css';

class CartoonNetworkSpinner extends React.Component {

    constructor(props) {
        super(props);
        this.spin = this.spin.bind(this);
        this.state = {
            images: [],
            index: 0,
            image: 'https://static-s.aa-cdn.net/img/amazon/30600000381251/ee918ebafdc68fcdcdfe5edf843b3527?v=1'
        };
    }
    componentDidMount() {
        let int = this.props.interval * 1000;
        let arr = [
            'https://static-s.aa-cdn.net/img/amazon/30600000381251/ee918ebafdc68fcdcdfe5edf843b3527?v=1',
            'https://lh3.googleusercontent.com/W2mr_HXxSEzI8IJcNz0rBYTeBbCvznoiysBABde03UPEAxBf52bxbqfSjymgLUcivpM=s256',
            'https://lh3.googleusercontent.com/BwYYwk1bdYjM01FZKcVyaOBWCiBZ_bbEhof_2GvPLwUNpoBQMIwNms95HFx9zeNDQZU=s256',
            'https://lh3.googleusercontent.com/Xwx13O_0HfsmTiO8cr3b8vmO9tAGwH5TXprUb1zFlD4HSSgfoRzxFpz4nJkBGP8OGJr8=s256',
            'https://lh3.googleusercontent.com/wrPp-UGRPOxMEeau8znRqT6r-Y2JjaJNv1fjP1ZSkJDnY8rczSULkQVd6d30bU8hwlU=s256'
        ];
        this.setState({ images: arr });

        setInterval(
            this.spin
        , int );
    }

    spin() {
        let ind = this.state.index;
        ind = ind+1;

        if(ind === this.state.images.length){
            ind = 0;
        }
        this.setState({ index: ind });

        let nextImage;
        nextImage = this.state.images[this.state.index];
        this.setState({ image: nextImage})
    }


    render() {

        const { image } = this.state;

        return(
            <div>
                <img src={image} className={`${styles.image} ${styles.rotate}`} alt=""/>
            </div>);
    }
}

CartoonNetworkSpinner.propTypes = {
    interval: PropTypes.number
};

export default CartoonNetworkSpinner;
