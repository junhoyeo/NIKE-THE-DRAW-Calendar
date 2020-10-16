import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
  }

  a {
    color: inherit;
    cursor: pointer;
    touch-action: manipulation;
    text-decoration: none;
  }

  body {
    margin: 0;
    word-break: keep-all;
    background-color: #F7F8FA;
  }

  body,
  input {
    font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, Bazier Square,
      Noto Sans KR, Segoe UI, Apple SD Gothic Neo, Roboto, Helvetica Neue, Arial, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.4px;
    font-size: 16px;
  }

  input,
  button {
    background-color: transparent;
    border: 0;

    &:focus {
      outline: 0;
    }
  }
`;
