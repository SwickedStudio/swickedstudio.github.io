import React, { Component } from 'react';

class Journal extends Component {
 render() {
   return (
     <div>
		<section className="top">	
			<div className="wrapper content_header clearfix">
				{/*<div className="work_nav">
							
					<ul className="btn clearfix">
						<li><a href="#" className="previous" data-title="Previous"></a></li>
						<li><a href="index.html" className="grid" data-title="Portfolio"></a></li>
						<li><a href="#" className="next" data-title="Next"></a></li>
					</ul>							
					
				</div>*/}
				<h1 className="title">Journal</h1>
			</div>		
		</section>

		<section className="wrapper">
			<div className="content">
				<p>Nunc pellentesque mauris ut magna pulvinar, quis fermentum tellus pulvinar. Curabitur ut fermentum quam. Nam tincidunt sagittis neque in elementum. Fusce convallis cursus porta. Curabitur dapibus pretium leo, at laoreet magna ullamcorper ac. Integer quam nulla, fringilla ac imperdiet at, consequat vel leo. Quisque non semper justo, eu aliquam velit. Pellentesque rhoncus, quam ac fringilla euismod, ligula diam congue orci, id cursus dui velit quis ligula.</p>


				<h2>Nulla nec pellentesque tempus, ipsum arcu aliquam tortor.</h2>

				<p>vel tempus libero diam vel arcu. Etiam id tincidunt tortor. Nam auctor consequat quam, vel mattis dui laoreet a. Nunc condimentum iaculis tortor, id eleifend nulla mattis lobortis. Pellentesque semper blandit odio, id tempor lorem imperdiet eu. Ut sagittis sagittis consectetur ,Maecenas eget risus eros. Nunc venenatis ante a rutrum cursus.</p>

				<h2>Quisque non semper justo</h2>

				<p>Commodo at blandit vitae, placerat in sem. Morbi ornare nec felis in euismod. Suspendisse vulputate orci ultrices enim facilisis, vel lobortis magna rhoncus. Integer mattis at elit vitae adipiscing. Cras imperdiet cursus nunc quis ullamcorper.</p>

				<p>vel tempus libero diam vel arcu. Etiam id tincidunt tortor. Nam auctor consequat quam, vel mattis dui laoreet a. Nunc condimentum iaculis tortor, id eleifend nulla mattis lobortis. Pellentesque semper blandit odio, id tempor lorem imperdiet eu. Ut sagittis sagittis consectetur ,Maecenas eget risus eros. Nunc venenatis ante a rutrum cursus.</p>

				
				<p>Commodo at blandit vitae, placerat in sem. Morbi ornare nec felis in euismod. Suspendisse vulputate orci ultrices enim facilisis, vel lobortis magna rhoncus. Integer mattis at elit vitae adipiscing. Cras imperdiet cursus nunc quis ullamcorper.</p>


				<h1>H1 : Quisque non semper justo</h1>
				<h2>H2 : Quisque non semper justo</h2>
				<h3>H3 : Quisque non semper justo</h3>
				<h4>H4 : Quisque non semper justo</h4>
				<h5>H5 : Quisque non semper justo</h5>
				<h6>H6 : Quisque non semper justo</h6>
			</div>
		</section>
    </div>
   );
 }
}
export default Journal;