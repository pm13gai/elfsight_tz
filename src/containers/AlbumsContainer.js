import { connect } from 'react-redux'
import { loadAlbums } from '../actions/AlbumsActions'
import  Albums  from '../components/Albums'



const mapStateToProps = store => {
  return {
    data: store.albums.data,
    error: store.albums.error,
    isFetching: store.albums.isFetching,
    users_data: store.users.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
     loadAlbums: (id) => dispatch(loadAlbums(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums)
