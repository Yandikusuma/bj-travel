import React, { Component } from 'react';
import './pesan.css';
import { 
	Grid,
	GridColumn, 
	GridRow,
	Segment } from 'semantic-ui-react';

class TentangUs extends Component {
   render() {
		 return (
			 <Grid>
				<GridRow>
				 <GridColumn>
					<Segment className="CaraPesan">
					 <h1>Cara Pemesanan</h1>
					 <p>1.Cek ketersediaan tiket melalui No 085320145700</p>
					</Segment>

					<Segment className="CaraPesan1">
					 <h1>Cara Pembayaran</h1>
					</Segment>

					<Segment className="CaraPesan2">
					 <h1>Syarat & Ketentuan</h1>
					</Segment>
				 </GridColumn>
				</GridRow>
			 </Grid>
			 
		 )
	 }
}

export default TentangUs