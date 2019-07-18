//Modules
import React from "react"
//Sass
import styles from "./Viewer.module.scss"
//Components
import Container from "../Layout/Container/Container"
import Copy from "./Copy/Copy"
import SideMenu from "./SideMenu/SideMenu"

const Viewer = ({
  menu,
  html,
  title,
  dataCollection,
  disclaimer,
  setCurrentCopy,
  familyProtection,
  portfolioManagement,
  retirementPlanning,
  strategicInvestment,
  taxAdvisory,
}) => {
  return (
    <Container>
      <div className={styles.Viewer}>
        <SideMenu
          menu={menu}
          setCurrentCopy={setCurrentCopy}
          dataCollection={dataCollection}
          disclaimer={disclaimer}
          familyProtection={familyProtection}
          portfolioManagement={portfolioManagement}
          retirementPlanning={retirementPlanning}
          strategicInvestment={strategicInvestment}
          taxAdvisory={taxAdvisory}
        />
        <Copy title={title} html={html} />
      </div>
    </Container>
  )
}

export default Viewer
