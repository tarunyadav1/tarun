import React from "react"
import Link from "components/_ui/Link/Link"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"

import "./Intro.scss"

const Intro = () => {
  return (
    <MaxWidth size="m" className="Intro">
      <h2 className="Intro__greeting">
        Hello!{" "}
        <span className="emoji" role="img" aria-label="Emoji Hand wave">
          👋
        </span>
      </h2>
      <h1 className="Intro__header">
        I’m Tarun Yadav.
        <br />I create things for the web.
      </h1>
      <h3 className="Intro__subheader">
        I am JavaScript Developer that focuses on Front-end frameworks such as
        React and NextJs. I have experience in working with Web technology such
        as JavaScript, HTML, CSS, and ReactJs.
        {/* <span className="emoji" role="img" aria-label="Emoji smile">😊</span> */}
      </h3>
      <Link
        doOpenInNewTab
        isButton
        className="Intro__button"
        buttonProps={{ size: "xl", color: "white-blue-stroke" }}
        to="mailto:tarunyadav9761@gmail.com"
      >
        Get in touch
      </Link>
    </MaxWidth>
  )
}

export default Intro
