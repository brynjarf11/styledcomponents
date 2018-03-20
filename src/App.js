import React from 'react';
import Modal from './components/Modal/Modal';
import ProgressBar from './components/ProgressBar/ProgressBar';
import NameCard from "./components/NameCard/NameCard";
import TimePicker from "./components/TimePicker/TimePicker";
import Carousel from './components/Carousel/Carousel';

import DatePicker from "./components/DatePicker/DatePicker";
import Row from './components/Row/Row';
import Col from './components/Column/Col';
import CartoonNetworkSpinner from "./components/CartoonNetworkSpinner/CartoonNetworkSpinner";
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
                  format={12} />
          </div>
          <div>
              <h2>Carousel</h2>
              <Carousel
                  images={[
                      'https://i.pinimg.com/236x/fc/7a/b1/fc7ab1608bcedab667a6b1e718e5546b--beautiful-men-beautiful-people.jpg',
                      'https://pbs.twimg.com/media/Cnbc-ZeVMAAxuTg.jpg',
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc3O0vNCuKIwPe08IuiYWciZkLOB-5_va3fJjxvjrFN7E4jCLLHQ',
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4LM0motrDIVjSxb3Fd5LfL5kjVlTZWuiNobPHeSDN_aNz4nP'
                  ]}
                  size="medium" />
          </div>
          <div>
              <h2>DatePicker</h2>
              <DatePicker
                  onDatePick={date => this.setState({ date })}
                  locale="en-EN" />
          </div>
          <Row>
              <Col size={4}>Column1</Col>
              <Col size={4}>Column2</Col>
              <Col size={4}>Column3</Col>
          </Row>
          <Row>
              <Col size={4}>Column1</Col>
              <Col size={8}>Column2</Col>
          </Row>

          <div>
              <h3>CartoonNetworkSpinner</h3>
              <CartoonNetworkSpinner
                interval={5} />
          </div>
      </div>
    );
  }
}

export default App;
