module.exports = {
  plugins: [
    // ["styled-components", { "ssr": true }],
    ["babel-plugin-styled-components",{"ssr": true}],
    "inline-react-svg"
  ],
  presets: ["next/babel","@babel/preset-typescript"],
};
