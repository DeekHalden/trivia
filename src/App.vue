<script setup>

</script>

<template>
  <body>
    <header>
      <router-link to="/about">QUIZZY</router-link>
      <a href="">
        <i></i>
      </a>
    </header>
    <router-view />
  </body>
</template>

<style lang="less">
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
/* critters:include */
* {
  box-sizing: border-box;
}
/* critters:include */
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
/* HTML5 display-role reset for older browsers */
/* critters:include */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
/* critters:include */
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
  --fg-color-main: #0a0037;
  --fg-color-alternative: #ffffff;

  --font: Roboto, Tahoma, sans-serif;

  --bg-body: linear-gradient(180deg, #2aabe2 0%, #5452da 50.52%, #6748ca 100%);

  --bg-color-main: #fff;

  --bg-color-alternative: linear-gradient(180deg, #00d8ff 0%, #16b0fe 100%);

  --bg-color-alternative-2: #2e2950;
  --bg-color-alternative-3: #7ddf00;
  --bg-color-alternative-4: #15b4ff;
}

html {
  color: var(--fg-color-main);
  font-family: var(--font);
  background: var(--bg-body);
  overflow-x: hidden;
  height: 100%;
}

a {
  text-decoration: none;
  color: var(--fg-color-alternative);
}

body {
  --safe-area-inset-top: env(safe-area-inset-top);
  --safe-area-inset-bottom: env(safe-area-inset-bottom);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  & > header {
    // position: absolute;
    // top: 0;
    width: 100%;
    padding: 10px 14px 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      &:first-child {
        letter-spacing: 3px;
        font-weight: 900;
        font-size: 1em;
      }
      &:last-child {
        position: relative;
        width: 32px;
        height: 32px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        &:before,
        &:after {
          content: '';
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
          width: 16px;
        }
        &:before {
          top: 8px;
        }
        &:after {
          bottom: 8px;
        }
        &::before,
        &::after,
        i {
          border-radius: 3px;
          height: 3px;
          background-color: #0a0037;
        }
        i {
          width: 8px;
          margin-right: 8px;
        }
      }
    }
  }
}

main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: auto;
  section {
    width: 100%;
    margin: 0 auto;
    max-width: 336px;
    & > {
      mark {
        margin-bottom: 15px;
      }
    }
  }
  .qs {
    h4 {
      color: var(--fg-color-alternative);
      font-size: 24px;
      line-height: 28px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 20px;
    }
  }
  header {
    width: 100%;
    height: auto;
    margin-bottom: 15px;
    div {
      height: 150px;
    }
    img {
      width: 100%;
      max-height: 100%;
    }
  }
  &.offset {
    transform: translateY(-26px);
  }
}

.card {
  --border-radius: 12px;

  border-radius: var(--border-radius) var(--border-radius);
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background-color: var(--bg-color-main);
  &__img {
    height: 180px;
    width: 100%;
  }
  img {
    width: 100%;
    height: auto;
  }
  & > div:not(.card__img) {
    padding: 20px 24px;
  }
  h4 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin-bottom: 10px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    margin-top: 10px;
    color: var(--fg-color-main);
  }
}

mark {
  --mark-bg: #7778de;
  padding: 3px 8px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  margin: 0 auto;
  display: block;
  text-transform: uppercase;
  color: #fff;
  width: max-content;
  background: var(--mark-bg);
  border-radius: 100px;
  &:empty {
    --mark-bg: #3390e2;
    &::before {
      content: attr(data-text) attr(data-index) attr(data-text-2)
        attr(data-amount);
      letter-spacing: 0.05em;
    }
  }
}

.btn {
  display: block;
  width: 100%;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.05em;

  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  background: var(--bg-color-alternative);
  padding: 20px 0;
}

