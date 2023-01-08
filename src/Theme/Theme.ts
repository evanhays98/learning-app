export const theme = {
    colors: {
        brightYellow: '#FFFF00',
        deepBrown: 'linear-gradient(180deg, #2c2a1f, #0e100d, #000706);',
        darkCharcoal: '#2D2D22',
        darkOliveGreen: '#48480F',
        darkSlateGray: '#2F4F4F',
        darkOrange: '#FF8C00',
        goldRush: '#FFD700',
        mustardYellow: '#E1E15E',
        orangePeel: '#FFA500',
        silverLining: '#E2E2D5',
        lg: "linear-gradient(45deg,#b36cc2,#842020)",
        rg: "radial-gradient(59.8% 50% at 50% 50%,#741d46 0,#ca538b 100%);"
    },
    marginBase: 8,
    basicFlex: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        large: 24,
        normal: 24,
    },
    borderRadius: {
        std: 8,
    },
    fonts: {
        h1: {
            fontFamily: 'Kodchasan, sans-serif',
            color: '#fff',
            fontWeight: 900,
            fontSize: 36,
            lineHeight: '125%',
        },
        h2: {
            fontFamily: 'Kodchasan, sans-serif',
            color: '#fff',
            fontWeight: 900,
            fontSize: 32,
            lineHeight: '125%',
        },
        h3: {
            fontFamily: 'Kodchasan, sans-serif',
            color: '#fff',
            fontWeight: 900,
            fontSize: 28,
            lineHeight: '125%',
        },
        h4: {
            fontFamily: 'Kodchasan, sans-serif',
            color: '#fff',
            fontWeight: 700,
            fontSize: 20,
            lineHeight: '125%',
        },
        h5: {
            fontFamily: 'Kodchasan, sans-serif',
            color: '#fff',
            fontWeight: 700,
            fontSize: 16,
            lineHeight: '125%',
        },
        body: {
            fontFamily: 'Kodchasan, sans-serif',
            color: '#fff',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '175%',
        },
        caption: {
            fontFamily: 'Kodchasan, sans-serif',
            color: '#fff',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '150%',
        },
        label: {
            fontFamily: 'Kodchasan, sans-serif',
            color: '#fff',
            fontWeight: 700,
            fontSize: 14,
            lineHeight: '150%',
        },
        calendarText: {
            fontFamily: 'Muli, Helvetica, Arial, sans-serif',
            color: '#fff',
            fontWeight: 400,
            fontSize: 12,
            lineHeight: '150%',
        },
    },

}

export type Theme = typeof theme