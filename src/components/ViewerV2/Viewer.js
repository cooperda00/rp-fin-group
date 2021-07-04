//Modules
import React from "react"
//Sass
import { ViewerContainer } from "./Viewer.module.scss"
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
  pensionTransfers,
  lifeInsurance,
  willsTrusts,
  managedPortfolios,
}) => {
  return (
    <Container>
      <div className={ViewerContainer}>
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
          pensionTransfers={pensionTransfers}
          lifeInsurance={lifeInsurance}
          willsTrusts={willsTrusts}
          managedPortfolios={managedPortfolios}
        />

        <Copy title={title} html={html} />
      </div>
    </Container>
  )
}

export default Viewer
