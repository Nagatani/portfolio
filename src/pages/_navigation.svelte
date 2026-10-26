<script>
  import {url, isActive} from '@roxi/routify';
  export let links;

  let open = false;

  const toggle = () => (open = !open);
  const close = () => (open = false);

  function onKeydown(e) {
    if (open && e.key === 'Escape') close();
  }
</script>

<svelte:window on:keydown={onKeydown} />

<nav class="navbar" class:navbar--open={open}>
  <div class="logo-container">
    <a class="logo" href="/" on:click={close}>
      <span class="logo__text">
        @Nagatani
      </span>
      <span class="logo__description">
        $ echo 'Hello, World!!'
      </span>
    </a>
  </div>

  <!-- メニューを開いている間、外側のクリックで閉じるための透明な面 -->
  <div class="menu-backdrop" aria-hidden="true" on:click={close}></div>

  <!--
    右上に角だけのぞいている紺色の紙。メニューはこの紙に「書かれて」いて、
    開くと紙ごと左下へ滑り込んでくる。
  -->
  <div class="menu-paper">
    <div id="global-menu" class="menu-inner" inert={!open}>
      <h4>もう少し詳しいこと</h4>
      <ul>
        {#each links as [path, name]}
        <li>
          <a href={$url(path)} class:active={$isActive(path)} on:click={close}>{name}</a>
        </li>
        {/each}
      </ul>
    </div>
  </div>

  <button
    class="menu-trigger"
    type="button"
    aria-expanded={open}
    aria-controls="global-menu"
    aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
    on:click={toggle}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</nav>

<style lang="scss">
.navbar {
  // 紙の大きさ（中心から角までの距離）。画面をすべて覆えるよう十分大きくする
  --paper-r: 220vmax;
  // 紙の傾き。左（反時計回り）へ45度。メニューの文字も一緒に傾く
  --paper-angle: -45deg;
  // 画面の角からのぞいている三角形の辺の長さ（閉じているとき／開いているとき）
  --paper-peek: 220px;
  --paper-open: 760px;
  // 紙の端（左下側の辺）から、メニューを書き始める位置までの距離
  --menu-offset: 150px;
  // メニューを紙の辺に沿って右下方向へずらす量（画面の角を通る対角線が基準）
  --menu-shift: 0px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 9999;
  pointer-events: none;

  .logo {
    text-decoration: none;
    color: var(--bg-color) !important;
    font-family: 'Azeret Mono', 'BIZ UDGothic', monospace;
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

// 紺色の紙：45度傾けた大きな正方形の中心を、画面右上の角から斜め外側へずらして置く。
// 中心のずらし量 k に対して、画面にのぞく三角形の辺の長さは (paper-r - 2k) になる。
// 左へ45度傾けると、紙の「左の辺」が画面の左下を向く。メニューはこの辺に沿って書く。
.menu-paper {
  --peek: var(--paper-peek);
  --k: calc((var(--paper-r) - var(--peek)) / 2);
  --side: calc(var(--paper-r) * 1.41422);

  position: fixed;
  top: calc(var(--side) / -2);
  right: calc(var(--side) / -2);
  width: var(--side);
  height: var(--side);
  z-index: -1;
  pointer-events: none;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0) 6%),
    #2c3e50;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  transform: translate(var(--k), calc(var(--k) * -1)) rotate(var(--paper-angle));
  // 閉じるときは素早く引っ込める
  transition:
    transform .45s cubic-bezier(.55, 0, .7, .2),
    box-shadow .45s;
}

.menu-backdrop {
  position: fixed;
  inset: 0;
  z-index: -4;
  display: none;
  pointer-events: all;
}

.menu-trigger {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 6;
  width: 50px;
  height: 44px;
  margin: 1rem;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  pointer-events: all;
  transition: transform .4s;

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
    transition: all .4s;
  }
  span:nth-of-type(1) {
    top: 0;
  }
  span:nth-of-type(2) {
    top: 20px;
  }
  span:nth-of-type(3) {
    bottom: 0;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 6px;
    border-radius: 4px;
  }
}

