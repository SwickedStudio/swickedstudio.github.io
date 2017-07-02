import React, { Component } from 'react';

class NotFound extends Component {
 render() {
	var banner = {
		'background': 'url('+require('../img/hero_image.jpg') + ') no-repeat',
		'background-position': '50% 50%'
	}
   return (
     <div>
		<section className="top" style={banner}>
			<div className="wrapper content_header clearfix">
				<h1 className="title">Not Found : 404</h1>
			</div>		
		</section>
    </div>
   );
 }
}
export default NotFound;