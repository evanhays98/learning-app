export const theme = {
    colors: {
        white: '#fff',
        black: "#131616",
        red: "#842020",
        pink: "#b36cc2",
        pinkMuted: "#ddcae2",
        pinkAccessible: "#872a9e",
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
            fontSize: 44,
            lineHeight: '125%',
        },
        h2: {
            fontFamily: 'Kodchasan, sans-serif',
            color: '#fff',
            fontWeight: 900,
            fontSize: 35,
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
            fontSize: 16,
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
            fontFamily: 'Muli, Helvetica, Arial, sans-serif',
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