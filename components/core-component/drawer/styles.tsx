import { createTss } from "tss-react";
const { tss } = createTss({
  useContext: () => ({}),
});

const drawerHeaderStyles: React.CSSProperties = {
  borderBottom: "none",
  padding: "16px 24px 0 24px",
};

const drawerHeaderTitleStyles: React.CSSProperties = {
  borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
  flexDirection: "row-reverse",
  paddingBottom: 16,
};

const drawerTitleStyles: React.CSSProperties = {
  paddingRight: 16,
};

const drawerCloseStyles: React.CSSProperties = {
  padding: 0,
  marginRight: 0,
};

const closeIconStyles: React.CSSProperties = {
  width: 20,
  height: 20,
};

export const useStyles = tss.create(() => ({
  drawer: {
    ".ant-drawer-header": {
      ...drawerHeaderStyles,
      ".ant-drawer-header-title": {
        ...drawerHeaderTitleStyles,
        ".ant-drawer-title": {
          ...drawerTitleStyles,
        },
        "& > .ant-drawer-close": {
          ...drawerCloseStyles,
          "& > span > svg": {
            ...closeIconStyles,
          },
        },
      },
    },
  },
}));
