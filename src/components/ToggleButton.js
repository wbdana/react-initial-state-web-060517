// Component Code Goes Here
import React from 'react';

class ToggleButton extends React.Component {
  constructor() {
    super();

    this.state = {
      isEnabled: false
    }
  }

  render() {
    return (
      <button classname="toggle-button">
        I am toggled {this.state.isEnabled ? 'on' : 'off'}
      </button>
    )
  }
}

export default ToggleButton;
