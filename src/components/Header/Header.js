import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import './header.css';

class Header extends Component {
 render() {
   return (
    <header>
		<div className="logo">
			<a href="index.html"><img src={require("../../img/logo2.png")} title="Swicked Studio" alt="Swicked Studio"/></a>
		</div>

		<div id="menu_icon"></div>
		<nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/team">The Tea,</Link></li>
                <li><Link to="/journal">Journal</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
		</nav>

		<div className="footer clearfix">
			<ul className="social clearfix">
				<li><a href="#" class="fb" data-title="Facebook"></a></li>
				<li><a href="#" class="google" data-title="Google +"></a></li>
				<li><a href="#" class="behance" data-title="Behance"></a></li>
				<li><a href="#" class="twitter" data-title="Twitter"></a></li>
				<li><a href="#" class="dribble" data-title="Dribble"></a></li>
				<li><a href="#" class="rss" data-title="RSS"></a></li>
			</ul>

			<div className="rights">
				<p>Copyright © 2017 Swicked Studio.</p>
				<p>Big thanks <a href="">Pixelhint.com</a> for the awesome web template! </p>
			</div>
		</div>
	</header>
   );
 }
}
export default Header;