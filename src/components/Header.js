import React, { Component } from 'react';
import {
  NavLink,
	Link
} from 'react-router-dom';

class Header extends Component {
 render() {
   return (
    <header>
			<div className="logo">
				<Link to="/"><img src={require("../img/logo2.png")} title="Swicked Studio" alt="Swicked Studio"/></Link>
			</div>
		
			<div id="menu_icon"></div>
			<nav>
    	  <ul>
    	  	<li><NavLink to="/">Home</NavLink></li>
    	    <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
					<li><NavLink to="/portfolio" activeClassName="selected">Portfolio</NavLink></li>
    	    <li><NavLink to="/team" activeClassName="selected">The Team</NavLink></li>
    	    <li><NavLink to="/journal" activeClassName="selected">Journal</NavLink></li>
    	    <li><NavLink to="/contact" activeClassName="selected">Contact Us</NavLink></li>
    	  </ul>
			</nav>
		
			<div className="footer clearfix">
				<ul className="social clearfix">
					<li><a href="http://ww.facebook/tiago.somda"> <span  className="fb" /> </a></li>
					{/*<li><a href="#" className="google" data-title="Google +"></a></li>
					<li><a href="#" className="behance" data-title="Behance"></a></li>
					<li><a href="#" className="twitter" data-title="Twitter"></a></li>
					<li><a href="#" className="dribble" data-title="Dribble"></a></li>
					<li><a href="#" className="rss" data-title="RSS"></a></li>*/}
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