<template>
  <nav class="navbar">
    <div class="logo-container">
      <g-link class="logo" to="/">
        <span class="logo__text">
          {{ $static.metadata.siteName }}
        </span>
        <span class="logo__description">
          {{ $static.metadata.siteDescription }}
        </span>
      </g-link>
    </div>
    <ul class="navbar__links">
      <input type="checkbox" id="menu-button">
      <div class="menu-opener">
        <label for="menu-button">
          <a class="menu-trigger">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </label>
        <div class="menu-inner">
          <h4>メニューだと思いました？</h4>
          <p>これ、通称ハンバーガーメニューって言うんですけど、クリックで開けられるのを知っている人は、何らかの経験から三本線はメニューだって言うことを学んでいるわけなんですよ。</p>
          <p>だからなんだって話なんですが、こういったメニューをJavaScriptを使わずHTML,CSSのみで実装したので見てほしいなって実装しました。</p>
          <p>ちょっと使ってみたかっただけなんですけど、気が向いたらなにか用意します。<br>（多分やらない）</p>
        </div>
      </div>
    </ul>
  </nav>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 9999;
  

  .logo {
    text-decoration: none;
    color: var(--body-color) !important;
    font-family: 'Norican', cursive;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    transform: rotate(-10deg);
    position: relative;
    z-index: -3;
    text-shadow: -1px 1px 0 rgba(255, 255, 255, 1);
    &__text {
      font-size: 2rem;
      line-height: 1;

    }
    &__description {
      font-size: .8rem;
    }
  }
  .navbar__links {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;

    #menu-button {
      height: 0;
      display: none;
      visibility: hidden;
    }
    .menu-trigger,
    .menu-trigger span {
      display: inline-block;
      transition: all .4s;
      box-sizing: border-box;
    }
    .menu-trigger {
      position: relative;
      margin: 1rem;
      width: 50px;
      height: 44px;
    }
    .menu-trigger span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #fff;
      border-radius: 4px;
    }
    .menu-trigger span:nth-of-type(1) {
      top: 0;
    }
    .menu-trigger span:nth-of-type(2) {
      top: 20px;
    }
    .menu-trigger span:nth-of-type(3) {
      bottom: 0;
    }
    .menu-opener {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        transition: all 1s;
        width: 200px;
        height: 200px;
        background: #2c3e50;
        z-index: -1;
        transform: skewY(45deg);
        transform-origin: top right;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      }
    }
    .menu-inner {
      opacity: 0;
      height: 0;
      margin: 1rem;
      display: none;
      transition: all 1s;
      transition-delay: 1s;
      width: 360px;
      font-family: 'Noto Serif JP', serif;
      h4,p {
        color: var(--bg-color);
        font-size: 1rem;
        line-height: 1.6;
        margin: 0;
        padding: 0;
      }
      p {
        font-size: .9rem;
      }
    }
    #menu-button:checked + .menu-opener {
      &::after {
        transition: all 1s;
        width: 80vh;
        height: 80vh;
        transform: none;
        border-radius: 100% 0% 0% 100% / 0% 100% 0% 100%;
      }
      .menu-inner {
        transition: all 1s, opacity 3s;
        opacity: 1;
        height: 100%;
        display: block;
      }
      .menu-trigger {
        transform: rotate(135deg);
      }
      .menu-trigger span:nth-of-type(1),
      .menu-trigger span:nth-of-type(3) {
        width: 20px;
      }
      .menu-trigger span:nth-of-type(1) {
        -webkit-transform: translate(-1px,13px) rotate(-45deg);
        transform: translate(-1px,13px) rotate(-45deg);
      }
      .menu-trigger span:nth-of-type(3) {
        -webkit-transform: translate(-1px,-13px) rotate(45deg);
        transform: translate(-1px,-13px) rotate(45deg);
      }
    }


  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 140px;
    background: var(--bg-color);
    z-index: -3;
    transform: skewY(-10deg);
    transform-origin: top left;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    transition: all 1s;
    width: 100%;
    height: 120px;
    background: #fff;
    z-index: -2;
    transform: skewY(12deg);
    transform-origin: top right;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
}
@media screen and (max-width: 650px) {
  .navbar {
    .logo {
      padding: 0;
    }
    .navbar__links {
      .menu-opener {
        &::after {
          transform: none;
          width: 100px;
          height: 100px;
          border-radius: 0 0 0 100%;
        }
      }
      #menu-button:checked + .menu-opener {
        &::after {
          transition: all 1s;
          width: 100%;
          height: 50vh;
          border-radius: 0;
        }
      }
      .menu-inner {
        width: calc(100% - 2rem);
      }
    }
    &::before {
      height: 120px;
    }
    &::after {
      background: #2c3e50;
      z-index: -4;
    }
  }
}
</style>
