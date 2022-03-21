export const search = async (keyWord, limit = 4) => {

    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURI(keyWord)}&limit=${limit}`;
    const resp = await fetch(url);
    return resp.json();

}

export const getDetail = async (id) => {

    let url = `https://api.mercadolibre.com/items/${id}`;
    let resp = await fetch(url);
    const detailData = await resp.json();

    url = `https://api.mercadolibre.com/items/${id}/description`;
    resp = await fetch(url);
    const descriptionData = await resp.json();

    return {detailData, descriptionData};

}

