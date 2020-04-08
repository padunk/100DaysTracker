module.exports = {
  theme: {
    fontFamily: {
      display: ["Rosario"],
      sans: ["Rambla"]
    },
    extend: {
      gridTemplateColumns: {
        form: "1fr 2fr"
      }
    },
    inset: {
      "1/4": "25%",
      "1/3": "33%",
      "1/2": "50%",
      "2/3": "67%",
      "3/4": "100%",
      "1rem": "1rem",
      "2rem": "2rem",
      "4rem": "4rem",
      "6rem": "6rem",
    },
    backgroundPosition: {
      bottom: "bottom",
      "bottom-4": "center bottom 1rem",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "1/4": "25%",
      "1/3": "33%",
      "1/2": "50%",
      "2/3": "67%",
      "3/4": "75%"
    }
  }
};
