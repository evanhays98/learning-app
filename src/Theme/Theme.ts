const basicColors = {
    yellowGradient: 'linear-gradient(180deg, #D39C39 0%, #CB9F5F 100%)',
    darkGradient: 'linear-gradient(200deg, rgba(50, 50, 38, 100) 0%, rgba(26, 26, 18, 100) 40%, rgba(0, 7, 6, 100) 100%)',
    lightGray: '#E2E2D5',
    darkGray: '#1E1E1E',
    transparentDarkGray: 'rgba(45, 45, 34, 0.33)',
    lightBeige: '#C9B27A',
    transparentYellow: 'rgba(255, 215, 0, 0.08)',
    orange: '#A77928',
    darkOrange: '#C49734',
    lightOrange: '#D5AC53',
    gold: '#d2a046',
    transparentDarkGray2: 'rgba(45, 45, 34, 0.33)',
    brown: '#784D0C',
    transparent: '#FFFFFF00',
    black: '#000000',
};
export type Colors = keyof typeof basicColors;
export type ColorsTest = typeof basicColors;

export const theme = {
    colors: basicColors,
    marginBase: 8,
    basicFlex: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: 'wrap',
        gap: 8
    },
    boxShadow: {
        std: `0px 0px 30px 8px ${basicColors.lightBeige}20`,
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
        },
        h2: {
            fontFamily: 'Kodchasan, sans-serif',
            color: basicColors.lightGray,
            fontWeight: 900,
            fontSize: 35,
        },
        h3: {
            fontFamily: 'Kodchasan, sans-serif',
            color: basicColors.lightGray,
            fontWeight: 900,
            fontSize: 28,
        },
        h4: {
            fontFamily: 'Kodchasan, sans-serif',
            color: basicColors.lightGray,
            fontWeight: 700,
            fontSize: 20,
        },
        h5: {
            fontFamily: 'Kodchasan, sans-serif',
            color: basicColors.lightGray,
            fontWeight: 700,
            fontSize: 16,
        },
        body: {
            fontFamily: 'Kodchasan, sans-serif',
            color: basicColors.lightGray,
            fontWeight: 400,
            fontSize: 16,
        },
        caption: {
            fontFamily: 'Kodchasan, sans-serif',
            color: basicColors.lightGray,
            fontWeight: 400,
            fontSize: 14,
        },
        label: {
            fontFamily: 'Kodchasan, sans-serif',
            color: basicColors.lightGray,
            fontWeight: 700,
            fontSize: 14,
        },
        calendarText: {
            fontFamily: 'Kodchasan, sans-serif',
            color: basicColors.lightGray,
            fontWeight: 400,
            fontSize: 12,
        },
    },

}

export type Theme = typeof theme