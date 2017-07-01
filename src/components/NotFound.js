import React, { Component } from 'react';

class NotFound extends Component {
 render() {
   return (
     <div>
		<section className="top">
			<img className="banner" src={require("../img/hero_image.jpg")} alt=""/>	
			<div className="wrapper content_header clearfix">
				<h1 className="title">Not Found : 404</h1>
			</div>		
		</section>
    </div>
   );
 }
}
export default NotFound;