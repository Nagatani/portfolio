<script>
  import {url, isActive} from '@roxi/routify';
  export let links;
</script>

<nav class="navbar">
  <div class="logo-container">
    <a class="logo" href="/">
      <span class="logo__text">
        @Nagatani
      </span>
      <span class="logo__description">
        $ echo 'Hello, World!!'
      </span>
    </a>
  </div>
  <ul class="navbar__links">
    <input type="checkbox" id="menu-button">
    <div class="menu-opener">
      <label for="menu-button">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="menu-trigger">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </label>
      <div class="menu-inner">
        <h4>もう少し詳しいこと</h4>
        <ul>
          {#each links as [path, name]}
          <li><a href={$url(path)} class:active={$isActive(path)}>{name}</a></li>
          {/each}
        </ul>
      </div>
    </div>
  </ul>
</nav>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 9999;
  

  .logo {
    text-decoration: none;
    color: var(--bg-color) !important;
    font-family: 'Azeret Mono', monospace;
    pointer-events: all;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    transform: rotate(-10deg);
    position: relative;
    z-index: 5;
    text-shadow: 1px -1px 0 #ffffff33;
    &__text {
      font-size: 1.6rem;
      line-height: 1;
    }
    &__description {
      font-size: .8rem;
    }
  }
  .navbar__links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 100%;
    margin: 0;

    #menu-button {
      height: 0;
      display: none;
      visibility: hidden;
      pointer-events: all;
    }
    label[for="menu-button"] {
      pointer-events: all;
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
        pointer-events: none;
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
      text-align: right;
      ul {
        list-style: none;
        li {
          a {
            color: var(--bg-color);
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      h4 {
        color: var(--bg-color);
        font-size: 1.25rem;
        line-height: 1.6;
        margin: 0;
        padding: 0 0 1rem;
      }
    }
    #menu-button:checked + .menu-opener {
      &::after {
        transition: all 1s;
        width: 400px;
        height: 400px;
        transform: none;
        pointer-events: none;
        border-radius: 100% 0% 0% 100% / 0% 100% 0% 100%;
      }
      .menu-inner {
        transition: all 1s, opacity 3s;
        opacity: 1;
        height: 100%;
        display: block;
        position: relative;
        z-index: 4;
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
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 100%;
    height: 140px;
    background: #2c3e50;
    z-index: -3;
    transform: skewY(-10deg);
    transform-origin: top left;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  &::after {
    content: "";
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    max-width: 100%;
    width: 100vw;
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
          max-width: 100%;
          width: 100vw;
          height: 50vh;
          border-radius: 0;
        }
        .menu-trigger span:nth-of-type(1),
        .menu-trigger span:nth-of-type(3) {
          width: 20px;
        }
        .menu-trigger span:nth-of-type(1) {
          transform: translate(-1px,5px) rotate(-45deg);
        }
        .menu-trigger span:nth-of-type(3) {
          transform: translate(-1px,-5px) rotate(45deg);
        }
      }
      .menu-trigger {
        width: 32px;
        height: 28px;
      }
      .menu-trigger span:nth-of-type(2) {
        top: 12px;
      }
      .menu-inner {
        width: calc(100% - 2rem);
      }
    }
    &::before {
      height: 120px;
    }
    &::after {
      z-index: -4;
    }
  }
}
</style>