import React, {Component} from 'react';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import './Tentang_tiket.css';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';


class TentangTiket extends Component{
	render(){
		return(
			<Grid className="Tikets">
			 <GridRow>
				<GridColumn>
				 <Segment className="Tikets1">
					<h1>Cari Tiket Termurah,Aman dan Terpercaya?</h1>
					<h3>Coba Aja Di BJ-Travel Dijamin Beda</h3>
				
				 </Segment>
				 <Segment className="Tikets2">
					<h1>Tarif Harga Tiket Travel</h1>
					
				 
				 </Segment>
				 <Segment className="Tikets3">
					<h1>Jadwal Keberangkatan</h1>
					
				 
				 </Segment>
				 <Segment className="Tikets3">
					<h1>Fasilitas Travel</h1>
					
				 
				 </Segment>

				 
			 
			 </GridColumn>
			</GridRow>
			 
			</Grid>
		)
	}
}

export default TentangTiket