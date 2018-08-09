import React, {Component} from 'react'
import Layout from '../components/layout/'
import Styling from '../css/index'
import axios from 'axios'
import VideoCard from '../components/video'
import * as _ from 'lodash'

export default class Index extends Component {

  static async getInitialProps() {
    const listVideos = []
    const videosRequest = await axios.get('http://localhost:5000/api/v1/videos')
    const videos = videosRequest.data
    const numOfGroup = (videos.length / 4 === parseInt(videos.length / 4, 10)) ? ((videos.length / 4) - 1) : (Math.floor(videos.length / 4))
    for(let i = 0; i <= numOfGroup; i++){
      const startNumber = i * 4
      listVideos.push(_.filter(videos, (e, i) => i >= startNumber && i < startNumber + 4))
    }
    return { videos: listVideos }
  }

  renderColList = (a) => {
    return (
      <React.Fragment>
        {a.map((e,i) => (
          <div className="col" key={i}>
            <VideoCard title={e.title} id={e.id} view={e.view}/>
          </div>
        ))}
      </React.Fragment>
    )
  }

  renderRowList = () => {
    return (
      <React.Fragment>
        {this.props.videos.map((e, i) => (
          <div className="row" key={i}>
            {this.renderColList(e)}
          </div>
        ))}
      </React.Fragment>
    )
  }
  
  render() {
    return (
      <Layout title="Challenge Test">
        <Styling />
        <div className="hero">
          <h1 className="title">Welcome to Test Challenge</h1>
          {this.renderRowList()}
        </div>
      </Layout>
    )
  }
}