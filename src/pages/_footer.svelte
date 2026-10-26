<div class="footer-container">
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
  </svg>
  <footer class="footer">
    <nav class="footer__links">
      <a href="/work">お仕事のご依頼</a>
      <a href="/privacy-policy">プライバシーポリシー</a>
    </nav>
    <span class="footer__copyright">Copyright © 2011-{ new Date().getFullYear() } @Nagatani All Rights Reserved. </span>
  </footer>
</div>

<style lang="scss">
.footer-container {
  background: #2C3E50;
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 148px;
    transform: rotateY(180deg);
  }

  .shape-fill {
    fill: var(--bg-color);
  }
}


.footer {
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

  p {
    span {
      font-size: 3rem;
      display: inline-block;
      line-height: 1;
    }
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .5em 2em;
    margin-bottom: 1.5em;

    a {
      color: var(--bg-color);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__copyright {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: .75rem;
  }
}
</style>
