const colors = {

  errorText: '#FA3256',
  headerText: '#444444',
  buttonBackground: '#39BD98',
  buttonText: '#FFFFFF',
  inputBackground: '#FFFFFF',
  inputDivider: '#E4E2E5',

  bg_loading: '#F5F2F9',
  bg_gradient: ['#000000', '#3A89E5'],
  bg_popup_grad: ['rgba(0,0,0,1)', 'rgba(0,0,0,0.8)'],

  edit_bg_normal: '#F6F9FD',
  edit_border_active: '#4990E2',
  edit_border_inactive: '#EBF1FA',
  edit_border_fill: '#4990E2CC',
  edit_shadow_active: 'rgba(73, 143, 225, 0.81)',
  edit_placeholder_active: '#4A90E2',
  edit_placeholder_inactive: '#D0D6DC',
  get edit_border_empty() { return colors.edit_border_inactive; },
  get edit_text_normal() { return colors.edit_placeholder_active; },

  bg_scan_nav_blue: '#4282DA',


  background: '#FFFFFF',

  bottom: {
    barBackground: '#FF0000',
  },
};

export default colors;
