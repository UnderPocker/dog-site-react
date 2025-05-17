import React, { useContext, useEffect, useState } from 'react';
import { DogContext } from '../context/DogContext';
import { fetchImages, fetchSubBreeds, fetchRandomImage } from '../hooks/useDogApi';

const Controls = () => {
    const {
        breeds,
        selected,
        setSelected,
        setImages,
        setLoading,
    } = useContext(DogContext);

    const [subBreeds, setSubBreeds] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        if (selected.breed) {
            fetchSubBreeds(selected.breed).then(setSubBreeds);
        }
    }, [selected.breed]);

    const handleBreedChange = async (e) => {
        const breed = e.target.value;
        setSelected({ breed, subBreed: '' });
        setLoading(true);
        const images = await fetchImages(breed);
        setImages(images);
        setLoading(false);
    };

    const handleSubBreedChange = async (e) => {
        const subBreed = e.target.value;
        setSelected(prev => ({ ...prev, subBreed }));
        setLoading(true);
        const images = await fetchImages(selected.breed, subBreed);
        setImages(images);
        setLoading(false);
    };

    const handleSearch = (e) => {
        setFilter(e.target.value.toLowerCase());
    };

    const handleRandom = async () => {
        setLoading(true);
        const image = await fetchRandomImage();
        setImages([image]);
        setLoading(false);
    };

    return (
        <div className="controls">
            <input type="text" placeholder="Поиск породы..." onChange={handleSearch} />
            <select onChange={handleBreedChange}>
                <option value="">Выбери породу</option>
                {Object.keys(breeds)
                    .filter((b) => b.includes(filter))
                    .map((b) => (
                        <option key={b} value={b}>{b}</option>
                    ))}
            </select>

            {Array.isArray(subBreeds) && subBreeds.length > 0 && (
                <select onChange={handleSubBreedChange}>
                    <option value="">Все подпороды</option>
                    {subBreeds.map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            )}

            <button onClick={handleRandom}>🎲 Случайная собака</button>
        </div>
    );
};

export default Controls;
