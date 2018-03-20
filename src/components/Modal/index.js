import React from 'react';
import PropTypes from 'prop-types';
import{modalTitle, modalBody, modalFooter, modal, modalOverlay, modalClose} from './Modal.module.css';



class Modal extends React.Component {

    render() {
        if(this.props.isOpen === true) {
            return (
                <div className={modalOverlay}>
                    <div className={modal}>{this.props.children}
                        <div className={modalClose} onClick={this.props.onClose}><i className="fa fa-times"></i></div>
                    </div>
                </div>


            )
        }
        else {
            return (<div></div>)
        }

    }

    };

Modal.Title = ({children}) => {
    return (
        <div className={modalTitle}>{children}</div>
    )
};

Modal.Body = ({children}) => {
    return (
        <div className={modalBody}>{children}</div>
    )
};

Modal.Footer = ({children}) => {
  return (
      <div className={modalFooter}>{children}</div>
  )
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node


};



export default Modal;
