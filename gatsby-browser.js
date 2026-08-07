let aphrodite = require("aphrodite");
//#region src/gatsby-browser.js
exports.onClientEntry = () => {
	if (window.gatsbyAphrodite) aphrodite.StyleSheet.rehydrate(window.gatsbyAphrodite);
};
//#endregion
