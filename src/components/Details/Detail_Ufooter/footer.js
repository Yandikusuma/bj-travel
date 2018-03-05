import React, { Component } from 'react';
import './footer.css';

import { 
	Segment, 
	Container,  
	GridRow,
	Icon
} from 'semantic-ui-react';


class Footer extends Component {
	render() {
		return(
		 
			<Segment className="Footers">
			 <Container>
				 <GridRow className="Alamat">
					<h1>Alamat BJ-Travel</h1>
					 <h3>Kantor Kota Jambi</h3>
					  <p>
						 CV.BJ-Travel1.
						 Jl.Pertamina Kenali Asam Bawah, 
						 Kota baru,Kota Jambi,
						 Jambi 36129. 
					  </p>
					 <h3>Kantor Muaro Jambi</h3>
						<p>
						 CV.BJ-Travel2.
						 Mekar Sari Makmur,Sungai Bahar,Kabupaten Muaro
						 jambi,jambi 36365
					  </p>
				 </GridRow>
				 <GridRow className="Layanan">
					<h1>Layanan Konsumen</h1>
					<Icon name="time"/>
					<h3>Costumer Services</h3>
					 <h4>Telp/SMS</h4>
					 <p>085320245700</p>
					 <h4>WhatsApp</h4>
					 <p>085320245700</p>
				 </GridRow>
			 </Container>
			</Segment>

		)
	}
}
export default Footer