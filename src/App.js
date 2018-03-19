import React from 'react';
import Modal from './components/Modal/Modal';
import ProgressBar from './components/ProgressBar/ProgressBar';
import NameCard from "./components/NameCard/NameCard";
import TimePicker from "./components/TimePicker/TimePicker";
import Row from './components/Row/Row';
import Col from './components/Column/Col';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false,
            time: ""
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
          <div>
              <h2>NameCard</h2>
              <NameCard
                  name="Þorlákur Lyngmo"
                  email="thorlakur16@ru.is"
                  telephone="+354-867-7810"
                  imageUrl="http://laoblogger.com/images/nicholas-cage-clipart-7.jpg" />
          </div>
          <div>
              <h2>TimePicker</h2>
              <TimePicker
                  onTimePick={time => this.setState({ time })}
                  format={24} />
          </div>

          <Row>
              <Col size={4}>Column1</Col>
              <Col size={4}>Column2</Col>
              <Col size={4}>Column3</Col>
          </Row>
          <Row>
              <Col>Column1</Col>
              <Col>Column2</Col>
              <Col>Column3</Col>
              <Col>Column4</Col>
              <Col>Column5</Col>
              <Col>Column6</Col>
              <Col>Column7</Col>
              <Col>Column8</Col>
              <Col>Column9</Col>
              <Col>Column10</Col>
              <Col>Column11</Col>
              <Col>Column12</Col>

          </Row>
      </div>
    );
  }
}

export default App;
