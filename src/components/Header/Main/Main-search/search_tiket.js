import React,{ Component } from 'react';
import "font-awesome/css/font-awesome.css";
import { 
	Segment,
	Dropdown,
  } from 'semantic-ui-react';
import './search_tiket.css'


const Berangkat=[
	{ key: 'Jambi', text: 'Jambi', value: 'Jambi' },
	{ key: 'Muaro Jambi', text: 'Muaro Jambi', value: 'Muaro Jambi' },
	{ key: 'Batanghari', text: 'Batanghari', value: 'Batanghari' },
	{ key: 'Jambi', text: 'Jambi', value: 'Jambi' },
]
const Tujuan=[
	{ key: 'Kerinci', text: 'Kerinci', value: 'Kerinci' },
]

class Tiket extends Component {
	render(){
		return(
			<div id="Mains">
			<Segment className="mainTiket">
			 <Dropdown
				placeholder='Pilih lokasi  keberangkatan' fluid multiple selection options={Berangkat} className="search"
				/>
			 <Dropdown 
			  placeholder='Pilih lokasi  tujuan' fluid multiple selection options={Tujuan} className="searchto"
			 />
			 <Dropdown 
			  placeholder='Tanggal' fluid multiple selection options={Tujuan} className="searchto"
			 />
			 <h1>
			  <a href="../Home_Tiket/Input_Tiket.js" className="Search">Cari Armada</a>
			 </h1>
			 
			
			</Segment>

			<Segment className="Promotion">
			 <h1>Cari Travel Terbaik & Terpercaya?</h1>
			  <h3>BJ-Travel Aja</h3>
				<h2>Kenapa Harus BJ-Travel?</h2>
				<p>
					BJ-Travel menyediakan layanan travel terbaik dengan mengutamakan
					Kenyaman & Keamanan,dilengkapi dengan mobil yang bersih,baru dan nyaman
					akan membuat perjalanan anda begitu menyenangkan.Dengan BJ-Travel 
					anda tidak tidak akan merasakan yang nama nya berdesak"an karena kami
					menyediakan mobil yang berkapasitas lebih dari 6orang dengan membawa 
					kapasitas penumpang max 5*-6* yang pasti akan membuat perjalanan anda
					semakin nyaman. 
				
				</p>

				<h2>Keuntungan dengan  BJ-Travel</h2>
				<h3>Lebih Hemat kantong</h3>
				<p>
				 Jika anda pernah 
				 naik travel dimintai uang tol,di BJ-Travel anda akan terbebas dari 
				 semua itu yang pasti akan menghemat kantong anda
				</p>
				<h3>Tepat Waktu</h3>
				 <p>
					Jika anda pernah mengalami keterlabatan penjeputan,yang berakibat 
					keterlambatan jadwal acara atau yang lain nya?di BJ-Travel tersedia
					banyak jadwal keberangkatan sehingga bisa disesuaikan dengan
					jadwal acara anda. 
				 </p>
				 <h3>Lebih Cepat & Mudah</h3>
				 <p>
					Kami selalu berusaha memberikan pelayanan mudah dan cepat kepada
					costumer setiap hari!Pemesanan lebih mudah via WhatsApp dengan layanan
					nonstop 24/7.
				 </p>
			</Segment>
			</div>


			
		)

	}
	
}
	 


export default Tiket