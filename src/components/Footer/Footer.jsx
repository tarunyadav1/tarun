import React from "react"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import Link from "components/_ui/Link/Link"
import SpinningPets from "components/SpinningPets/SpinningPets"
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="Footer__container">
      <MaxWidth size="l" className="Footer">
        <div className="Footer__pets">
          <SpinningPets />
        </div>
        <div className="Footer__copyright__container">
          <span className="Footer__copyright">&copy; 2021 Tarun Yadav </span>
        </div>
      </MaxWidth>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
