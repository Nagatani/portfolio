<template>
  <div id="app">
    <Navbar />

    <main class="main">
      <slot/>
    </main>

    <div class="footer-container">
      <footer class="footer">
        <!--<p><Lottie class="login-lottie" :options="footerLottie" :height="300" :width="300" :animCreated="handleAnimation" /></p>-->
        <span class="footer__copyright">Copyright © 2012-{{ new Date().getFullYear() }} @Nagatani All Rights Reserved. </span>
      </footer>
    </div>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
    siteOgImage
  }
}
</static-query>

<script>
import Navbar from '~/components/Navbar.vue'
import Logo from '~/components/Logo.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Navbar,
    Logo,
  },
  metaInfo() {
    return {
      link: [
        {
          key: `canonical`,
          rel: `canonical`,
          href: this.$static.metadata.siteUrl
        },
      ],
      meta: [
        { key: `og:type`, property: `og:type`, content: `website` },
        { key: `og:locale`, property: `og:locale`, content: `ja_JP` },
        {
          property: 'og:title',
          content: this.$static.metadata.siteName + ' - Hello, World!!',
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: this.$static.metadata.siteUrl,
        },
        {
          key: `og:site_name`,
          property: `og:site_name`,
          content: this.$static.metadata.siteName,
        },
        {
          key: `og:image`,
          property: `og:image`,
          content:  this.$static.metadata.siteOgImage,
        },
        {
          name: 'twitter:site',
          content: this.$static.metadata.siteName,
        },
        {
          name: 'twitter:creator',
          content: this.$static.metadata.siteName,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        }
      ]
    }
  },
}
</script>

<style lang="scss">

.footer-container {
  position: relative;
  margin-top: 80px;
  background: #2C3E50;
  &::after {
    content: '';
    border-top-left-radius: 50% 80%;
    border-top-right-radius: 50% 80%;
    position: absolute;
    top: -15%;
    width: 100%;
    background: #2C3E50;
    height: 15%;
  }
}

.footer {
  background: #2C3E50;
  color: var(--bg-color);
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }

  p {
    span {
      font-size: 3rem;
      display: inline-block;
      line-height: 1;
    }
  }

  &__copyright {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: .75rem;
  }
}
</style>
