import React from 'react';
import Modal from './components/Modal/Modal';
import ProgressBar from './components/ProgressBar/ProgressBar';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false
        }
    }

  render() {
    return (
      <div className="App">
          <h1>MODAL TEST</h1>
          <button onClick={()=>{this.setState({isOpen:true})}}> Open Modal</button>
          <Modal isOpen={this.state.isOpen} onClose={()=>{this.setState({isOpen:false})}}>
              <Modal.Title>Modal Title</Modal.Title>
              <Modal.Body>Modal Body</Modal.Body>
              <Modal.Footer>Modal Footer</Modal.Footer>
          </Modal>
          <h1>ProgressBar TEST</h1>
          <ProgressBar
              progress={25}
              striped={true}
              animated={true}
              state="info"
          />
          <ProgressBar
              progress={55}
              striped={true}
              animated={true}
              state="success"
          />
          <ProgressBar
              progress={65}
              striped={true}
              animated={true}
              state="warning"
          />
          <ProgressBar
              progress={75}
              striped={true}
              animated={true}
              state="danger"
          />
      </div>
    );
  }
}

export default App;
