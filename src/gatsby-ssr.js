import React from 'react'
import { renderToString } from 'react-dom/server'
import { StyleSheetServer } from 'aphrodite'
import { StyleSheetServer as StyleSheetServerNoImportant } from 'aphrodite/no-important'

// we need this function because Gatsby 2's Webpack config splits bundles into
// chunks by page and if there is `aphrodite` & `aphrodite/no-important` it
// will otherwise fail since they are different objects exports and undefined
// to each other
const renderAphrodite = (bodyComponent) => {
  // if you are reading this and know a way to
  // detect which one is used without falling back to errors
  // please make a pull request!
  try {
    return StyleSheetServer.renderStatic(() => renderToString(bodyComponent))
  } catch (_) {
    return StyleSheetServerNoImportant.renderStatic(() => renderToString(bodyComponent))
  }
}

const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const { html, css } = renderAphrodite(bodyComponent)

  replaceBodyHTMLString(html)

  setHeadComponents([
    <style
      id="aphrodite-styles"
      key="aphrodite-styles"
      dangerouslySetInnerHTML={{ __html: css.content }}
    />,
    <script
      id="aphrodite-ids"
      key="aphrodite-ids"
      dangerouslySetInnerHTML={{
        __html: `window.gatsbyAphrodite = ${JSON.stringify(css.renderedClassNames)}`,
      }}
    />,
  ])
}

// eslint-disable-next-line import/prefer-default-export
export { replaceRenderer }
