export const getData = async() => {
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
    const results = data.results;
    return results;
}


