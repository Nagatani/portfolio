<script lang="ts">
  import {url, isActive} from '@roxi/routify';
  const links = [
    ['/about-programming', 'About Programming', 'プログラミングのこと', '/images/article/fatos-bytyqi-Agx5_TLsIf4-unsplash.jpg', 'プログラミングなんもわからん'],
    ['/about-part-time-instructor', 'About Part-time Instructor', '非常勤講師のこと', '/images/article/priscilla-du-preez-Q7wGvnbuwj0-unsplash.jpg', '人にもの教えるの本当にわからん'],
    ['/about-research-and-development', 'About R&D', '研究・開発のこと', '/images/article/fabio-oyXis2kALVg-unsplash.jpg', '進捗はありません！！１']
  ]
</script>

<div class="posts">
  <h4>もう少し詳しいこと</h4>
  <div class="posts__contanier">
    {#each links as [path, name, desc, thumb, lead]}
    <a class="card" href={ $url(path) } class:active={$isActive(path)}>
      <div class="card__header">
        <img src="{ thumb }" alt="card__image" class="card__image" width="600">
      </div>
      <div class="card__body">
        <h3>{ name }</h3>
        <h4>{ desc }</h4>
        <p>{ lead }</p>
      </div>
    </a>
    {/each}
  </div>
</div>

<style lang="scss">
.posts {
  & > h4 {
    text-align: center;
  }
  &__contanier {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
    width: 1200px;
    max-width: 90%;
    margin: 0 auto;
    margin-block: 2rem;
    gap: 2rem;

    img {
      width: 100%;
      aspect-ratio: 16 / 9;
      display: block;
      object-fit: cover;
    }

    .card {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      text-decoration: none;
      box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
      border-radius: 1em;
      background: #ECE9E6;
      background: linear-gradient(to bottom, #FFFFFF, #ECE9E6);

      &:hover {
        transition: 
          transform 0.5s linear,
          box-shadow 0.5s linear;
        transform: translateY(-5px);
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.5);
        
      }

    }

    .card__body {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: .5rem;
    }

    .card__body h3,
    .card__body h4,
    .card__body p {
      font-family: 'Azeret Mono', monospace;
      font-size: 0.75rem;
      margin: 0;
      padding: 0;
      color: var(--dark-054);
    }
    .card__body h3::before {
      content: "# cat '";
      color: var(--dark-026);
    }
    .card__body h3::after {
      content: ".md'";
      color: var(--dark-026);
    }
    .card__body h4::before {
      content: "$ echo '";
      color: var(--dark-026);
    }
    .card__body h4::after {
      content: "'";
      color: var(--dark-026);
    }

    .card__footer {
      display: flex;
      padding: 1rem;
      margin-top: auto;
    }
  }
}
</style>