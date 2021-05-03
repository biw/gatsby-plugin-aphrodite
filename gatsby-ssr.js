"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceRenderer = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _aphrodite = require("aphrodite");

var _noImportant = require("aphrodite/no-important");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// we need this function because Gatsby 2's Webpack config splits bundles into
// chunks by page and if there is `aphrodite` & `aphrodite/no-important` it
// will otherwise fail since they are different objects exports and undefined
// to each other
var renderAphrodite = function renderAphrodite(bodyComponent) {
  // if you are reading this and know a way to
  // detect which one is used without falling back to errors
  // please make a pull request!
  try {
    return _aphrodite.StyleSheetServer.renderStatic(function () {
      return (0, _server.renderToString)(bodyComponent);
    });
  } catch (_) {
    return _noImportant.StyleSheetServer.renderStatic(function () {
      return (0, _server.renderToString)(bodyComponent);
    });
  }
};

var replaceRenderer = function replaceRenderer(_ref) {
  var bodyComponent = _ref.bodyComponent,
      replaceBodyHTMLString = _ref.replaceBodyHTMLString,
      setHeadComponents = _ref.setHeadComponents;

  var _renderAphrodite = renderAphrodite(bodyComponent),
      html = _renderAphrodite.html,
      css = _renderAphrodite.css;

  replaceBodyHTMLString(html);
  setHeadComponents([_react.default.createElement("style", {
    id: "aphrodite-styles",
    key: "aphrodite-styles",
    dangerouslySetInnerHTML: {
      __html: css.content
    }
  }), _react.default.createElement("script", {
    id: "aphrodite-ids",
    key: "aphrodite-ids",
    dangerouslySetInnerHTML: {
      __html: `window.gatsbyAphrodite = ${JSON.stringify(css.renderedClassNames)}`
    }
  })]);
}; // eslint-disable-next-line import/prefer-default-export


exports.replaceRenderer = replaceRenderer;