import React, { Component } from 'react';
import './main_tiket.css';
import {
	 Grid,
	 GridRow,
	 GridColumn,
	 Segment
} from 'semantic-ui-react';

class FromTiket extends Component {
    render(){
			return(
				<Grid>
				 <GridRow>
					<GridColumn>
					 <Segment className="CaraPesan">
						<h1>Cara Pemesanan</h1>
						<p>1.Pemesanan bisa langsung melalui </p>
					 </Segment>

					 <Segment className="CaraPesan">
					  <h1>Cara Pemayaran</h1>
					 </Segment>

					 <Segment className="CaraPesan">
					  <h1>Syarat & Ketentuan</h1>
					 </Segment>
					</GridColumn>
				 </GridRow>
				</Grid>
			)
		}
} 

export default FromTiket