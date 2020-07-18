import { Platform } from 'react-native';
import Dimensions from 'Dimensions';

export default {
    BACKGROUDD_COLOR: '#FFFFFF',
    FORE_COLOR: '#FFFFFF',
    SPLASH_COLOR: 'rgba(255, 255, 255, 0.8)',
    // SPLASH_COLOR: 'rgba(124, 194, 219, 0.8)',
    // SPLASH_TITLE_COLOR: 'rgba(30, 53, 158, 1)',
    // SPLASH_CONTENT_COLOR: 'rgba(0, 0, 0, 1)',
    SPLASH_TITLE_COLOR: '#2AA3E5',
    SPLASH_CONTENT_COLOR: '#2AA3E5',
    // HEADER_COLOR: '#7CC2DB',
    HEADER_COLOR: '#2AA3E5',
    HEADER_FONT_COLOR: '#FFFFFF',
    BUTTON_COLOR: '#2AA3E5',
    BUTTON_FONT_COLOR: '#FFFFFF',
    WHITE_COLOR: '#FFFFFF',
    BLACK_COLOR: '#000000',
    DARK_GRAY_COLOR: '#788B91',
    // RIGHT_BLUE_COLOR: 'rgba(124, 194, 219, 1)',
    RIGHT_BLUE_COLOR: '#2AA3E5',
    DARK_BLUE_COLOR: 'rgba(124, 194, 255, 1)',

    FONT_BOLD: 'bold',
    
    DEVICE_WIDTH: Platform.isPad ? Dimensions.get('window').width/2 : Dimensions.get('window').width,
    DEVICE_HEIGHT: Dimensions.get('window').height,
}