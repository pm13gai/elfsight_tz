import { connect } from 'react-redux'
import  Users  from '../components/Users'
import { loadUsers } from '../actions/UsersActions'



const mapStateToProps = store => {
  return {
    data: store.users.data,
    error: store.users.error,
    isFetching: store.users.isFetching,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUsers: () => dispatch(loadUsers()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

