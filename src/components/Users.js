import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

export default class Users extends React.Component {

  componentDidMount(){
    this.props.loadUsers();
  }

  renderTemplate = () => {

    const {   data, error, isFetching } = this.props

    if (error) {
      return <p>Во время запроса произошла ошибка {error}</p>
    }

    if (isFetching) {
      return <p>Загрузка...</p>
    }
    
    if (data.length) {
      return (
      <div>
        
        {data.map((item,index)=>(
        <div key={item.id}>          
          <Link className="userName" to={`/users/${item.id}`}>{item.name}</Link>
        </div>
        ))}         
      </div>
        )
    }
  }


  render() {
    return (
      <div>
        <h1>Пользователи</h1>
        {this.renderTemplate()}
      </div>
    )
  }
}
Users.propTypes = {
  data: PropTypes.array.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  loadUsers: PropTypes.func.isRequired,
}

