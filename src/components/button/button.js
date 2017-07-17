import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

const Button = ({
    arrow,
    black,
    children,
    className,
    cta,
    expanded,
    fullWidth,
    link,
    outline,
    size,
  }) => {
  const buttonClasses = cn(
    'button',
    { [className]: className },
    { outline },
    { link },
    { black },
    { arrow },
    { 'expanded-desktop': expanded && expanded === 'desktop' },
    { 'expanded-mobile': expanded && expanded === 'mobile' },
    { 'fullwidth-desktop': fullWidth && fullWidth === 'desktop' },
    { 'fullwidth-mobile': fullWidth && fullWidth === 'mobile' },
    cta ? `cta-${cta}` : null,
    size ? `btn-${size}` : null,
  );

  return (
    <button className={buttonClasses}>
      { children }
    </button>
  );
};

const StyledButton = styled(Button)`
  height: 45px;
  padding: 0 32px;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: .8rem;
  letter-spacing: 1px;
  font-weight: bold;
  border: 1px solid transparent;
  color: #000;
  transition: all 250ms ease;

  &.outline {
    background-color: ${props => props.outline ? 'transparent' : 'inherit'};
    border-color: ${props => props.outline ? 'currentColor' : 'inherit'};

    &:hover {
      background-color: ${props => props.outline ? '#000' : 'inherit'};
      border-color: ${props => props.outline ? '#000' : 'inherit'};
      color: ${props => props.outline ? '#fff' : 'inherit'};
    }
  }

  &.black {
    background-color: ${props => props.black ? '#191919' : 'inherit'};
    color: ${props => props.black ? 'white' : 'inherit'};
  }

  &.arrow {
    position: relative;
    transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  &.arrow::after,
  &.arrow::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    opacity: 0;
    transform: translateY(-50%);
    transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  &.arrow::after {
    width: 20px;
    height: 1px;
    margin-top: 0px;
    background: white;
    transform: translateX(-3px);
  }
  &.arrow::before {
    content: "";
    width: 10px;
    height: 10px;
    margin-top: -1px;
    background: transparent;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    transform: rotate(-135deg) translateX(50%);
  }
  &.arrow:hover {
    padding-left: 18px;
    padding-right: 46px;
  }
  &.arrow:hover::after,
  &.arrow:hover::before {
    opacity: 1;
    right: 15px;
  }

  &.cta-primary {
    background-color: #f1737d;
    border-color: #f1737d;
    color: white;
  }

  @media screen and (min-width: 768px) {
    &.expanded-desktop {
      min-width: 250px;
    }
  }

  @media screen and (max-width: 768px) {
    &.btn-lg-mobile {
      height: 55px;
      padding: 0 50px;
      border-width: 2px;
      font-size: 1rem;
    }

    &.expanded-mobile {
      min-width: 250px;
    }
  }

  @media screen and (max-width: 768px) {
    &.fullwidth-mobile {
      width: 100%;
    }
  }
`;

export default StyledButton;
