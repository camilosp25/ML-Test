/**
 * Metodo para evaluar el texto del parametro condition y retornar el estado del producto
 * @param condition
 * @returns {string}
 */
export const conditionText = (condition) => {
    let text = '';
    if (condition === 'new') {
        text = 'Nuevo';
    }
    if (condition === 'used') {
        text = 'Usado';
    }
    return text;
};
