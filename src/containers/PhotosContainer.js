import { connect } from 'react-redux'
import  Photos  from '../components/Photos'
  
  
  const mapStateToProps = store => {
    return {
        data: store.albums.data,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Photos)