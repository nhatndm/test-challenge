import {Component} from 'react'
import Layout from '../components/layout/'
import Styling from '../css/index'

export default class About extends Component {
  render() {
    return (
      <Layout title="About">
        <Styling />
        <div className="hero">
          <h1 className="title">This is About Page</h1>
        </div>
      </Layout>
    )
  }
}