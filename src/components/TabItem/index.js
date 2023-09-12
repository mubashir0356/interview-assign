import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, changeTab} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isActive ? 'active-tab' : ''

  const onClickChangeTab = () => {
    changeTab(tabId)
  }

  return (
    <li className={`tab-item ${activeTabClassName}`}>
      <button type="button" onClick={onClickChangeTab} className="tab-btn">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
