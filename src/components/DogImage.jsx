import React from 'react';

const DogImage = ({ url, onClick }) => {
    return (
        <img
            src={url}
            alt="dog"
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        />
    );
};

export default DogImage;
