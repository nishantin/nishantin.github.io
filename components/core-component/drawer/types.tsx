import React from "react";

export type DrawerProps = {
  children: React.ReactNode;
  /** Whether the drawer should be focused when opened */
  autoFocus?: boolean;
  /** Callback function to trigger after the drawer is opened/after the animation ends when switching drawers */
  afterOpenChange?: (open: boolean) => void;
  /** Apply custom class(es) to the root component */
  className?: string;
  /** Apply custom class(es) to the header, body and footer of the drawer */
  classNames?: {
    header?: string;
    body?: string;
    footer?: string;
  };
  /** Toggle to remove the drawer from the DOM after the drawer is closed */
  destroyOnClose?: boolean;
  /** Contents of the footer section of the drawer */
  footer?: React.ReactNode;
  /** Height of the drawer */
  height?: number | string;
  /** Toggle to allow for drawer to close when hitting the `Esc` keyboard button on the keyboard. Default value is `true` */
  keyboard?: boolean;
  /** Set drawer position. Positions are `top`, `right`, `bottom` and `left` */
  placement?: "top" | "right" | "bottom" | "left";
  /** Custom inline CSS styling for the root component of the drawer */
  style?: React.CSSProperties;
  /** Custom inline CSS styling for the header, body and footer of the drawer. This prop will accept React.CSSProperties within the  `header`, `body`, and `footer` fields */
  styles?: {
    header?: React.CSSProperties;
    body?: React.CSSProperties;
    footer?: React.CSSProperties;
  };
  /** Title of the drawer */
  title?: string | React.ReactNode;
  /** Toggle to render loading icon */
  loading?: boolean;
  /** Prop to bind the open/close state of the drawer */
  open?: boolean;
  /** Width of the drawer. Default width is `378px`. For larger content width, the recommendation is to use `736px`  */
  width?: number | string;
  /** Z-index of the drawer */
  zIndex?: number;
  /** Props to render dynamic cross icon */
  closeIcon?: React.ReactNode;
  /** Callback function to trigger when the drawer is closed */
  onClose?: () => void;
  /** Toggle to remove mask overlay of viewport contents when drawer is open */
  hideOverlay?: boolean;
  /** Render in current dom. custom container, check getContainer. */
  getContainer?: HTMLElement | (() => HTMLElement) | false;
};
