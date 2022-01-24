import * as React from "react"
import MainLayout from "../components/mainLayout"
import { StaticImage } from "gatsby-plugin-image";
// styles


// markup
const IndexPage = () => {
  return (
    <div>
      <div>
        <MainLayout pageTitle="Index Page">
          <p>This is the index page</p>
          <div>

          <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="https://i.pinimg.com/originals/30/f6/aa/30f6aa9f7a24c7cee0ed62268e81c9fc.jpg"
          />
          </div>
        </MainLayout>
      </div>
    </div>
  );
}

export default IndexPage
