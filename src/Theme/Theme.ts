export const theme = {
    colors: {
        white: '#fff',
        black: "#131616",
        red: "#842020",
        pink: "#b36cc2",
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
        large: 24
    },
    borderRadius: {
        std: 8,
    }

}

export type Theme = typeof theme