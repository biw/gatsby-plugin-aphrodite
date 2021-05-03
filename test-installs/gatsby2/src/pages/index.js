import * as React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({ message: { color: "red" } });

const IndexPage = () => <div className={css(styles.message)}>Hello World</div>;

export default IndexPage;
