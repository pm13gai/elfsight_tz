import React, {Suspense} from 'react'
import { Switch, Redirect } from "react-router-dom"
import { Img } from 'react-image'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
}

export default class Photos extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false,
      activeUrl: '',
      activeIndex: -1
    }
  }

  openModal = (url,i) => {
    this.setState({ modalIsOpen: true, activeUrl: url, activeIndex: i })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false, activeUrl: '', activeIndex: -1 })
  }

  nextPhoto = (arr) => {
    const i = this.state.activeIndex;
    if(i+1 > arr.length-1) return;
    this.setState({ modalIsOpen: true, activeUrl: arr[i+1].url, activeIndex: i+1 })

  }
  prevPhoto = (arr) => {
    const i = this.state.activeIndex;
    if(i-1 < 0) return;
    this.setState({ modalIsOpen: true, activeUrl: arr[i-1].url, activeIndex: i-1 })

  }

  render() {
    const { modalIsOpen, activeUrl } = this.state
    const { data } = this.props
    const { albumId } = this.props.match.params
    if(data.length===0) return(
      <Switch>
        <Redirect to='/users'/>
      </Switch>)
    const album_data = data.find(alb => alb.id === parseInt(albumId,10))
    return(
        <div>
            <div className="nav">
                <Link to='/users'>Users</Link>
                <Link to={`/users/${album_data.userId}`}>Вернуться к альбому</Link>
            </div>
            <h1>Фото</h1>
            {album_data.photos.map((item,index)=>(
                <div className="thumb_photo" key={item.id}>
                  <Suspense>
                    <Img src={item.thumbnailUrl} onClick={()=>this.openModal(item.url,index)}/>
                  </Suspense>
                </div>
            ))}

            <Modal isOpen={modalIsOpen} ariaHideApp={false} style={customStyles} onRequestClose={this.closeModal}>
              <div>
                <div className="modal_photo">
                  <div className="prev_next" onClick={()=>this.prevPhoto(album_data.photos)}><span>{"<<"}</span></div>
                  <div className="big_img"><img src={activeUrl} alt="" /></div>
                  <div className="prev_next" onClick={()=>this.nextPhoto(album_data.photos)}><span>{">>"}</span></div>
                </div>
              </div>
            </Modal>
        </div>)
  }
}
Photos.propTypes = {
  data: PropTypes.array.isRequired,
}

