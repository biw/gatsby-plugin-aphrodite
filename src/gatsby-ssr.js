import React from 'react'
import { renderToString } from 'react-dom/server'
import { StyleSheetServer } from 'aphrodite'

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const { html, css } = StyleSheetServer.renderStatic(() => renderToString(bodyComponent))

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
