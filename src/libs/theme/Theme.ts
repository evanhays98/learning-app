/*const basicColors = {
  yellowGradient: 'linear-gradient(180deg, #D39C39 0%, #CB9F5F 100%)',
  darkGradient: 'linear-gradient(200deg, rgba(50, 50, 38, 100) 0%, rgba(26, 26, 18, 100) 40%, rgba(0, 7, 6, 100) 100%)',
  lightGray: '#E2E2D5',
  darkGray: '#1E1E1E',
  transparentDarkGray: 'rgba(45, 45, 34, 0.33)',
  lightBeige: '#C9B27A',
  transparentYellow: '#FFD70020',
  orange: '#A77928',
  darkOrange: '#C49734',
  lightOrange: '#D5AC53',
  gold: '#d2a046',
  transparentDarkGray2: 'rgba(45, 45, 34, 0.33)',
  brown: '#784D0C',
  brownGradiant: 'linear-gradient(180deg, #784D0C 0%, #4C2D00 100%)',
  transparent: '#FFFFFF00',
  black: '#000000',
};*/
const basicColors = {
  yellowGradient: 'linear-gradient(180deg, #8B5FB5 0%, #D0A9F5 100%)',
  darkGradient: 'linear-gradient(200deg, rgba(50, 50, 38, 0.5) 0%, rgba(26, 26, 18, 100) 40%, rgba(0, 7, 6, 100) 100%)',
  lightGray: '#C3A5E6',
  darkGray: '#3B2D4F',
  transparentDarkGray: 'rgba(45, 45, 34, 0.33)',
  lightBeige: '#D0A9F5',
  transparentYellow: '#D0A9F520',
  orange: '#7B4D8B',
  darkOrange: '#9B6DA5',
  lightOrange: '#B57EBF',
  gold: '#C38FD8',
  transparentDarkGray2: 'rgba(45, 45, 34, 0.33)',
  brown: '#6C4CC4',
  brownGradiant: 'linear-gradient(180deg, #6C4CC4 0%, #6C4CC4 100%)',
  transparent: '#FFFFFF00',
  black: '#000000',
};


export type Colors = keyof typeof basicColors;
export const ColorsTest = {
  yellowGradient: 'yellowGradient' as Colors,
  darkGradient: 'darkGradient' as Colors,
  lightGray: 'lightGray' as Colors,
  darkGray: 'darkGray' as Colors,
  transparentDarkGray: 'transparentDarkGray' as Colors,
  lightBeige: 'lightBeige' as Colors,
  transparentYellow: 'transparentYellow' as Colors,
  orange: 'orange' as Colors,
  darkOrange: 'darkOrange' as Colors,
  lightOrange: 'lightOrange' as Colors,
  gold: 'gold' as Colors,
  transparentDarkGray2: 'transparentDarkGray2' as Colors,
  brown: 'brown' as Colors,
  brownGradiant: 'brownGradiant' as Colors,
  transparent: 'transparent' as Colors,
  black: 'black' as Colors,
};

export const theme = {
  colors: basicColors,
  marginBase: 8,
  basicFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  boxShadow: {
    std: `0px 0px 10px 4px ${basicColors.black}38`,
  },
  icon: {
    large: 24,
    normal: 16,
  },
  borderRadius: {
    std: 8,
  },
  fonts: {
    h1: {
      fontFamily: 'Kodchasan, sans-serif',
      color: basicColors.lightGray,
      fontWeight: 900,
      fontSize: 44,
      lineHeight: 1.5,
    },
    h2: {
      fontFamily: 'Kodchasan, sans-serif',
      color: basicColors.lightGray,
      fontWeight: 900,
      fontSize: 35,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Kodchasan, sans-serif',
      color: basicColors.lightGray,
      fontWeight: 900,
      fontSize: 28,
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: 'Kodchasan, sans-serif',
      color: basicColors.lightGray,
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: 'Kodchasan, sans-serif',
      color: basicColors.lightGray,
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.5,
    },
    body: {
      fontFamily: 'Kodchasan, sans-serif',
      color: basicColors.lightGray,
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
    },
    caption: {
      fontFamily: 'Kodchasan, sans-serif',
      color: basicColors.lightGray,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.5,
    },
    label: {
      fontFamily: 'Kodchasan, sans-serif',
      color: basicColors.lightGray,
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: 14,
    },
    calendarText: {
      fontFamily: 'Kodchasan, sans-serif',
      color: basicColors.lightGray,
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 1.5,
    },
  },

};

export type Theme = typeof theme