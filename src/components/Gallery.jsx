import React, { useContext } from 'react';
import { DogContext } from '../context/DogContext';
import { saveFavorite, getFavorites } from '../hooks/useDogApi';
import DogImage from './DogImage';

const Gallery = () => {
    const { images, setFavorites, loading } = useContext(DogContext);

    const handleClick = (url) => {
        saveFavorite(url);
        setFavorites(getFavorites());
    };

    if (loading) return <div className="loader">Загрузка...</div>;

    return (
        <div id="gallery" className="gallery">
            {images.map((url) => (
                <DogImage key={url} url={url} onClick={() => handleClick(url)} />
            ))}
        </div>
    );
};

export default Gallery;
