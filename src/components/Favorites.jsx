import React, { useContext } from 'react';
import { DogContext } from '../context/DogContext';
import DogImage from './DogImage';

const Favorites = () => {
    const { favorites } = useContext(DogContext);

    return (
        <div id="favorites" className="gallery">
            {favorites.map((url) => (
                <DogImage key={url} url={url} />
            ))}
        </div>
    );
};

export default Favorites;
