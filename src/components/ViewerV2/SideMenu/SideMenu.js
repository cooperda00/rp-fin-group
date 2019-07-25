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
  statePension,
  pensionTransfers,
}) => {
  console.log(currentCopy)
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
    if (e.target.innerText === "Education Planning") {
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
    if (e.target.innerText === "Property Investments") {
      setCurrentCopy({
        title: propertyInvestments.title,
        html: propertyInvestments.html,
      })
    }
    if (e.target.innerText === "UK State Pensions") {
      setCurrentCopy({
        title: statePension.title,
        html: statePension.html,
      })
    }
    if (e.target.innerText === "Pension Transfers") {
      setCurrentCopy({
        title: pensionTransfers.title,
        html: pensionTransfers.html,
      })
    }
  }

  return (
    <nav className={styles.SideMenu}>
      <div>
        {menu.map((item, index) => {
          // if (item.name === currentCopy.title) {
          //   console.log(item.name)
          // }
          let selected = ""

          // if (item.name === currentCopy.title) {
          //   if (item.name === currentCopy.title) {
          //     selected = styles.Selected
          //   }
          // }

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
