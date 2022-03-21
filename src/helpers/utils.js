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
