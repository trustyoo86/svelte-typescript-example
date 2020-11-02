<script type="ts">
</script>

<header id="header">
  <!-- 로고 -->
  <h1 class="logo">
    <a href="/">Logo</a>
  </h1>
  <!-- 주메뉴 -->
  <ul id="navigation">
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/">test</a>
    </li>
  </ul>
</header>

<style lang="scss">
  #header {
    position: relative;
    margin: 0 auto;
    width: 500px;
    height: 100px;
    background: #c6c6c6;

    .logo {
      position: absolute;
      top: 35px;
      left: 45px;
    }

    #navigation {
      li {
        &:first-child {
          margin-left: 120px;
        }
        display: inline;
        padding: 0 3px 0 8px;
      }
    }
  }

</style>
