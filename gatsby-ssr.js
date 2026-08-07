Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let aphrodite = require("aphrodite");
let react = require("react");
react = __toESM(react);
let react_dom_server = require("react-dom/server");
let aphrodite_no_important = require("aphrodite/no-important");
//#region src/gatsby-ssr.js
const renderAphrodite = (bodyComponent) => {
	try {
		return aphrodite.StyleSheetServer.renderStatic(() => (0, react_dom_server.renderToString)(bodyComponent));
	} catch {
		return aphrodite_no_important.StyleSheetServer.renderStatic(() => (0, react_dom_server.renderToString)(bodyComponent));
	}
};
const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
	const { html, css } = renderAphrodite(bodyComponent);
	replaceBodyHTMLString(html);
	setHeadComponents([/* @__PURE__ */ react.default.createElement("style", {
		id: "aphrodite-styles",
		key: "aphrodite-styles",
		dangerouslySetInnerHTML: { __html: css.content }
	}), /* @__PURE__ */ react.default.createElement("script", {
		id: "aphrodite-ids",
		key: "aphrodite-ids",
		dangerouslySetInnerHTML: { __html: `window.gatsbyAphrodite = ${JSON.stringify(css.renderedClassNames)}` }
	})]);
};
//#endregion
exports.replaceRenderer = replaceRenderer;
