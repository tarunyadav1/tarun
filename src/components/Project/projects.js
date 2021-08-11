import React from "react"

const projects = {
  slack: {
    title: "Slack Clone",
    projectType: "dashboard",
    description: (
      <div>
        This is Slack like chat app for Developers with Auth. User can chat in
        Real time and share images. Users can see other's user online and
        offline status.
      </div>
    ),
    github:
      "https://github.com/tarunyadav1/Slack-clone-with-React-Firebase-Redux",
    demo: "https://devconnects.netlify.app/",
    tech: ["react", "redux", "semantic ui", "firebase"],
    hasImageBorder: true,
    img_src: ["project-01"],
  },
  ecommerce: {
    title: "E-commerce Store",
    projectType: "web",
    description: (
      <div>
        E-commerce app build using React and Firebase with stripe as payment
        gateway.
      </div>
    ),
    demo: "https://meshstore.netlify.app/",
    github:
      "https://github.com/tarunyadav1/Ecommerce-store-React-Redux-Firebase-StripePayment",
    tech: ["React", "Redux", "Stripe", "Firebase", "netlify"],
    hasImageBorder: true,
    img_src: ["project-02"],
  },
  doist: {
    title: "DOIST",
    projectType: "web",
    description: (
      <div>
        This is a task manager app that is built using React and firebase. In
        this app, you can create a project and assign the task to the projects.
        This app also has dark Mode.
      </div>
    ),
    demo: "https://doistnow.netlify.app/",
    github: "https://github.com/tarunyadav1/Doist-React-App-Using-firebase",
    tech: ["react", "firebase", "sass", "Moment"],
    img_src: ["project-03"],
  },
  mediastream: {
    title: "Media Stream",
    projectType: "web",
    description: (
      <div>
        Media Stream is an web application for streaming videos. User's can
        upload and stream video. MongoDb GridFs is used to store the video.
      </div>
    ),
    tech: [
      "react",
      "MongoDB GridFS",
      "Material-UI",
      "netlify",
      "heroku",
      "react-router",
    ],
    hasImageBorder: true,
    img_src: ["project-04"],
    github: "https://github.com/tarunyadav1/mediastream-frontend",
    demo: "https://streammedia.netlify.app/",
  },
  mern: {
    title: "MERN Boilerplate using webpack and Babel",
    projectType: "web",
    description:
      "Boilerplate for making MERN stack web application. It has a script for both development and production. It uses Webpack, Babel, and other libraries.",
    github:
      "https://github.com/tarunyadav1/mern-boilerplate-using-webpack-babel",
    tech: ["react", "express", "mongodb", "babel", "webpack"],
    img_src: ["project-05"],
    readMore:
      "https://github.com/tarunyadav1/mern-boilerplate-using-webpack-babel",
  },
}

export default projects
