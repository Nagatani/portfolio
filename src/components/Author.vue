<template>
	<div class="author">
		<section class="author__info">
			<div>
				<p class="author__intro">猫になって静かに暮らしたいプログラマ</p>
				<h2>Hidehiro Nagatani</h2>
			</div>

			<p class="author__links">
				<ul>
					<li><a href="mailto:hey@nagatani.me"><span class="ti ti-mail"></span> hey@nagatani.me</a></li>
					<li><a href="//twitter.com/Nagatani"><span class="ti ti-brand-twitter"></span> @Nagatani</a></li>
					<li><a href="//github.com/Nagatani"><span class="ti ti-brand-github"></span> @Nagatani</a></li>
				</ul>
			</p>

			<p class="author__snsicons">
				<a href="//twitter.com/Nagatani"><g-image alt="twitter icon" class="author__snsicon_tw" src="~/assets/images/tw_prof.jpg" width="200" height="200" blur="5" /></a>
				<a href="//github.com/Nagatani"><g-image alt="github icon" class="author__snsicon_gh" src="~/assets/images/gh_prof.jpg" width="200" height="200" blur="5" /></a>
			</p>
		</section>
		<div class="author__image-container">
			<g-image alt="Author image" class="author__image" src="~/assets/images/author.jpg" width="300" height="300" blur="5" />
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.author {
	
	margin: var(--space) auto;
	position: relative;
	overflow: hidden;

	border: 1px solid var(--dark-012);
	background: var(--bg-color);
	border-radius: 8px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  
	display: flex;
	justify-content: flex-start;
	
	&__image-container {
		position: relative;
		order: 1;
		padding: 1rem;
		padding-right: 0;
	}
	&__image {
		position: relative;
		border-radius: 100%;
		width: 10rem;
	}

	&__info {
		order: 2;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;

		color: var(--body-color);
		h2, h3 {
    	text-shadow: -1px 1px 0 rgba(255, 255, 255, 1);
    	font-family: 'Noto Serif JP', serif;
			color: var(--body-color);
			font-size: 1.5rem;
			margin: 0;
			line-height: 1.5;
		}
		h3 {
			font-size: 1rem;
		}
	}
	
	&__intro {
    font-family: 'Noto Serif JP', serif;
		font-size: .7rem;
		margin: 0;
	}


	&__links {
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
					transition: all .3s;
					text-decoration: none;
					&:hover {
						color: #2c3e50;
						text-decoration: underline;
					}
					span {
						position: relative;
						top: 3px;
					}
				}
			}
		}
	}

	&__snsicons {
		text-align: right;
		margin: 0;
		padding: 0;
		line-height: 0;
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
</style>
