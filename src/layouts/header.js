import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import Headroom from 'react-headroom';
import Link from 'gatsby-link';

import { srcToCDN } from '../lib/util';
import Hamburger from '../components/hamburger/hamburger';
import Button from '../components/button/button';

const Header = ({ menuOpen, dispatch }) => {
  const headerClasses = cn(
    'header',
    { 'menu-open': menuOpen },
  );

  const onUnpinCallback = () => {
    dispatch(toggleMenu(false));
  }

  return (
    <Headroom onUnpin={onUnpinCallback} pinStart={75}>
      <header className={headerClasses}>
        <nav className="nav">
          <div className="nav-inner">
            <ul>
              <li className="nav-item"><Link to="/how-it-works">How it works</Link></li>
              <li className="nav-item"><Link to="/why-candid">Why Candid</Link></li>
              <li className="nav-item"><Link to="/pricing">Pricing</Link></li>
            </ul>
            <div className="nav-secondary">
              <ul>
                <li className="nav-item"><Link to="/faqs">FAQs</Link></li>
                <li className="nav-item"><Link to="/careers">Careers</Link></li>
                <li className="nav-item"><Link to="/help">Help</Link></li>
              </ul>
              <div className="need-help">
                Need help? Call toll free
                <a href="tel:+1844-295-6915" className="phone">1.844.295.6915</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="logo">
          <Link to='/'>Candid Co</Link>
        </div>
        <div className="cta">
          <div className="phone">
            <Button link>
              <img className="phone-flag" src={srcToCDN('/static/img/usflag.jpg?w=26')} />
              1.844.295.6915
            </Button>
          </div>
          <Button black arrow>Get our kit</Button>
        </div>

        <div className="hamburger">
          <Hamburger />
        </div>
      </header>
    </Headroom>
  );
}

const mapStateToProps = ({ menuOpen })  => ({
  menuOpen,
});

export default connect(mapStateToProps)(Header);
