import React, { Component } from 'react';
import { Header} from 'semantic-ui-react';

import TiketDetail from './Detail_Head/Head_Detail';
import TentangTiket from './Detail_Tiket/Details_Tiket';
import FromTiket from './Detail_Main/Main_tiket';
import Footer from './Detail_Ufooter/footer';

class DetailTiket extends Component {
	render(){
		return(
			<Header>
			 <TiketDetail />
			 <TentangTiket />
			 <FromTiket />
			 <Footer />
			</Header>
		)
	}
}

export default DetailTiket