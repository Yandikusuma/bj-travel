import React, { Component } from 'react';
import { Header} from 'semantic-ui-react';

import TiketDetail from './Detail_Head/Head_Detail';
import TentangTiket from './Detail_Tiket/Details_Tiket';


class DetailTiket extends Component {
	render(){
		return(
			<Header>
			 <TiketDetail />
			 <TentangTiket />
			</Header>
			
		)
	}
}

export default DetailTiket