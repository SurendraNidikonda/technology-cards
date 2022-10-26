// Write your code here.
import './index.css'

const Card = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList

  return (
    <li className={`${className} card-container`}>
      <h1 className="heading">{title}</h1>
      <p className="info">{description}</p>
      <div className="img-card">
        <img src={imgUrl} className="avatar" alt={title} />
      </div>
    </li>
  )
}

export default Card
