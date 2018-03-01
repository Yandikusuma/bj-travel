import React, { Component } from 'react';
import './Slider.css';
import {
    Grid,
    Segment,
    GridRow,
    Menu} from 'semantic-ui-react';
import GridColumn from 'semantic-ui-react/dist/commonjs/collections/Grid/GridColumn';

class Slider extends Component {
    render() {
        return (
         <Grid className="description">
          <GridRow>
           <GridColumn>
           <Segment className="colomDes">
             <h1>Booking Travel Online</h1>
              <h5>BJ-Travel solusi akan kebutuhan transportasi Online</h5>
               <p>
                BJ-Travel melayani jasa pemesanan transportasi Travel
                Online dengan rute jurusan antar-kota.Dilengkapi dengan
                armada terbaru ditambah sopir yang berpengalaman akan 
                membuat perjalanan anda terasa aman&nyaman.
               </p>
               <GridColumn>
                <Segment className="colomReq">

                <Menu className="contack">
                <Menu.Item>
                 <h1>
                  BOOKING<br/>
                  ONLINE
                 </h1>
                
                </Menu.Item>
                
                </Menu>
                <Menu className="NumberContact">
                 <Menu.Item>
                  <h1>085320245700</h1>
                 </Menu.Item>
                </Menu>
               
                </Segment>
               
               </GridColumn>
           
           
           </Segment>
           
           </GridColumn>
          
          </GridRow>
         
         
         </Grid>
        )
    }
}
export default Slider