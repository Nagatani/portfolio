<template>
<div class="top-hero">
  <div class="top-hero__brand">
    猫のように生きたい
  </div>
  <div class="scroll-down-container">
    <div class="chevron"></div>
    <div class="chevron"></div>
    <div class="chevron"></div>
  </div>
</div>
</template>

<script>
export default {
}
</script> 

<style lang="scss">
.top-hero {
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin:0;
  background:#181D26;
  background-image: url("/tome.jpg");
  background-image:
    linear-gradient(to top, hsla(177, 66%, 79%, 0.3) 0%, hsla(341, 95%, 92%, 0.3) 100%),
    url("/tome.jpg");
  background-size: cover;
  background-position-x: 40%;
  background-position-y: 75%;
  background-repeat: no-repeat;
  background-attachment: fixed;

  &__brand {
    flex: 1;
    padding-top: 100px;
    text-align: center;
    font-family: 'Noto Serif JP', serif;
    color: var(--bg-color);
    font-size: 2.8rem;
    writing-mode: vertical-rl;
    letter-spacing: 0.05em;

  }

  .scroll-down-container {
    height: 100px;
    width: 28px;
    position: relative;
    .chevron {
      position: absolute;
      width: 28px;
      height: 8px;
      opacity: 0;
      transform: scale3d(0.5, 0.5, 0.5);
      animation: move 3s ease-out infinite;
    }

    .chevron:first-child {
      animation: move 3s ease-out 1s infinite;
    }

    .chevron:nth-child(2) {
      animation: move 3s ease-out 2s infinite;
    }

    .chevron:before,
    .chevron:after {
      content: ' ';
      position: absolute;
      top: 0;
      height: 100%;
      width: 51%;
      background: #fff;
    }

    .chevron:before {
      left: 0;
      transform: skew(0deg, 30deg);
    }

    .chevron:after {
      right: 0;
      width: 50%;
      transform: skew(0deg, -30deg);
    }

    @keyframes move {
      25% {
        opacity: 1;

      }
      33% {
        opacity: 1;
        transform: translateY(30px);
      }
      67% {
        opacity: 1;
        transform: translateY(40px);
      }
      100% {
        opacity: 0;
        transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
      }
    }
  }
}
</style>
