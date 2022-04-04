import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  :root {
    --max-w: 1920px !important;
    --out-w: 1700px !important;
    --in-w: 1200px !important;

    --p-f: 1.3rem !important;
    --p-b: 300 !important;
    --h2-f: 3rem !important;
    --h2-b: 600 !important;
    --h3-f: 1.8rem !important;
    --h3-b: 600 !important;

    --p-lh: 20px;
  }

  body {
    font-family: 'Inconsolata', monospace !important;
    font-family: 'Work Sans', sans-serif !important;
    box-sizing: border-box !important;
  }

  @media (max-width: 1023px) {
    :root {
      --in-w: 700px !important;
      --h2-f: 2rem !important;
      --h3-f: 1.5rem !important;
      --p-f: 1rem !important
    }
  }

  @media (max-width: 767px) {
    :root {
      --in-w: 400px !important;
    }
  }
`
export default GlobalStyle