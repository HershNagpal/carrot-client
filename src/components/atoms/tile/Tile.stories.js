import {Tile} from './Tile';
import grassImage from '../assets/grass.png'

export default {
    tile: 'Atoms/Tile',
    component: Tile,
};

export const Grass = () => (
    <Tile backgroundImage={grassImage}/>
);