import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import styled from 'styled-components';

/*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */

const HamburgerBox = styled.span`
  width: 16px;
  height: 12px;
  display: inline-block;
  position: relative;
`;

const HamburgerInner = styled.span`
  display: block;
  top: 50%;
  margin-top: -2px;

  &,
  &::before,
  &::after {
    width: 16px;
    height: 2px;
    background-color: #000;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  & { background-color: transparent; }
  &::before,
  &::after {
    content: "";
    display: block;
  }
  &::before {
    top: -5px;
  }
  &::after {
    bottom: -5px;
  }
`;

const HamburgerButton = styled.button`
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  outline: none;
  margin: 0;
  overflow: visible;

  &:hover {
    opacity: 0.7;
  }

  /*
   * Squeeze
   */
  .hamburger--squeeze ${HamburgerInner} {
    transition-duration: 0.075s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
    .hamburger--squeeze ${HamburgerInner}::before {
      transition: top 0.075s 0.12s ease, opacity 0.075s ease;
    }
    .hamburger--squeeze ${HamburgerInner}::after {
      transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

  .hamburger--squeeze.is-active ${HamburgerInner} {
    transform: rotate(45deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .hamburger--squeeze.is-active ${HamburgerInner}::before {
    top: 0;
    transition: top 0.075s ease, opacity 0.075s 0.12s ease;
  }
  .hamburger--squeeze.is-active ${HamburgerInner}::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

class Hamburger extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: props.active,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
    event.preventDefault();
    const active = !this.props.active;

    this.setState({ active });
    this.props.dispatch(toggleMenu(active));
  }

  render() {
    const { className, active } = this.props;

    const classes = cn(
      'hamburger',
      'hamburger--squeeze',
      { [className]: className },
      { 'is-active': active },
    );

    return (
      <HamburgerButton className={classes} type="button" onClick={this.toggle}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </HamburgerButton>
    );
  }
}

export default connect(state => ({ active: state.menuOpen }))(Hamburger);
