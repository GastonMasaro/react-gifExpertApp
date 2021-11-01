export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=8MyvkT6XWfSW2eph61q1zAn9lfeBn2Br`
    const resp = await fetch( url ); 
    const {data} = await resp.json( url );
    const gifs = data.map( img =>  {
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url,
        }
    } );
    return gifs;
}