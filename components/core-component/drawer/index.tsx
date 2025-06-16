"use client";

import { Drawer as AntDrawer } from "antd";
import { DrawerProps } from "./types";
import { useStyles } from "./styles";

const defaultBodyStyles = {
  padding: "16px 24px",
};

const defaultFooterStyles = {
  borderTop: "none",
  paddingTop: 0,
};

/**
 * Drawer components are used to present temporary content in a modal-like panel that slides in from the edge of the screen.
 * It provides a way to display additional information without obstructing the main content of the page.
 * For example, a drawer can be used to display a additional metrics for a chart or a table.
 */
export const Drawer = ({
  children,
  className,
  hideOverlay = false,
  width = 400,
  styles,
  closeIcon = true,
  ...rest
}: DrawerProps) => {
  const mask = !hideOverlay;
  const { cx, classes } = useStyles();

  const combinedStyles = {
    header: {
      ...styles?.header,
    },
    body: {
      ...defaultBodyStyles,
      ...styles?.body,
    },
    footer: {
      ...defaultFooterStyles,
      ...styles?.footer,
    },
  };

  return (
    <AntDrawer
      className={cx(className, classes.drawer, "ds-component")}
      data-testid="drawer"
      mask={mask}
      styles={combinedStyles}
      width={width}
      closeIcon={closeIcon}
      {...rest}
    >
      {children}
    </AntDrawer>
  );
};
