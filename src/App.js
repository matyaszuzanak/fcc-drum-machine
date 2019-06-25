import React from 'react';
import './App.css';

const sounds = [{
  keyCode: 81, keyTrigger: 'Q', id: 'HEATER-1', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87, keyTrigger: 'W', id: 'HEATER-2', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69, keyTrigger: 'E', id: 'HEATER-3', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65, keyTrigger: 'A', id: 'HEATER-4', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83, keyTrigger: 'S', id: 'CLAP', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68, keyTrigger: 'D', id: 'OPEN-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90, keyTrigger: 'Z', id: "KICK-N'-HAT", src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88, keyTrigger: 'X', id: 'KICK', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67, keyTrigger: 'C', id: 'CLOSED-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

class DrumPad extends React.Component {

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown)
    window.focus()
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown)
  }

  handleKeydown = e => {
    if (e.keyCode === this.props.keyTrigger.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }

  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
        <h1>{this.props.keyTrigger}</h1>
        <audio id={this.props.keyTrigger} className="clip" src={this.props.src} ref={ref => this.audio = ref} />
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "CLICK OR PRESS A BUTTON"
    }
  }

  handleDisplay = display => this.setState({ display })

  render() {
    return (
      <div id="drum-machine">
        <div class="d-flex align-items-center">
          <div id="display">{this.state.display}</div>
          <div id="drum-pads">
            {sounds.map(s => (<DrumPad
              key={s.id} id={s.id} keyTrigger={s.keyTrigger} src={s.src} handleDisplay={this.handleDisplay} />
            ))}</div>
        </div>
      </div>
    )
  }
}

export default App;