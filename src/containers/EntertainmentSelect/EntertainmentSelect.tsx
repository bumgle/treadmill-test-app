import * as React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import VideoSelector from '../../components/VideoSelector'
import Video from '../../components/Video'
import { AppState } from '../../ducks'
import { setVideoCurrent, setVideoSource } from '../../ducks/Video'
import { VideoStoreType } from '../../types'

type EntertainmentSelectProps = {
  video: VideoStoreType
  setVideo: (source: string) => void
  setVideoCur: (current: number) => void
}

const EntertainmentSelect: React.FC<EntertainmentSelectProps> = (
  props: EntertainmentSelectProps
) => {
  const { video, setVideo, setVideoCur } = props
  return (
    <>
      <VideoSelector source={video.source} setVideoSource={setVideo} />
      <Link to="/entertainment">
        <Video {...video} setVideoCurrent={setVideoCur} />
      </Link>
    </>
  )
}

const mapStateToProps = (state: AppState) => ({
  video: state.video
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setVideoCur: (current: number) => dispatch(setVideoCurrent(current)),
  setVideo: (source: string) => dispatch(setVideoSource(source))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntertainmentSelect)
