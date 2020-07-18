<template>
<div class="lead">
  <h3>いっそのこと、<br>猫になれたらいいのに……</h3>
  <p>「嗚呼、猫のように生きたい……」と常日頃から言っているものの、そんな理想が叶うわけもなく、なんだかんだで馬車馬のように働いています。</p>
  <p>フリーランスでプログラマ、システムエンジニア、フロントエンドエンジニア、講師など情報システムに関わる様々なお仕事や研究開発をさせてもらってます。</p>
  <p>お仕事のご依頼は、すべて受けさせていただくわけではありませんが、「おもしろそう」と感じたお仕事は積極的に受けさせて頂いております。「おもしろそう」なお仕事、または働かずしてもらえるお給金があれば、ぜひご連絡をください。お待ち致しております。</p>
  <p class="caption-name">ナガタニ　ヒデヒロ</p>
</div>
</template>

<script>
export default {
}
</script> 

<style lang="scss">
.lead {
  min-height: 100vh;
  display:flex;
  align-items: flex-start;
  justify-content:center;
  flex-direction: column;
  margin:0 auto;
  width: 100%;
  padding: calc(var(--space) * 2) var(--space);
  writing-mode: vertical-rl;
  font-family: 'Noto Serif JP', serif;
  color: var(--title-color);
  letter-spacing: 0.05em;

  h3 {
    text-align: unset;
    line-height: 1.5;
    margin: 0;
    padding-left: calc(var(--space) / 4);
  }

  p {
    
    padding: 0 .5rem;
    line-height: 1.8;
    height: 100%;
    text-align: justify;
    &::first-letter {
      padding-top: 1em;
    }
    &.caption-name {
      text-align: right;
    }
  }
}
@media screen and (max-width: 650px) {
  .lead {
    height: auto;
    writing-mode: horizontal-tb;
    padding: calc(var(--space) * 2) calc(var(--space) / 2);
    h3 {
      padding: 0;
      padding-bottom: calc(var(--space) / 4);
    }
    p {
      padding: .5rem 0;
      width: 100%;
    }
  }
}
</style>
