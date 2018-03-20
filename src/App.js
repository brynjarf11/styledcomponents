import React from 'react';
import Modal from './components/Modal/Modal';
import ProgressBar from './components/ProgressBar/ProgressBar';
import NameCard from "./components/NameCard/NameCard";
import TimePicker from "./components/TimePicker/TimePicker";
import Row from './components/Row/Row';
import Col from './components/Column/Col';
import Tabs from './components/Tabs/Tabs';
import Styles from './components/Tabs/Tabs.module.css'
import Tab from "./components/Tab/Tab";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false,
            time: '',
            tab:''
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
              <h2>Tabs</h2>
              <Tabs theme='dark' layout='vertical' onSelect={newTab => this.setState({ tab:newTab})}>
                  <Tab title='Tab 1' selectionKey={1}>
                  </Tab>
                  <Tab title='Tab 2'selectionKey={2}>
                  </Tab>
                  <Tab title='Tab 3'selectionKey={3}>
                  </Tab>
                  <Tab title='Tab 4'selectionKey={4}>
                  </Tab>
              </Tabs>
              <Tabs theme='light' layout='horizontal' onSelect={newTab => this.setState({ tab:newTab})}>
                  <Tab title='Tab 1'selectionKey={5}>
                  </Tab>
                  <Tab title='Tab 2'selectionKey={6}>
                  </Tab>
                  <Tab title='Tab 3'selectionKey={7}>
                  </Tab>
                  <Tab title='Tab 4'selectionKey={8}>
                  </Tab>
              </Tabs>
          </div>
      </div>
    );
  }
}

export default App;
