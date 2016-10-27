import React from 'react';

import AddOnsComponent from './AddOnsComponent';
import ColorPickerComponent from './ColorPickerComponent';
import './CustomizerContainerComponent.scss';

class CustomizerContainerComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      carColor: 'blue'
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(newCarColor) {
    this.setState({
      carColor: newCarColor
    });
  }
  render() {
    return (
      <div id="customizer" className="row">
        <ColorPickerComponent />
        <AddOnsComponent />
      </div>
    );
  }
}

export default CustomizerContainerComponent;
