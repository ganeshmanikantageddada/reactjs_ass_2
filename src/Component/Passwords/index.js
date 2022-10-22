import './index.css'

const Passwords = props => {
  const {aurgs, displayvalue, onDelete} = props
  const {website, name, password, id} = aurgs
  console.log(displayvalue)

  const nameProfile = website.slice(0, 1)

  const deleting = () => {
    onDelete(id)
  }

  const showing = displayvalue ? (
    <p className="website-password">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )

  return (
    <li className="pswd-container">
      <div className="profile-container">
        <h1 className="profile">{nameProfile}</h1>
      </div>
      <div className="about-passwords">
        <p className="website">{website}</p>
        <p className="name">{name}</p>
        {showing}
      </div>
      <button
        type="button"
        className="btn-delete"
        id="delete"
        onClick={deleting}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default Passwords
