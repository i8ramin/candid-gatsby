import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import Link from 'gatsby-link';
import { Provider } from 'rebass';

import Header from './header';

import '../css/global.scss';
import styles from '../css/styles.module.scss';

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
          <Header />
          { this.props.children() }

        </Provider>
      </div>
    )
  }
}
