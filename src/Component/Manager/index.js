import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Passwords from '../Passwords/index'

import './index.css'

const passwordsList = []

class Manager extends Component {
  state = {
    website: '',
    name: '',
    password: '',
    searchValue: '',
    showValue: false,
    duplicateList: passwordsList,
  }

  onWebsite = event => {
    this.setState({website: event.target.value})
  }

  onName = event => {
    this.setState({name: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()

    const {website, name, password} = this.state

    const newList = {
      id: uuidv4(),
      name,
      website,
      password,
    }

    this.setState(prev => ({
      duplicateList: [...prev.duplicateList, newList],
      name: '',
      website: '',
      password: '',
    }))
  }

  onSeach = event => {
    this.setState({searchValue: event.target.value})
  }

  onShow = () => {
    this.setState(prev => ({showValue: !prev.showValue}))
  }

  onDelete = id => {
    const {duplicateList} = this.state
    const deletingList = duplicateList.filter(item => id !== item.id)
    this.setState({duplicateList: deletingList})
  }

  render() {
    const {
      website,
      name,
      password,
      duplicateList,
      showValue,
      searchValue,
    } = this.state

    const filteredList = duplicateList.filter(event =>
      event.website.includes(searchValue),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="inputs-container">
          <form className="form-container" onSubmit={this.onAdd}>
            <h1 className="form-heading">Add New Password</h1>
            <div className="input-container">
              <div className="input-img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-img"
                />
              </div>

              <input
                type="text"
                className="input"
                placeholder="Enter Website"
                onChange={this.onWebsite}
                value={website}
              />
            </div>
            <div className="input-container">
              <div className="input-img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-img"
                />
              </div>
              <input
                type="text"
                className="input"
                placeholder="Enter Username"
                onChange={this.onName}
                value={name}
              />
            </div>
            <div className="input-container">
              <div className="input-img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-img"
                />
              </div>
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                onChange={this.onPassword}
                value={password}
              />
            </div>
            <button type="submit" className="form-btn">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager"
          />
        </div>
        <div className="display-container">
          <form className="display-form">
            <div className="passwords-initial-container">
              <div className="passwords-container">
                <h1 className="password-heading">Your Passwords</h1>
                <p className="password-count">{duplicateList.length}</p>
              </div>
              <div className="search-container">
                <div className="search-img-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="search-img"
                  />
                </div>
                <input
                  type="search"
                  className="search"
                  placeholder="search"
                  onChange={this.onSeach}
                />
              </div>
            </div>
            <hr />
            <div className="show-passwords-cont">
              <input
                type="checkbox"
                id="show"
                className="show-icon"
                value="false"
                onClick={this.onShow}
              />
              <label htmlFor="show" className="show-passwords">
                Show Passwords
              </label>
            </div>
          </form>

          {filteredList.length === 0 ? (
            <div className="no-password-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-img"
              />
              <p className="no-password">No Passwords</p>
            </div>
          ) : (
            <ul className="list">
              {filteredList.map(item => (
                <Passwords
                  aurgs={item}
                  displayvalue={showValue}
                  key={item.id}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Manager
