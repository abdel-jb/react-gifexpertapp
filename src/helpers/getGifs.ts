type TGiphy = {
    id: string, 
    title: string, 
    images: { 
        downsized_medium: { url: string } 
    }
}

export const getGifs = async ( category: string ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9TCRr4GQuLT9fYANVZVM80mWzJODHpVS&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( ( { id, title, images }: TGiphy ) => {
        return {
            id: id,
            title: title,
            url: images.downsized_medium.url
        }
    });

    return gifs;
}