export const darkModeStyles = {
    baseColor: '#121212',
    primaryFontColor: 'rgba(255,255,255,0.87)'
};

export const lightModeStyles = {
    baseColor: '#ffffff',
    primaryFontColor: '#121212'
};

export const changeToDarkMode = () => {
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = 'rgba(255,255,255,0.87)';
};

export const changeToLightMode = () => {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#121212';
};