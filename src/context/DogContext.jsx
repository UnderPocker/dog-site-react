import { createContext, useState, useEffect } from 'react';
import { fetchBreeds, fetchRandomImage, getFavorites } from '../hooks/useDogApi';

export const DogContext = createContext();

export const DogProvider = ({ children }) => {
    const [breeds, setBreeds] = useState({});
    const [selected, setSelected] = useState({ breed: '', subBreed: '' });
    const [images, setImages] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchBreeds().then(setBreeds);
        fetchRandomImage().then(img => setImages([img]));
        setFavorites(getFavorites());
    }, []);

    const value = {
        breeds,
        selected,
        setSelected,
        images,
        setImages,
        favorites,
        setFavorites,
        loading,
        setLoading,
    };

    return <DogContext.Provider value={value}>{children}</DogContext.Provider>;
};
