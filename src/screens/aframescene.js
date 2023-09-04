import 'aframe';
import { Entity, Scene, } from 'aframe-react';


function Aframescene (){
    return(
            <Scene>
                <Entity camera look-controls position="0 1.6 0"/>
                <Entity gltf-model="url(../models/sofa.glb)" position="-2 0.5 -3" scale="0.1 0.1 0.1"/>
                <Entity light="type: ambient"/>
                <Entity light="type: directional"/>
            </Scene>
    );
}

export default Aframescene;