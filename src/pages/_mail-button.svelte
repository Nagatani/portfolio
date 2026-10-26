<script lang="ts">
  export let to = "hey@nagatani.me";
  export let subject = "";
  export let body = "";
  export let label = "メールで問い合わせる";

  $: href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
</script>

<p class="mail-button">
  <a {href}>{ label }</a>
  <small>{ to }</small>
</p>

<style lang="scss">
.mail-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  margin: 2rem 0;

  a {
    display: inline-block;
    padding: .75em 2em;
    border-radius: 999px;
    background: #2c3e50;
    color: var(--bg-color);
    text-decoration: none;
    font-family: 'Azeret Mono', 'BIZ UDGothic', monospace;
    box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
    transition: transform .2s, box-shadow .2s;

    &:hover {
      opacity: 1;
      transform: translateY(-2px);
      box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.3);
    }
  }

  small {
    color: var(--dark-054);
  }
}
</style>
