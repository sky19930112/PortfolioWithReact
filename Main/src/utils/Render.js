
import React, { useState } from "react"

import About from '../components/About'
import Contact from '../components/Contact/Contact'
import Work from '../components/Work/Work'
import Resume from '../components/Resume/Resume.js'

const [Page, setPage] = useState("About");
const renderPage = () => {
      switch (renderPage) {
          case "About":
              return <About />;
          case "Work":
              return <Work />;
          case "Contact":
              return <Contact />;
          case "Resume":
              return <Resume />;
          default:
              return <About />;
      }
  };

  export default renderPage;