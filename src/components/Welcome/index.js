// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  changeBtn = () => {
    const {isSubscribe} = this.state

    if (isSubscribe === true) {
      this.setState({isSubscribe: false})
    } else {
      this.setState({isSubscribe: true})
    }
  }

  render() {
    const {isSubscribe} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        {isSubscribe ? (
          <button type="button" onClick={this.changeBtn}>
            subscribe
          </button>
        ) : (
          <button type="button" onClick={this.changeBtn}>
            subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
