<template>
<div class="name-card">
  <h4>
    名刺、置いておきます。
    <small>ご連絡は、メールかSNSよりどうぞ。</small>
  </h4>
  <NameCard />
</div>
</template>

<script>
import NameCard from '~/components/NameCard.vue'

export default {
  components: {
    NameCard,
  },
}
</script> 

<style lang="scss">
.name-card {
  height: 100vh;
  background: #fff;
  background-image: url("/bg.jpg");
  background-image:
      linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%),
      url("/bg.jpg");
  background-blend-mode: multiply,multiply;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  overflow: hidden;

  h4 {
    position: absolute;
    width: 100%;
    top: 2rem; left: 0;
    font-family: 'Noto Serif JP', serif;
    color: var(--bg-color);
    font-size: 1.25rem;
    text-align: center;
    line-height: 1.6;
    small {
      display: block;
      font-size: 0.75rem;
    }
  }

  .namecard {
    transform: rotate(4deg);
  }
}
</style>
