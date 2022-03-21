export const search = async (keyWord, limit = 4) => {

    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURI(keyWord)}&limit=${limit}`;
    const resp = await fetch(url);
    const {results, filters} = await resp.json();

    return {results, filters};


}
