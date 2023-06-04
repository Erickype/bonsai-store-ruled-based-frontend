<script lang="ts">
  import "../app.css";
  import logo from "$lib/assets/logo.svg";
  import type { LayoutData } from './$types';

    export let data: LayoutData;
</script>

<nav
  class="
mx-auto
p-4
bg-secondary-400
dark:bg-secondary-800"
>
  <div
    class="container
  mx-auto
  flex
  items-center
  justify-between"
  >
    <a
      href="/"
      aria-label="Go to home page"
      class="
    focus:outline-none
    focus-visible:ring-2
    ring-gray-900
    rounded-sm
    ring-offset-4
    ring-offset-secondary-400
    dark:ring-offset-secondary-800
    lg:absolute
    lg:left-1/2
    lg:-translate-x-1/2
    lg:top-9
    z-50
    hover:opacity-75
    transition-opacity"
    >
      <img
        src={logo}
        width="200"
        alt="Uptime logo"
        class="w-10
    md:w-15
    lg:w-18"
      />
    </a>
    <button id="menu" 
    class="lg:hidden
    focus:outline-none
    focus-visible:ring-2
    ring-gray-900
    rounded-sm
    ring-offset-4
    ring-offset-secondary-400
    dark:ring-offset-secondary-800
    hover:opacity-75
    transition-opacity
    ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
    </button>
    <div role="menubar" class="
    flex flex-col
    gap-4 p-6
    absolute right-0 left-0 top-16
    bg-secondary-400
    dark:bg-secondary-800
    shadow-2xl
    text-center text-lg">
      {#each data.menuItems as item}
        <a href="/">{item.title}</a>
      {/each}
    </div>
  </div>
</nav>

<slot />
