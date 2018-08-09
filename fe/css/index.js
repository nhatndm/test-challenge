import React, {Component} from 'react'

export default class Styling extends Component {
  render() {
    return (
      <React.Fragment>
        <style global jsx>{`
          .hero {
            width: 100%;
            margin-top: 100px;
            display: flex;
            flex-direction: column;
            align-items: center
          }
          .video {
            margin-top: 30px;
          }
        `}</style>
      </React.Fragment>
    )
  }
}