import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import "font-awesome/css/font-awesome.css";

import About  from './Main/Main-description/about_travel';
import Menu from './Menu/Menu';
import Slider from './Slider/Slider';
import Tiket from './Main/Main-search/search_tiket';
import Footer from './footer/footer';

class Home extends Component {
    render() {
        return (
            <Header>
               <Menu />
                <Slider />
                <Tiket />
                <About />
                <Footer />
            </Header>
        )
    }
}

export default Home