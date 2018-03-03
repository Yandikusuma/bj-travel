import React, { Component } from 'react';
import { Header} from 'semantic-ui-react';

import TiketDetail from './Detail_Head/Head_Detail';
import TentangTiket from './Detail_Tiket/Details_Tiket';
import TentangUs from './Detail_Main/Cara_pemesanan';

class DetailTiket extends Component {
	render(){
		return(
			<Header>
			 <TiketDetail />
			 <TentangTiket />
			 <TentangUs />
			</Header>
		)
	}
}

export default DetailTiket