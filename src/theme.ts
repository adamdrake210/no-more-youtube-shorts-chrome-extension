import { MantineThemeOverride, createTheme } from '@mantine/core';

export const theme: MantineThemeOverride = createTheme({
  colors: {
    primary: [
      '#f1d9e9',
      '#e3b2d4',
      '#dc9fc9',
      '#cd79b3',
      '#c665a9',
      '#bf529e',
      '#b83f93',
      '#933276',
      '#6e2658',
      '#37132c',
    ],
    secondary: [
      '#e4f0f7',
      '#d6e8f3',
      '#bbd9ec',
      '#add1e8',
      '#a0cae4',
      '#85bbdc',
      '#77b3d8',
      '#5f8fad',
      '#476b82',
      '#3c5a6c',
    ],
    dark: [
      '#b3bcc5',
      '#99a5b1',
      '#808f9e',
      '#4d6277',
      '#334b63',
      '#1a3550',
      '#001e3c',
      '#001b36',
      '#001830',
      '#001224',
    ],
  },
  primaryColor: 'primary',
  primaryShade: 6,
  // eslint-disable-next-line quotes
  fontFamily: "'Funnel Display', sans-serif",
  headings: {
    // eslint-disable-next-line quotes
    fontFamily: "'Funnel Display', sans-serif",
    fontWeight: '200',
    sizes: {
      h1: { fontSize: '32px', lineHeight: '1.5' },
      h2: { fontSize: '26px', lineHeight: '1.5' },
      h3: { fontSize: '22px', lineHeight: '1.5' },
    },
  },
});
