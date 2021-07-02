export enum COLORS {
  tintColorDark = '#2f95dc',
  tintColorLight = '#fff',
  
  // Colores de Figma.
  white = '#FFFFFF',
  orange = '#FFAF58',
  gray = '#DDDDDD',
  dark_gray = '#5F5F5F',
  light_gray = '#99A3A4',
  transparent_gray = 'rgba(0, 0, 0, 0.4)',
  green = '#97C7BB',
  light_blue = '#D6EAF8',
  light_red = '#E74C3C',
  red = '#FA4344',
  purple = '#7D3C98',
  modal_white = '#FDFEFE'
}

export default {
  light: {
    text: '#000',
    background: '#FA4344',
    tint: COLORS.tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: COLORS.tintColorLight
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: COLORS.tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: COLORS.tintColorDark
  },
};