meter {
  --meter-fill: 10%;

  appearance: none;
  width: 100%;
  height: 5px;
  position: relative;
  block-size: 5px;
  inline-size: 100%;
  display: block;
  margin-top: -2px;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--bg-color-alternative-2);
  }
  &:after {
    content: '';
    width: var(--meter-fill);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--bg-color-alternative-3);
  }
}

.qs {
  .card {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 0;
    padding-top: 0;
    padding-left: 8px;
    padding-right: 8px;
    position: relative;
    cursor: pointer;
    &:before {
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 6px;
      position: absolute;
      background-color: var(--bg-color-alternative-4);
    }
    &:after {
      content: attr(data-v);
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      background-color: var(--bg-color-alternative-4);
      padding: 1px 11px;
      color: var(--fg-color-alternative);
      border-radius: 0px 0px 6px 6px;
      font-weight: 900;
      font-size: 14px;
      line-height: 16px;
      text-transform: uppercase;
    }
    p {
      text-align: center;
      margin-top: 0;
      font-weight: 600;
      line-height: 19px;
    }
  }
  input {
    display: none;
    &:checked + .card {
      p {
        color: var(--fg-color-alternative)
      }
      background: linear-gradient(180deg, #a1e926 0%, #5bbe30 100%);
      &:after {
        content: '\2713';
      }
      &::before,
      &::after {
        background-color: #36a400;
      }
    }
  }


  .qs-row, .answer {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
    a {
      width: calc(50% - 6px);
      cursor: pointer;
      pointer-events: all;
      label {
        pointer-events: all;
        &.disabled {
          pointer-events: none;
        }
      }
    }
    &.is-submit {
      display: flex;
      pointer-events: none;
      a, input {
        pointer-events: none;
      }
      input:checked, input[data-c="true"] {
        &[data-c='true'] + .card {
          p {
            color: var(--fg-color-alternative);
          }
          background: linear-gradient(180deg, #a1e926 0%, #5bbe30 100%);
          &:after {
            content: '\2713';
          }
          &::before,
          &::after {
            background-color: #36a400;
          }
        }
        &[data-c='false'] + .card {
          p {
            color: var(--fg-color-alternative);
          }
          background: linear-gradient(180deg, #ff5959 0%, #df4646 100%);
          &:after {
            content: '\00d7';
          }
          &::before,
          &::after {
            background-color: #d82020;
          }
        }
      }
    }
  }

  .answer {
    display: none;
    label {
      width: calc(50% - 6px);
      .card {
        background: var(--fg-color-alternative) !important;
        p {
          color: var(--fg-color-main) !important;
        }
      }
      &:only-of-type {
        width: 100%;
      }
      &:before {
        // position: absolute;
        content: '';
        top: -20px;
        left: 50%;
        // transform: translateX(-50%);
        text-align: center;
        display: block;
        color: var(--fg-color-alternative);
        margin-bottom: 13px;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      &:only-of-type, &:last-of-type:not(:only-of-type) {
        &::before {
          content: 'Correct answer';
        }
      }
      &:first-of-type:not(:only-of-type) {
        &::before {
          content: 'Selected answer'
        }
      }
    }
  }

  & > div:not(.qs-row) {
    width: 336px;
    margin: 0 auto 30px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    & > div {
      width: 100%;
      height: 280px;
      background-color: #ffffff;
    }
    span {
      &:first-of-type {
        position: absolute;
        top: 45%;
      }
      &:last-of-type {
        &:before {
          content: 'advertising';
          text-transform: uppercase;
          font-size: 8px;
          line-height: 8px;
          letter-spacing: 1px;
          color: #b1b1b1;
          text-align: center;
          width: 100%;
          display: block;
          color: #fff;
          background-color: #586ccd;
          padding: 4px 0;
        }
      }
    }
  }

  article {
    margin-top: 8px;
    p {
      font-size: 16px;
      line-height: 22px;
      color: var(--fg-color-alternative)
    }
  }
}

.cta {
  margin-bottom: 52px;
  display: none;
  &.active {
    display: block;
  }
}

</style>
