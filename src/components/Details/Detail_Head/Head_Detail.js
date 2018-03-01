import React, { Component } from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import './Head.css';

class TiketDetail extends Component {
	render(){
		return(
			<Grid>
			 <Menu  className="menubar" inverted>
			  <Menu.Item header>
			   <h1>
			    <a href="../header/Home.js">BJ-Travel.Com</a>
			   </h1>
			  </Menu.Item>
			 </Menu>
			
			</Grid>
			  
		 
		


		)
	}
}

export default TiketDetail