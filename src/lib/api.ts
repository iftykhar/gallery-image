

export async function fetchImages(){
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
    if(!res.ok){
        throw new Error('failed to fetch images');

    }
    return res.json();
}