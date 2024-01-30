/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        burlywood: "#efcc8b",
        dimgray: {
          "100": "#736651",
          "200": "#545e61",
          "300": "#565555",
        },
        papayawhip: "rgba(243, 231, 204, 0.9)",
        darkolivegreen: "#806839",
        darkgray: {
          "100": "#b8a8a8",
          "200": "#a0a0a0",
          "300": "#969998",
        },
        gray: {
          "100": "#272727",
          "200": "#262626",
          "300": "#1d1b1b",
          "400": "rgba(255, 255, 255, 0.15)",
        },
        seagreen: "#246c43",
        "link-alternate": "#fff",
        mediumaquamarine: "#5cc497",
        "color-brand-black": "#000",
        darkslategray: {
          "100": "#375148",
          "200": "#444141",
          "300": "#333",
          "400": "rgba(51, 51, 51, 0.09)",
        },
        button: "#222a2d",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.09)",
        },
        "color-neutral-neutral-lighter": "#ccc",
        whitesmoke: "#ebebeb",
      },
      spacing: {},
      fontFamily: {
        "text-small-link": "Roboto",
        "josefin-sans": "'Josefin Sans'",
        "dm-sans": "'DM Sans'",
      },
      borderRadius: {
        "6xl": "25px",
        "31xl": "50px",
        sm: "14px",
        smi: "13px",
        mid: "17px",
        xl: "20px",
        "3xs": "10px",
        "11xl": "30px",
      },
    },
    fontSize: {
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      sm: "14px",
      lg: "18px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "19xl": "38px",
      "13xl": "32px",
      "7xl": "26px",
      xl: "20px",
      "37xl": "56px",
      "26xl": "45px",
      "15xl": "34px",
      "21xl": "40px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
