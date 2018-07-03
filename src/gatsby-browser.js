import { StyleSheet } from 'aphrodite'

exports.onClientEntry = () => {
  if (window.gatsbyAphrodite) {
    StyleSheet.rehydrate(window.gatsbyAphrodite)
  }
}
