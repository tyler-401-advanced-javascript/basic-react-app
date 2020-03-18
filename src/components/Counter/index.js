import React from 'react'
import './Counter.scss'

class Thing extends React.Component {
  constructor () {
    super()
    this.windows = ['Green', 'Blue', 'Worst', 'Angry', 'Unhelpful', 'Rude'];
    this.styles = {
      dark: {
        backgroundColor: 'rgb(17, 20, 64)',
        color: 'rgb(227, 226, 220)'
      },
      light: {
        backgroundColor: 'rgb(245, 245, 245)',
        color: 'rgb(39, 41, 35)'
      }
    }

    this.state = {
      counter: 0,
      window: 0,
      style: true
    }
  }

  handleChange = e => {
    const changeVal = e.target.id === 'increase' ? 1 : -1;
    this.setState({
      counter: this.state.counter + changeVal,
      window: this.state.window + 1
    })
  }

  handleChangeStyle = () => {
    this.setState({
      style: !this.state.style
    })
  }

  render () {
    return (
      <section className="Counter" style={this.state.style ? this.styles.light : this.styles.dark}>
        <p>My wonderful component</p>
        <span>Now serving customer number: {this.state.counter}</span>
        <span>At window number: {this.windows[this.state.window % this.windows.length]}</span>
        <button id="increase" onClick={this.handleChange}>Take Ticket</button>
        <button id="decrease" onClick={this.handleChange}>Take Somebody Else's Ticket</button>
        <button id="style" onClick={this.handleChangeStyle}>Dark / Light</button>
      </section>
    )
  }
}

export default Thing
