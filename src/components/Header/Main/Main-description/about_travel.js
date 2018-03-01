import React, {Component} from 'react';
import './about.css'
import { Segment,GridRow } from 'semantic-ui-react';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';


class About extends Component{
	render() {
		return(
			<Segment className="aboutTravel">
				<h1>Layanan Travel?</h1>
				<GridRow className="Abouts">
				 <h1>Travel Muaro Jambi</h1>
					<p><a href="#">Muaro Jambi - Kota Jambi</a></p>
					<p><a href="#">Muaro Jambi - Batanghari</a></p>
					<p><a href="#">Muaro Jambi - Bangko</a></p>
				 
				</GridRow>
				<GridRow className="Abouts">
				 <h1>Travel Kota Jambi</h1>
				  <p><a href="#">Kota Jambi - Kumpeh</a></p>
					<p><a href="#">Kota Jambi - Muaro Jambi</a></p>
					<p><a href="#">Kota Jambi - Kerinci</a></p>
		      <p><a href="#">Kota Jambi - Sarolangun</a></p>	
		  		<p><a href="#">Kota Jambi - Padang</a></p>
	 
				</GridRow>
				<GridRow className="Abouts">
				 <h1>Travel Kerinci</h1>
					<p><a href="#">Kerinci - Kota Jambi</a></p>
					<p><a href="#">Kerinci - Batanghari</a></p>
		      <p><a href="#">Kerinci - Bangko</a></p>	
					<p><a href="#">Kerinci - Palembang</a></p>
		  		<p><a href="#">Kerinci - Padang</a></p>
	 
				</GridRow>
			
			</Segment>
		)
	}
}
export default About