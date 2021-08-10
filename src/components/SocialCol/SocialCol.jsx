import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faCodepen,
  faLinkedinIn,
  faInstagram,
  faTwitter,
  faDribbble,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons"
import Link from "components/_ui/Link/Link"

import "./SocialCol.scss"

const SocialCol = () => {
  return (
    <div className="SocialCol">
      <div className="SocialCol__icons">
        <Link
          className="SocialCol__icon"
          doOpenInNewTab
          to="https://github.com/tarunyadav1"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        {/* <Link
          className="SocialCol__icon"
          doOpenInNewTab
          to="https://dribbble.com/marrrguerite"
        >
          <FontAwesomeIcon icon={faDribbble} />
        </Link> */}
        <Link
          className="SocialCol__icon"
          doOpenInNewTab
          to="https://www.linkedin.com/in/tarunyadav9761"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
        {/* <Link
          className="SocialCol__icon"
          doOpenInNewTab
          to="https://codepen.io/marguerite/"
        >
          <FontAwesomeIcon icon={faCodepen} />
        </Link> */}
        {/* <Link
          className="SocialCol__icon"
          doOpenInNewTab
          to="https://instagram.com/marguer.ite/"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link> */}
        <Link
          className="SocialCol__icon"
          doOpenInNewTab
          to="https://twitter.com/tarunyadav9761"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link
          className="SocialCol__icon"
          doOpenInNewTab
          to="https://stackoverflow.com/users/13210235/tarun-yadav"
        >
          <FontAwesomeIcon icon={faStackOverflow} />
        </Link>
      </div>
    </div>
  )
}

export default SocialCol
