import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Menu from './Menu/Menu';
import Slider from './Slider/Slider';

class Header extends Component {
    render() {
        return (
            <Container>
                <Menu />
                <Slider />
            </Container>
        )
    }
}

export default Header