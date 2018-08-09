import React, {Component} from 'react'
import Header from './header'
import Link from 'next/link'

export default class Layout extends Component {
  render () {
    return (
      <React.Fragment>
        <Header title={this.props.title}/>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link href='/'>
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/about'>
                  <a className="nav-link">About Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </React.Fragment>
    )
  }
}