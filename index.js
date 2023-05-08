import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstCard: false,
    lastCard: false,
  }

  firstName = () => {
    this.setState(prevState => ({firstCard: !prevState.firstCard}))
  }

  lastName = () => {
    this.setState(prevState => ({lastCard: !prevState.lastCard}))
  }

  render() {
    const {lastCard, firstCard} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="cards-container">
          <div className="card-container">
            <button type="button" className="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {firstCard && <p className="para">Joe</p>}
          </div>
          <div className="card-container">
            <button type="button" className="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {lastCard && <p className="para">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
