const colors = {
  // Black and white
  black: '#000000',
  white: '#ffffff',

  // Blue
  blue1: '#e6f7ff',
  blue2: '#9dd4f5',
  blue3: '#6fb8e8',
  blue4: '#469bdb',
  blue5: '#217ecf',
  blue6: '#0063c3',
  blue7: '#00499c',
  blue8: '#003375',
  blue9: '#00204f',
  blue10: '#000f29',

  // Red
  red1: '#ffe7e6',
  red2: '#ffb6b5',
  red3: '#ff8c8e',
  red4: '#fa6169',
  red5: '#ed3746',
  red6: '#e01029',
  red7: '#ba041f',
  red8: '#94001b',
  red9: '#6e0018',
  red10: '#470012',

  // Gold
  gold1: '#feffe6',
  gold2: '#ffffa3',
  gold3: '#fffb7a',
  gold4: '#fff352',
  gold5: '#ffea29',
  gold6: '#fedd00',
  gold7: '#d9b500',
  gold8: '#b38f00',
  gold9: '#8c6c00',
  gold10: '#664b00',

  // Green
  green1: '#f0fff0',
  green2: '#d7fada',
  green3: '#a6edae',
  green4: '#79e089',
  green5: '#50d468',
  green6: '#2cc84d',
  green7: '#1ba13d',
  green8: '#0f7a2d',
  green9: '#06541f',
  green10: '#032e12',

  // Text and icons
  textIcon1: 'rgba(0, 0, 0, 0.88)',
  textIcon2: 'rgba(0, 0, 0, 0.45)',
  textIcon3: 'rgba(0, 0, 0, 0.25)',

  // Backgrounds
  background1: 'rgba(0, 0, 0, 0.04)',
  background2: '#f5f5f5',

  // Borders and dividers
  borderDivider1: 'rgba(0, 0, 0, 0.15)',
  borderDivider2: 'rgba(0, 0, 0, 0.06)',

  // Accent - primary
  accentPrimary1: '#2fbcb6',
  accentPrimary2: '#fdb81e',
  accentPrimary3: '#bcbd22',
  accentPrimary4: '#00bce4',
  accentPrimary5: '#597b7c',
  accentPrimary6: '#e377c2',
  accentPrimary7: '#5610eb',

  // Accent - secondary
  accentSecondary1: '#9fe7e2',
  accentSecondary2: '#ffe29f',
  accentSecondary3: '#e4e5a2',
  accentSecondary4: '#88e7f7',
  accentSecondary5: '#bbcbcb',
  accentSecondary6: '#fcc6e9',
  accentSecondary7: '#c39efe',

  // Amgen secondary blue
  colorSecondary: '#00bce4',

  // Table colors - these are not part of ant's design ThemeConfig values
  // Future dark mode/theme variables need to be redefined
  tableHeaderBg: '#fafafa',
  tableHeaderBgSecondary: '#e6f7ff',
  tableCellBg: '#ffffff',
  tableCellBgSecondary: '#fafafa',

  // Label colors
  colorTextLabel: 'rgba(0,0,0,0.65)',
  colorTextLabelOptional: 'rgba(0,0,0,0.45)',

  // Link colors
  colorLinkDefault: 'rgba(0, 0, 0, 0.88)',
  colorLinkDefaultHover: 'rgba(33, 126, 207, 1)',
  colorLinkSecondary: 'rgba(0, 99, 195, 1)',
  colorLinkSecondaryHover: 'rgba(33, 126, 207, 1)',

  // Carousel Colors - these are not part of ant's design ThemeConfig values
  colorCarouselNavigationDefault: 'rgba(0, 99, 195, 1)',
  colorCarouselNavigationActive: 'rgba(111, 184, 232, 1)',
  colorCarouselItemOutline: 'rgba(0, 0, 0, 0.15)',
} as const;

export type Colors = keyof typeof colors;

export default colors;
