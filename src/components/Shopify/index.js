import {Component} from 'react'
import {BiRupee, BiCheck} from 'react-icons/bi'
import Navbar from '../Navbar'
import TabItem from '../TabItem'
import FeatureCard from '../FeatureCard'

import './index.css'

const tabsList = [
  {tabId: 'BASIC', displayText: 'Basic'},
  {tabId: 'SHOPIFY', displayText: 'Shopify'},
  {tabId: 'ADVANCED', displayText: 'Advanced'},
]

const tabDetails = [
  {
    category: 'BASIC',
    model: 'Basic',
    suitableFor: 'FOR INDIVIDUALS AND SMALL BUSINESSES',
    description:
      'Everything you need to create your store, ship products, and process payments',
    price: '1,994',
    featuresTitle: "What's included on Basic",
    features: [
      'Basic reports',
      'Up to 1,000 inventory locations',
      '2 staff accounts',
    ],
  },
  {
    category: 'SHOPIFY',
    model: 'Shopify',
    suitableFor: 'FOR SMALL BUSINESSES',
    description:
      'Level up your business with professional reporting and  more staff accounts',
    price: '7,447',
    featuresTitle: 'What’s included on shopify',
    features: [
      'Professional reports',
      'Up to 1,000 inventory locations',
      '5 staff accounts',
    ],
  },
  {
    category: 'ADVANCED',
    model: 'Advanced ',
    suitableFor: 'FOR MEDIUM TO LARGE BUSINESSES',
    description:
      'Get the best of shopify with custom reporting and our lowest transaction fee',
    price: '30,164',
    featuresTitle: 'What’s included on Advanced',
    features: [
      'Custom report builder',
      'Up to 1,000 inventory locations',
      '15 staff accounts',
    ],
  },
]

class Shopify extends Component {
  state = {activeTabId: tabsList[0].tabId}

  changeActiveTab = id => {
    this.setState({activeTabId: id})
  }

  getTabDetails = () => {
    const {activeTabId} = this.state
    const activeTabDetails = tabDetails.find(
      eachTab => eachTab.category === activeTabId,
    )

    return activeTabDetails
  }

  render() {
    const {activeTabId} = this.state
    const activeTabDetails = this.getTabDetails()
    const {price, featuresTitle, features} = activeTabDetails

    return (
      <div className="app-bg">
        <Navbar />
        <div className="mobile-content">
          <ul className="tabs-container">
            {tabsList.map(eachTab => (
              <TabItem
                tabDetails={eachTab}
                isActive={eachTab.tabId === activeTabId}
                key={eachTab.tabId}
                changeTab={this.changeActiveTab}
              />
            ))}
          </ul>
          <div className="tab-details-container">
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
            <p className="offer">
              Get your first 3 months for
              <span>
                <BiRupee className="rupee-1" />
              </span>
              20/mo
            </p>
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
          </div>
        </div>
        <div className="desktop-content-container">
          <ul className="desktop-options-container">
            {tabDetails.map(each => (
              <FeatureCard cardDetails={each} key={each.category} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Shopify
