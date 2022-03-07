module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#000033",
        secondary: "#FDD25A",
        darkGray: "rgba(48, 48, 48, 255)",
        lightPurple: "#d772fb",
        lightBrown: "#ff9cb1",
        bgcolors: "#e9f0ff",
        footerbg: "#303030",
        skyBlue: "#e9f0ff",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      backgroundImage: {
        seller: "url(../assets/seller-bg.png)",
        drawer: "url(../assets/bg-drawer.png)",
        store: "url(../assets/bg-seller-store.png)",
        storeHeader: "url(../assets/bg-store-header.png)",
        exclusion: "url(../assets/exclusion.png)",
      }
    },
  },
}
