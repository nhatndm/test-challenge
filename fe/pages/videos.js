import {Component} from 'react'
import Layout from '../components/layout/'
import axios from 'axios'
import Styling from '../css/index'

export default class About extends Component {

  static async getInitialProps ({ query: { id } }) {
    const video = await axios.get(`http://localhost:5000/api/v1/videos/${id}`)
    return { video: video.data }
  }

  render() {
    return (
      <Layout title="About">
        <Styling />
        <div className="hero">
          <h1 className="title">{this.props.video.title}</h1>
          <div className="video">
            <video controls>
              <source src={this.props.video.video_url} type="video/mp4" />
            </video>
          </div>
        </div>
      </Layout>
    )
  }
}
