import { ThemeConfig } from 'antd';
import colors from './colors';

// Default Amgen theme configuration
const theme: ThemeConfig = {
  token: {
    // Color seed tokens
    colorTextBase: colors.black,
    colorTextLightSolid: colors.white,
    colorBgBase: colors.white,
    colorPrimary: colors.blue6,
    colorLink: colors.blue6,
    colorError: colors.red6,
    colorWarning: colors.gold7,
    colorSuccess: colors.green6,
    colorInfo: colors.blue6,

    // Primary colors
    colorPrimaryBg: colors.blue1,
    colorPrimaryBgHover: colors.blue2,
    colorPrimaryBorder: colors.blue3,
    colorPrimaryBorderHover: colors.blue4,
    colorPrimaryHover: colors.blue5,
    colorPrimaryActive: colors.blue7,
    colorPrimaryTextHover: colors.blue8,
    colorPrimaryText: colors.blue9,
    colorPrimaryTextActive: colors.blue10,

    // Success colors
    colorSuccessBg: colors.green1,
    colorSuccessBgHover: colors.green2,
    colorSuccessBorder: colors.green3,
    colorSuccessBorderHover: colors.green4,
    colorSuccessHover: colors.green5,
    colorSuccessActive: colors.green7,
    colorSuccessTextHover: colors.green8,
    colorSuccessText: colors.green8,
    colorSuccessTextActive: colors.green10,

    // Warning colors
    colorWarningBg: colors.gold1,
    colorWarningBgHover: colors.gold2,
    colorWarningBorder: colors.gold3,
    colorWarningBorderHover: colors.gold6,
    colorWarningHover: colors.gold5,
    colorWarningActive: colors.gold7,
    colorWarningTextHover: colors.gold8,
    colorWarningText: colors.gold9,
    colorWarningTextActive: colors.gold10,

    // Error colors
    colorErrorBg: colors.red1,
    colorErrorBgHover: colors.red2,
    colorErrorBorder: colors.red3,
    colorErrorBorderHover: colors.red4,
    colorErrorHover: colors.red4,
    colorErrorActive: colors.red7,
    colorErrorTextHover: colors.red8,
    colorErrorText: colors.red6,
    colorErrorTextActive: colors.red10,

    // Info colors
    colorInfoBg: colors.blue1,
    colorInfoBgHover: colors.blue2,
    colorInfoBorder: colors.blue3,
    colorInfoBorderHover: colors.blue4,
    colorInfoHover: colors.blue5,
    colorInfoActive: colors.blue7,
    colorInfoTextHover: colors.blue8,
    colorInfoText: colors.blue9,
    colorInfoTextActive: colors.blue10,

    // Text and icons
    colorText: colors.textIcon1,
    colorTextHeading: colors.textIcon1,
    colorTextDescription: colors.textIcon2,
    colorTextPlaceholder: colors.textIcon3,
    colorTextDisabled: colors.textIcon3,
    colorIcon: colors.textIcon2,
    colorIconHover: colors.textIcon1,

    // Backgrounds
    colorBgContainer: colors.white,
    colorBgContainerDisabled: colors.background1,
    colorBgLayout: colors.background2,
    colorBgElevated: colors.white,
    controlItemBgHover: colors.background1,
    controlItemBgActive: colors.blue1,
    controlItemBgActiveHover: colors.blue2,

    // Borders and dividers
    colorBorder: colors.borderDivider1,
    colorBorderSecondary: colors.borderDivider2,
    colorSplit: colors.borderDivider2,

    // Typography
    fontFamily: 'Inter',
    fontSize: 12,
    fontSizeHeading1: 24,
    fontSizeHeading2: 18,
    fontSizeHeading3: 14,

    lineHeightHeading1: 1.333334, // h1 line height 32
    lineHeightHeading2: 1.44444444, // h2 line height 26
    lineHeightHeading3: 1.42857286, // h3 line height 20
    lineHeight: 1.5, // paragraph line height 18px

    // Label
    colorTextLabel: colors.colorTextLabel,

    // Border radius
    borderRadius: 4,
    borderRadiusXS: 2,
    borderRadiusSM: 4,
    borderRadiusLG: 8,

    // Box shadow
    // talk to Lawrence

    // Size units
    sizeUnit: 4,
    sizeStep: 4,

    // Padding
    padding: 16,
    paddingXXS: 4,
    paddingXS: 8,
    paddingSM: 12,
    paddingMD: 20,
    paddingLG: 24,
    paddingXL: 32,
    // paddingXXL: 48,

    // Margin
    margin: 16,
    marginSM: 12,
    marginXS: 8,
    marginXXS: 4,
    marginLG: 24,
    marginXL: 32,
    marginXXL: 48,

    // Control heights
    controlHeight: 28,
    controlHeightXS: 16,
    controlHeightSM: 24,
    controlHeightLG: 40,
  },

  // To override component level styles, edit here:
  components: {
    Button: {
      defaultColor: colors.blue6,
    },
    Collapse: {
      headerBg: colors.white,
      headerPadding: '12px 8px',
    },
    Drawer: {
      colorBgMask: 'rgba(0, 0, 0, 0.15)',
      footerPaddingBlock: 16,
      footerPaddingInline: 24,
      zIndexPopup: 1000,
    },
    Radio: {
      dotSize: 8,
      radioSize: 16,
    },
    Switch: {
      trackHeight: 22,
      handleSize: 18,
    },
    Table: {
      headerBg: colors.tableHeaderBg,
      headerBorderRadius: 0,
      colorBgContainer: colors.white,
      headerSortHoverBg: colors.blue2,
    },
    Typography: {
      colorLink: colors.colorLinkDefault,
      colorLinkHover: colors.colorLinkDefaultHover,
      colorSuccess: colors.green8,
      colorWarning: colors.gold9,
    },
  },
};

export default theme;
