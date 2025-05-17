export async function fetchBreeds() {
    const res = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await res.json();
    return data.message;
}

export async function fetchSubBreeds(breed) {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/list`);
    const data = await res.json();
    return data.message || [];
}

export async function fetchImages(breed, subBreed = '') {
    let url = subBreed
        ? `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/5`
        : `https://dog.ceo/api/breed/${breed}/images/random/5`;
    const res = await fetch(url);
    const data = await res.json();
    return data.message;
}

export async function fetchRandomImage() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    return data.message;
}

export function saveFavorite(url) {
    let favs = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favs.includes(url)) {
        favs.push(url);
        localStorage.setItem('favorites', JSON.stringify(favs));
    }
}

export function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}
