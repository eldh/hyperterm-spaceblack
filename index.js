const foregroundColor = '#eff0eb';
const backgroundColor = '#16181c';
const black = backgroundColor;
const white = foregroundColor;
const darkBlack = '#0f1114';
const yellow = '#f5f9c1';
const magenta = '#ff6ac1';
const lightblack = '#2d3646';
const lightWhite = foregroundColor;
const darkGray = '#1d1f21';

const cyan = '#8abeb7';
const blue = '#81a2be';
const green = '#acc697';
const red = '#cc6666';

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
const css = (config) => `
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
`;

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: darkBlack,
    cursorColor: lightWhite,
    colors,
    css: css(config),
  });
};

// Development middleware for HMR
exports.middleware = () => (next) => (action) => {
  /* eslint-disable no-param-reassign, default-case */
  switch (action.type) {
  case 'CONFIG_LOAD':
  case 'CONFIG_RELOAD':
    action.config.foregroundColor = foregroundColor;
    action.config.backgroundColor = backgroundColor;
    action.config.cursorColor = foregroundColor;
    action.config.colors = colors;
  }
  next(action);
};
