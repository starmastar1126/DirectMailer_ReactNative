import { Platform } from 'react-native';
import Dimensions from 'Dimensions';

export default {
    BACKGROUND_COLOR: '#FFFFFF',
    SPLASH_COLOR: '#4EA0B2',
    HEADER_COLOR: '#4EA0B2',
    DIALOG_COLOR: '#7BBECB',
    DIALOG_TITLE_COLOR: '#000000',
    WHITE_COLOR: '#FFFFFF',
    BLACK_COLOR: '#000000',
    FONT_BOLD: 'bold',
    VW: Dimensions.get('window').width / 100,
    VH: Dimensions.get('window').height / 100,





    FORE_COLOR: '#FFFFFF',
    // SPLASH_COLOR: 'rgba(255, 255, 255, 0.8)',
    // SPLASH_COLOR: 'rgba(124, 194, 219, 0.8)',
    // SPLASH_TITLE_COLOR: 'rgba(30, 53, 158, 1)',
    // SPLASH_CONTENT_COLOR: 'rgba(0, 0, 0, 1)',
    SPLASH_TITLE_COLOR: '#2AA3E5',
    SPLASH_CONTENT_COLOR: '#2AA3E5',
    HEADER_FONT_COLOR: '#FFFFFF',
    BUTTON_COLOR: '#2AA3E5',
    BUTTON_FONT_COLOR: '#FFFFFF',
    DARK_GRAY_COLOR: '#788B91',
    // RIGHT_BLUE_COLOR: 'rgba(124, 194, 219, 1)',
    RIGHT_BLUE_COLOR: '#2AA3E5',
    DARK_BLUE_COLOR: 'rgba(124, 194, 255, 1)',

    
    DEVICE_WIDTH: Platform.isPad ? Dimensions.get('window').width/2 : Dimensions.get('window').width,
    DEVICE_HEIGHT: Dimensions.get('window').height,
}
export const hide = {
    display: 'none'
}
export const show = {
  display: 'flex'
}