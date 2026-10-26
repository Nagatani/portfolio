<div class="namecard">
  <section class="namecard__info">
    <div>
      <p class="namecard__intro">猫になって静かに暮らしたいプログラマ</p>
      <h2>Hidehiro Nagatani</h2>
    </div>

    <div class="namecard__links">
      <ul>
        <li><a href="mailto:hey@nagatani.me">
          <span class="ti ti-mail">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="3" y="5" width="18" height="14" rx="2"></rect>
              <polyline points="3 7 12 13 21 7"></polyline>
            </svg>
          </span> hey@nagatani.me</a>
        </li>
        <li><a href="https://x.com/Nagatani">
          <span class="ti ti-brand-x">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
            </svg>
          </span> @Nagatani</a>
        </li>
        <li><a href="https://github.com/Nagatani">
          <span class="ti ti-brand-github">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
          </span> @Nagatani</a>
        </li>
      </ul>
    </div>

    <div class="namecard__snsicons">
      <a href="https://x.com/Nagatani"><img alt="X icon" class="namecard__snsicon_tw" src="/images/tw_prof.webp" width="200" height="200" loading="lazy" decoding="async" /></a>
      <a href="https://github.com/Nagatani"><img alt="github icon" class="namecard__snsicon_gh" src="/images/gh_prof.webp" width="200" height="200" loading="lazy" decoding="async" /></a>
    </div>

  </section>
  <div class="namecard__image-container">
    <img alt="namecard_image" class="namecard__image" src="/images/author.webp" width="300" height="300" loading="lazy" decoding="async" />
  </div>
</div>


<style lang="scss">
.namecard {	
	margin: var(--space) auto;
	position: relative;
	width: 640px;
	max-width: 95vw;
	overflow: hidden;
  aspect-ratio: 91 / 55;

	border: 1px solid var(--dark-012);
	background: var(--bg-color);

	border-radius: 8px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  
	display: flex;
	justify-content: flex-start;
	
	&__image-container {
		position: relative;
		width: 40%;
	}
	&__image {
		position: relative;
		height: 100%;
		object-fit: cover;
		object-position: 20% 50%;
		line-height: 0;
		display: block;
	}

	&__info {
		width: 60%;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;

		color: var(--body-color);
		h2 {
    	text-shadow: -1px 1px 0 rgba(255, 255, 255, 1);
			color: var(--body-color);
			font-size: 1.5rem;
			margin: 0;
			line-height: 1.5;
		}
	}
	
	&__intro {
		font-size: .7rem;
		margin: 0;
	}


	&__links {
		position: absolute;
		bottom: 1rem;
		margin: 0;
		padding-top: 1rem;
		font-size: .8rem;
    text-shadow: -1px 1px 0 rgba(255, 255, 255, 1);
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			li {
				margin: 0;
				line-height: 1.8;
				a {
					color: var(--body-color);
  				font-family: 'Azeret Mono', 'BIZ UDGothic', monospace;
					transition: all .3s;
					text-decoration: none;
					&:hover {
						color: #2c3e50;
						text-decoration: underline;
					}
					span {
						position: relative;
						top: 6px;
					}
				}
			}
		}
	}
	&__snsicons {
		position: absolute;
		bottom: calc(1rem - 8px);
		right: 1rem;
		text-align: right;
		margin: 0;
		padding: 0;
		img {
			box-sizing: content-box;
			line-height: 1;
			width: 40px;
			height: 40px;
			border-radius: 100%;
			padding: 0 4px;
		}
	}
}

@media screen and (max-width: 800px) {
	.namecard {
		&__info {
			padding: .5rem;
			justify-content: flex-start;
			h2 {
				font-size: 1rem;
			}
		}
		&__links {
			bottom: .5rem;
			font-size: 0.5rem;
			svg {
				width: 20px;
				height: 20px;
			}
		}
		&__snsicons {
			display: none;
		}
	}
}
</style>
