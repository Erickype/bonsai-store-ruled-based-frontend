<script>
    import "../app.css";
    import logo from "$lib/assets/logo.svg"
  </script>
  
<nav 
class="
mx-auto 
p-4 
bg-secondary-400">
  <div class="container
  mx-auto
  flex
  items-center
  justify-between">
    <a href="/" aria-label="Go to home page">
      <img src={logo} 
      width="200"
      alt="Uptime logo"
      class="w-10
      md:w-15
      lg:w-18">
    </a>
  </div>
</nav>

  <slot />