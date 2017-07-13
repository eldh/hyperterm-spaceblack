const foregroundColor = '#eff0eb';
const backgroundColor = 'rgba(0, 0, 0, 0.95)';
const darkBlack = '#0f1114';
const yellow = '#f5f9c1';
const magenta = '#ff6ac1';
const lightblack = '#2d3646';
const darkGray = '#1d1f21';
const cyan = '#8abeb7';
const blue = '#81a2be';
const green = '#acc697';
const red = '#cc6666';

const black = backgroundColor;
const white = foregroundColor;
const lightWhite = foregroundColor;
const borderColor = backgroundColor;
const cursorColor = foregroundColor;

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  lightblack,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
  lightWhite,
};
const css = (config = {}) => `
  ${config.css || ''}
  .tabs_list,
  .tab_tab {
    background-color: ${darkBlack};
  }
  .tab_active {
    background-color: ${black};
  }
  .tab_textActive {
    box-shadow: inset 0 1px 0 0px ${darkGray};
  }
  .tab_textActive:after,
  .tab_textActive:before {
    content: '';
    height: 100%;
    width: 1px;
    top: 0;
    left: 0;
    position: absolute;
    background-color: ${darkGray};
  }
  .tab_textActive:after {
    left: calc(100% - 1px);
  }
  .tabs_list {
    border-color: ${darkGray} !important;
  }
  .tab_active:before {
    border-color: ${black};
  }
  .splitpane_divider {
    background-color: ${lightblack} !important;
  }
`;

const termCSS = `
span {
  background-color: transparent !important;
  color: ${foregroundColor} !important;
}
`;
exports.onWindow = (browserWindow) => browserWindow.setVibrancy('dark');
exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor: yellow,
    borderColor,
    cursorColor,
    colors,
    css: css(config),
    termCSS,
  });
};

// Development middleware for HMR
exports.middleware = () => (next) => (action) => {
  /* eslint-disable no-param-reassign, default-case */
  switch (action.type) {
  case 'CONFIG_LOAD':
  case 'CONFIG_RELOAD':
    action.config.foregroundColor = yellow;
    action.config.backgroundColor = backgroundColor;
    action.config.borderColor = borderColor;
    action.config.cursorColor = cursorColor;
    action.config.colors = colors;
    action.config.css = css();
    action.config.termCSS = termCSS;
  }
  next(action);
};
