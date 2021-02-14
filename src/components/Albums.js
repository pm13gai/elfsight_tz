import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

export default class Albums extends React.Component {
  componentDidMount(){
    this.props.loadAlbums(this.props.match.params.userId);
  }

  renderTemplate = () => {

    const {  data, error, isFetching } = this.props

    if (error) {
      return <p>Во время запроса произошла ошибка {error}</p>
    }

    if (isFetching) {
      return <p>Загрузка...</p>
    }

    
    if (data.length) {
      return (
      <div>
        {data.map((item,index)=>{return(
        <div key={item.id}>          
          <Link className="album_link" to={`/users/${item.userId}/${item.id}`}>
            <div className="album_card">
              <img src={`${item.photos[0].thumbnailUrl}`} alt=""></img>
              <div className="album_desc">
                <p>{item.title}</p>
                <span>{item.photos.length} фотографий</span>
              </div>
            </div>
          </Link>
        </div>
        )})}
      </div>
      )
    }
  }

  render() {
    const { users_data } = this.props
    return (
      <div>
        <div className="nav">
          <Link to='/users'>Users</Link>
        </div>
        <h1>Альбомы {users_data.length ? users_data.find(usr => usr.id === parseInt(this.props.match.params.userId,10)).name : ""}</h1>

        {this.renderTemplate()}
      </div>
    )
  }
}
Albums.propTypes = {
  data: PropTypes.array.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  loadAlbums: PropTypes.func.isRequired,
}

