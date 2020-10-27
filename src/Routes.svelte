<script type="ts">
  // dependencies
  import { Router, Link, Route } from 'svelte-routing';

  // pages
  import Main from './pages/Main.svelte';
  import Login from './pages/Login.svelte';

</script>

<Router>
  <nav>
    <Link to="/">Login</Link>
    <Link to="/main">Main</Link>
  </nav>
  <Route path="/"><Login /></Route>
  <Route path="/main"><Main /></Route>
</Router>
