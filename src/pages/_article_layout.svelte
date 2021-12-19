<script lang="ts">
  export let title;
  export let description;
  export let cover_image;

  $: document.title = title + " - " + document.title;

  import NameCard from "./_namecard.svelte";
  import Footer from "./_footer.svelte";
</script>


<div class="post-card content-box">

  <div class="post-card__header">
    <div class="post-title">
      <h1 class="post-title__text">{ title }</h1>
      <h2>{ description }</h2>
    </div>
    <img alt="Cover_image" class="post-card__image" src="{ cover_image }" />
  </div>

  <div class="post-card__content">
    <slot />
  </div>
</div>
<NameCard />
<Footer />

<style>

.post-card {
  width: 100%;
  max-width: var(--content-width);
  margin: 8rem auto 2rem;
  position: relative;
}

.post-card__header {
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: var(--radius) var(--radius) 0 0;
  aspect-ratio: 16 / 9;
}
.post-card__header img {
  filter: blur(2px) brightness(1.04);
}
.post-card__header:empty {
  display: none;
}

.post-title {
  font-family: 'Azeret Mono', monospace;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  padding: calc(var(--space) / 3);
  padding-top: 40px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.75) 10%);
}
.post-title h1,
.post-title h2 {
  margin: 0;
  font-size: 1rem;
}
.post-title h1::before {
  content: "# cat '";
  color: #555;
}
.post-title h1::after {
  content: ".md'";
  color: #555;
}
.post-title h2::before {
  content: "$ echo '";
  color: #555;
}
.post-title h2::after {
  content: "'";
  color: #555;
}

.post-card__content {
  padding: calc(var(--space) / 3);
}

.post-card__image {
  min-width: 100%;
}

@media screen and (max-width: 1024px) {
  .post-card {
    width: 100%;
    margin: 0;
  }

  .post-card__header {
    aspect-ratio: 4 / 3;
  }
}

</style>
