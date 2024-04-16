import React from 'react';

class EventClass extends React.Component {
  clickHandler(){
    console.log("Class Button Pressed!")
  }
  render() {
    return <button onClick={this.clickHandler}>I'm a class-based component!</button>;
  }
}

export default EventClass;
