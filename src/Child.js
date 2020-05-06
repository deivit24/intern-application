
import React from 'react'
import './Child.css';

class Child extends React.Component {
  render() {
    let active;
    let word;
    let white;
    if (this.props.blink) {
      active = "active"
      word = "Bye"
      white = "white"
    } else {
      active = ""
      word = "Hello"
      white = ""
    }

    return (
      <div id="container">
        <div className={"left grey " + active}>
          <div className={"left red " + active}>
            <div className={"left black " + active}>

            </div>
          </div>
        </div>
        <div className={"right grey " + active} >
          <div className={"right red " + active}>
            <div className={"right black " + active}>

            </div>
          </div>
        </div>
        <h1 id="words" className={(white)} style={{ color: this.props.color }}>{word} World</h1>
        <img src="https://media0.giphy.com/media/fLykXHHM5OWQMnexU4/source.gif" alt="" />


      </div>
    );
  }
}

export default Child;