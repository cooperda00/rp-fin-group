//Modules
import React from "react"
//Sass
import styles from "./Viewer.module.scss"
//Components
import Container from "../Layout/Container/Container"
import Copy from "./Copy/Copy"
import SideMenu from "./SideMenu/SideMenu"

const Viewer = ({
  currentCopy,
  menu,
  html,
  title,
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
  return (
    <Container>
      <div className={styles.Viewer}>
        <SideMenu
          currentCopy={currentCopy}
          menu={menu}
          setCurrentCopy={setCurrentCopy}
          dataCollection={dataCollection}
          disclaimer={disclaimer}
          educationPlanning={educationPlanning}
          portfolioManagement={portfolioManagement}
          retirementPlanning={retirementPlanning}
          propertyInvestments={propertyInvestments}
          statePension={statePension}
          pensionTransfers={pensionTransfers}
        />

        <Copy title={title} html={html} />
      </div>
    </Container>
  )
}

export default Viewer
