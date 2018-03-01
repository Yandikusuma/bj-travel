import React, { Component } from 'react';
import './menu.css';
import { Menu } from 'semantic-ui-react';

class BarTitle extends Component {
    render() {
        return (
            <Menu fixed='top' className="menubar" inverted>
              <Menu.Item header>
                <h1>
                  <a href="../header/Home.js">BJ-Travel.Com</a>
                </h1>
              
              </Menu.Item>
             
            
            </Menu>




            
        )
    }
}


export default BarTitle