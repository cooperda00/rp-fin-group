//Modules
import React from "react"
//Sass
import styles from "./SideMenu.module.scss"
//Icons
import { FaCaretRight } from "react-icons/fa"

const SideMenu = ({
  currentCopy,
  menu,
  dataCollection,
  disclaimer,
  setCurrentCopy,
  educationPlanning,
  portfolioManagement,
  retirementPlanning,
  propertyInvestments,
  pensionTransfers,
  lifeInsurance,
  willsTrusts,
  managedPortfolios,
}) => {
  const handleClick = e => {
    e.preventDefault()
    if (e.target.innerText === "Data Collection") {
      setCurrentCopy({
        title: dataCollection.title,
        html: dataCollection.html,
      })
    }
    if (e.target.innerText === "Disclaimer") {
      setCurrentCopy({
        title: disclaimer.title,
        html: disclaimer.html,
      })
    }
    if (e.target.innerText === "Education Fee Planning") {
      setCurrentCopy({
        title: educationPlanning.title,
        html: educationPlanning.html,
      })
    }
    if (e.target.innerText === "Asset & Portfolio Management") {
      setCurrentCopy({
        title: portfolioManagement.title,
        html: portfolioManagement.html,
      })
    }
    if (e.target.innerText === "Retirement Planning") {
      setCurrentCopy({
        title: retirementPlanning.title,
        html: retirementPlanning.html,
      })
    }
    if (e.target.innerText === "Property Investment") {
      setCurrentCopy({
        title: propertyInvestments.title,
        html: propertyInvestments.html,
      })
    }
    if (e.target.innerText === "Pension Transfers (QROPS & SIPPs)") {
      setCurrentCopy({
        title: pensionTransfers.title,
        html: pensionTransfers.html,
      })
    }
    if (e.target.innerText === "Life / Critical Illness Insurance") {
      setCurrentCopy({
        title: lifeInsurance.title,
        html: lifeInsurance.html,
      })
    }
    if (e.target.innerText === "Wills / Trusts") {
      setCurrentCopy({
        title: willsTrusts.title,
        html: willsTrusts.html,
      })
    }
    if (e.target.innerText === "Discretionary Managed Portfolios") {
      setCurrentCopy({
        title: managedPortfolios.title,
        html: managedPortfolios.html,
      })
    }
  }

  return (
    <nav className={styles.SideMenu}>
      <div>
        {menu.map((item, index) => {
          return (
            <button
              key={index}
              onClick={handleClick}
              className={
                currentCopy && currentCopy.title === item.name
                  ? styles.Selected
                  : undefined
              }
            >
              {item.name}
              <FaCaretRight />
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default SideMenu
