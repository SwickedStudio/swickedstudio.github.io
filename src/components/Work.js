import React, { Component } from 'react';

class Home extends Component {
 render() {
   return (
		<div className="work">
			<a href="inner.html">
				<img src={require("../img/bitter_gods_thumbnail.jpg")} className="media" alt=""/>
				<div className="caption">
					<div className="work_title">
						<h2>Bitter Gods</h2>
						<h3>Escape the Wrath!</h3>
						<h1>VR, Desktop, Mobile, Multiplayer </h1>
					</div>
				</div>
			</a>
		</div>
   );
 }
}
export default Home;