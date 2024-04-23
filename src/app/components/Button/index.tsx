import { PropsWithChildren } from "react";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  buttonColor: {
    backgroundColor: "#ffffff",
    color: "#fe32dd",
  },
});

type ButtonProps = {};

function Button({ children }: PropsWithChildren<ButtonProps>) {
  return <button {...stylex.props(styles.buttonColor)}>{children}</button>;
}

export default Button;
