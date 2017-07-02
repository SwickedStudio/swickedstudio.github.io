import React, { Component } from 'react';
import {Link} from 'react-router-dom';

var workRoot = './Work/';
var thumbnail = '/thumbnail.jpg';

var works = [
  {order:1, folder: 'BitterGods', title: 'Bitter Gods', subTitle:'Escape the Wrath!', categories: 'VR, Desktop, Mobile, Multiplayer'},
  {order:2, folder: 'Test', title: 'Another Game', subTitle:'Coming Soon...', categories: 'VR, Adventure'},
  {order:3, folder: 'Test', title: 'Another Game', subTitle:'Coming Soon...', categories: 'VR, Adventure'}
];

class Portfolio extends Component {
	constructor(props){
        super(props);
        // this.state = {title: props.match.params.name};

		works = works.sort((a,b) => a.order > b.order);

    }

 	render() {
   	return (
	   <div>
		   {works.map(work => (
			<div className="work" key={work.order}>
				<Link to={'work/'+work.folder}>
					<img src={require(workRoot + work.folder +'/thumbnail.jpg')} className="media" alt=""/>
					<div className="caption">
						<div className="work_title">
							<h2>{work.title}</h2>
							<h3>{work.subTitle}</h3>
							<h1>{work.categories}</h1>
						</div>
					</div>
				</Link>
			</div>
    		))}
	   </div>
   );
 }
}
export default Portfolio;