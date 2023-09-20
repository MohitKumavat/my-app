import 'aframe';
import { Entity, Scene, } from 'aframe-react';
import Sofa from '../models/OrangeCouch.glb';
import React from 'react'
import { Camera, Scene, Entity, Box } from 'react-aframe-ar/dist/primitives';


function ArScene (){
    return(
      <div>
        <button>
                Back
            </button>
                <Scene>
                    <Entity geometry={{ primitive: 'box' }} material={{ color: 'blue' }} position={{ x: 0, y: 0, z: -5 }} />
                    <Entity particle-system={{ preset: 'snow' }} />
                    <Entity light={{ type: 'point' }} />
                    <Entity gltf-model={Sofa} position={{ x: -2, y: 0, z: -10 }} />
                    <Entity text={{ value: 'Hello, WebVR!' }} />
                </Scene>
            </div>
       
            
    );
}
