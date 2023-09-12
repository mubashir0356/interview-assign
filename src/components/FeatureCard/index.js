import {BiRupee, BiCheck} from 'react-icons/bi'
import './index.css'

const FeatureCard = props => {
  const {cardDetails} = props
  const {
    model,
    suitableFor,
    description,
    price,
    featuresTitle,
    features,
  } = cardDetails

  console.log(model)

  return (
    <li className="feature-card">
      <h1 className="model">{model}</h1>
      <p className="suitable-for">{suitableFor}</p>
      <p className="card-description">{description}</p>
      <div className="price-container">
        <BiRupee className="rupee" />
        <p className="price">{price}</p>
        <>
          <p className="inr">
            INR
            <br />
            /mo
          </p>
        </>
      </div>
      <div className="features-list-container">
        <p className="features-heading">{featuresTitle}</p>
        <ul className="features-list">
          <li className="features-list-item">
            <BiCheck className="check" />
            <p className="feature">{features[0]}</p>
          </li>
          <li className="features-list-item">
            <BiCheck className="check" />
            <p className="feature">{features[1]}</p>
          </li>
          <li className="features-list-item">
            <BiCheck className="check" />
            <p className="feature">{features[2]}</p>
          </li>
        </ul>
      </div>
      <button type="button" className="try-button">
        Try for free
      </button>
    </li>
  )
}

export default FeatureCard
