import React, {Component} from 'react'
import Link from 'next/link'

export default class VideoCard extends Component {
  render () {
    return (
      <React.Fragment>
          <Link
            href={{pathname: '/videos', query: { id: this.props.id }}}
            as={`/videos/${this.props.id}`}
          >
            <a className="card">
              <h3>{this.props.title}</h3>
              <p>View {this.props.view}</p>
              <p>Learn more about Next on Github and in their examples</p>
            </a>
          </Link>
        <style jsx>{`
        .card {
          padding: 18px 18px 24px;
          margin-top: 30px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }`}
        </style>
      </React.Fragment>
    )
  }
}