// 閉じているときにボタンへ乗せると、紙の角が少しめくれて出てくる
.navbar:not(.navbar--open):has(.menu-trigger:hover) .menu-paper {
  --peek: calc(var(--paper-peek) + 16px);
  transition: transform .3s ease-out;
}

// 紙に書かれたメニュー。紙の左の辺の中央から、紙の内側へ menu-offset だけ入った位置に書く。
// 紙と一緒に傾いているので、文字は右上がりに読み、項目は右下へ向かって並ぶ。
.menu-inner {
  position: absolute;
  top: calc(50% + var(--menu-shift));
  left: var(--menu-offset);
  transform: translateY(-50%);
  pointer-events: none;
  // 閉じたあと、紙が引っ込み終わってから見えなくする
  visibility: hidden;
  transition: visibility 0s .45s;
  font-family: 'BIZ UDPMincho', serif;

  h4 {
    color: var(--light-070);
    font-family: 'Azeret Mono', 'BIZ UDGothic', monospace;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.6;
    margin: 0;
    padding: 0 0 .75rem;
    border-bottom: 1px dashed var(--light-030);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: .5rem 0 0;
  }

  li {
    margin: .6rem 0;
  }

  a {
    color: var(--bg-color);
    font-size: 1.15rem;
    text-decoration: none;
    white-space: nowrap;

    &::before {
      content: "→ ";
      color: var(--light-030);
    }

    &:hover,
    &:focus-visible,
    &.active {
      text-decoration: underline;
      text-underline-offset: .3em;
    }
  }
}

// ---- 開いているとき ----
.navbar--open {
  .menu-paper {
    --peek: var(--paper-open);
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    // 開くときは、勢いよく滑り込んでふわっと止まる
    transition:
      transform .7s cubic-bezier(.16, 1, .3, 1),
      box-shadow .7s;
  }

  .menu-backdrop {
    display: block;
  }

  .menu-inner {
    pointer-events: all;
    visibility: visible;
    transition: visibility 0s;
  }

  .menu-trigger {
    transform: rotate(135deg);

    span:nth-of-type(1),
    span:nth-of-type(3) {
      width: 20px;
    }
    span:nth-of-type(1) {
      transform: translate(-1px, 13px) rotate(-45deg);
    }
    span:nth-of-type(3) {
      transform: translate(-1px, -13px) rotate(45deg);
    }
  }
}

@media screen and (max-width: 650px) {
  .navbar {
    --paper-peek: 150px;
    // スマホでは画面全体を覆う
    --paper-open: calc(100vw + 100vh);
    // 紙が画面全体を覆うため、メニューの中心が「横は画面の中央、縦は画面の52%」に
    // 来るよう、紙の辺からの距離とずらす量を画面の幅・高さから計算している
    // （左上のロゴや画面の端にかからないよう、幅360〜600pxで確認済み）
    --menu-offset: calc(33.9vh + 13.6vw);
    --menu-shift: calc(36.8vh - 35.4vw);

    .logo {
      padding: 0;
    }
    &::before {
      height: 120px;
    }
    &::after {
      z-index: -4;
    }
  }

  .menu-trigger {
    width: 32px;
    height: 28px;

    span:nth-of-type(2) {
      top: 12px;
    }
  }

  // 斜めに書くと横幅を取るため、文字の大きさを画面幅に合わせる（リンクは幅390pxで約21px）
  .menu-inner {
    font-size: min(5vw, 24px);

    h4 {
      font-size: .9em;
    }
    li {
      margin: .9em 0;
    }
    a {
      font-size: 1.1em;
    }
  }

  .navbar--open .menu-trigger {
    span:nth-of-type(1) {
      transform: translate(-1px, 5px) rotate(-45deg);
    }
    span:nth-of-type(3) {
      transform: translate(-1px, -5px) rotate(45deg);
    }
  }
}

// 動きを減らす設定の環境では、アニメーションをほぼ無くす
@media (prefers-reduced-motion: reduce) {
  .menu-paper,
  .navbar--open .menu-paper,
  .menu-trigger,
  .menu-trigger span {
    transition-duration: .01s !important;
  }
  .menu-inner {
    transition-delay: 0s !important;
  }
}
</style>
