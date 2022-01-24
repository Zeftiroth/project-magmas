import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./mainLayout.module.css";

const MainLayout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);
    return (
      <div className={container}>
        <div>
          <title>
            {pageTitle} | {data.site.siteMetadata.title}
          </title>
          <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        </div>
        <div>
          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link className={navLinkText} to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className={navLinkText} to={"/testPage"}>
                  Test Page
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <main>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
          </main>
        </div>
      </div>
    );
}

export default MainLayout