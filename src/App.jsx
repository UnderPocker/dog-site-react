import React from 'react';
import Controls from './components/Controls';
import Gallery from './components/Gallery';
import Favorites from './components/Favorites';

const App = () => {
    return (
        <div>
            <h1>🐶 Dog Viewer Pro</h1>
            <Controls />
            <Gallery />
            <h2>Избранное</h2>
            <Favorites />
        </div>
    );
};

export default App;
