//Modules
import React from "react"
//Sass
import styles from "./SideMenu.module.scss"
//Icons
import { FaCaretRight } from "react-icons/fa"

const SideMenu = ({
  menu,
  dataCollection,
  disclaimer,
  setCurrentCopy,
  familyProtection,
  portfolioManagement,
  retirementPlanning,
  strategicInvestment,
  taxAdvisory,
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
    if (e.target.innerText === "Family Protection & Insurance") {
      setCurrentCopy({
        title: familyProtection.title,
        html: familyProtection.html,
      })
    }
    if (e.target.innerText === "Portfolio Management") {
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
    if (e.target.innerText === "Strategic Investment") {
      setCurrentCopy({
        title: strategicInvestment.title,
        html: strategicInvestment.html,
      })
    }
    if (e.target.innerText === "Tax Advisory & Estate Planning") {
      setCurrentCopy({
        title: taxAdvisory.title,
        html: taxAdvisory.html,
      })
    }
  }

  return (
    <nav className={styles.SideMenu}>
      <div>
        {menu.map((item, index) => {
          return (
            <button key={index} onClick={handleClick}>
              <FaCaretRight />
              {item.name}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default SideMenu
