<template>
  <div class="post-card content-box" :class="{'post-card--has-poster' : post.poster}">
    <div class="post-card__header">
      <g-image alt="Cover image" v-if="post.cover_image" class="post-card__image" :src="post.cover_image" />
    </div>
    <div class="post-card__content">
      <h2 class="post-card__title" v-html="post.title" />
      <p class="post-card__description" v-html="post.description" />

      <PostTags class="post-card__tags" :post="post" />

      <g-link class="post-card__link" :to="post.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style lang="scss">
.post-card {
  width: calc(100% / 3 - 2rem);
  margin: 2rem auto;
  position: relative;

  &__header {
    overflow: hidden;
    width: 100%;
    border-radius: var(--radius) var(--radius) 0 0;

    &:empty {
      display: none;
    }
  }

  &__content {
    padding: calc(var(--space) / 3);
  }

  &__image {
    min-width: 100%;
  }

  &__title {
    font-family: 'Norican', cursive;
    margin-top: 0;
    margin-bottom: 0;
  }
  
  &__description {
    font-size: 0.8rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}

@media screen and (min-width: 1360px){
  .post-card {
    width: calc(100% / 3 - 24px);
  }
}
@media screen and (max-width: 1360px) {
  .post-card {
    width: calc(100% / 2 - 24px);
  }
}
@media screen and (max-width: 1024px) {
  .post-card {
    width: 100%;
  }
}
</style>
