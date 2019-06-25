import React from 'react';
import './App.css';

const sounds = [{
  keyCode: 81, keyTrigger: 'Q', id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87, keyTrigger: 'W', id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69, keyTrigger: 'E', id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65, keyTrigger: 'A', id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83, keyTrigger: 'S', id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68, keyTrigger: 'D', id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90, keyTrigger: 'Z', id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88, keyTrigger: 'X', id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67, keyTrigger: 'C', id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

class DrumPad extends React.Component {
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
  }

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
        <h1>{this.props.keyTrigger}</h1>
        <audio ref={ref => this.audio = ref} className="clip" src={this.props.url} id={this.props.keyTrigger} />
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display" />
        <div id="drum-pads">{sounds.map(s => (<DrumPad id={s.id} keyTrigger={s.keyTrigger} src={s.url} />))}</div>
      </div>
    )
  }
}

export default App;
