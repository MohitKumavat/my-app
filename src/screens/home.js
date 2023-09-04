import React from 'react';
import { Container } from 'react-bootstrap';
import BrandProfile from '../components/brandprofile.js';
import './home.css'
import View from '../components/view.js';
import AddFrame from '../components/addframe.js';
function Home(){
   return(
    <><BrandProfile />
        <Container>
            <AddFrame />
            <View />
        </Container></>
   );
}

export default Home;