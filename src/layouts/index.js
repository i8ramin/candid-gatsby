import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

// import "../css/typography.css"
import "../css/global.css"
import styles from "../css/styles.module.css"

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Candid Co"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <Provider
          theme={{
            font: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSizes: [
              12, 16, 24, 36, 48, 72
            ],
            space: [ 0, 6, 12, 18, 24 ],
            breakpoints: [ 32, 48, 64, 80, 90 ]
          }}
        >
          {this.props.children()}
        <Provider>
      </div>
    )
  }
}
