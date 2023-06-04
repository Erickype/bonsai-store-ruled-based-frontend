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
    <a href="/" aria-label="Go to home page"
    class="
    focus:outline-none
    focus-visible:ring-2
    ring-gray-900
    rounded-sm
    ring-offset-4
    ring-offset-secondary-400
    lg:absolute
    lg:left-1/2
    lg:-translate-x-1/2
    lg:top-9
    z-50">
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