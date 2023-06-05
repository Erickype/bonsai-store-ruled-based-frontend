<script lang="ts">
  import "../app.css";
  import logo from "$lib/assets/logo.svg";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  let length = data.menuItems.length;
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
    <button
      id="menu"
      class="lg:hidden
    focus:outline-none
    focus-visible:ring-2
    ring-gray-900
    rounded-sm
    ring-offset-4
    ring-offset-secondary-400
    dark:ring-offset-secondary-800
    text-gray-900 hover:text-gray-600 transition-colors
    dark:text-gray-100 dark:hover:text-gray-400
    "
    >
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
    <div
      role="menubar"
      class="
    flex flex-col
    gap-4 p-6
    absolute right-0 left-0 top-16
    bg-secondary-400
    dark:bg-secondary-800
    shadow-xl
    text-center text-lg items-center
    lg:flex lg:flex-row lg:static lg:shadow-none
    lg:justify-between lg:w-full"
    >
      {#each data.menuItems as item, i}
        {#if length - 1 == i}
          <a
            href="/"
            class="
            py-2 px-6
            focus:outline-none
            focus-visible:ring-2
            ring-gray-900
            rounded-sm
            ring-offset-4
            ring-offset-secondary-400
            dark:ring-offset-secondary-800
            shadow-xl
            hover:shadow-none
            transition-shadow
            bg-primary-400 dark:bg-primary-800
            "
          >
            {item.title}
          </a>
        {:else if length / 2 - 1 == i}
          <a
            href="/"
            class="
            py-1 px-6
            focus:outline-none
            focus-visible:ring-2
            ring-gray-900
            rounded-sm
            ring-offset-4
            ring-offset-secondary-400
            dark:ring-offset-secondary-800
            text-gray-900 hover:text-gray-600 transition-colors
            dark:text-gray-100 dark:hover:text-gray-400
            lg:mr-auto"
          >
            {item.title}
          </a>
        {:else}
          <a
            href="/"
            class="
            py-1 px-6
            focus:outline-none
            focus-visible:ring-2
            ring-gray-900
            rounded-sm
            ring-offset-4
            ring-offset-secondary-400
            dark:ring-offset-secondary-800
            text-gray-900 hover:text-gray-600 transition-colors
            dark:text-gray-100 dark:hover:text-gray-400"
          >
            {item.title}
          </a>
        {/if}
      {/each}
    </div>
  </div>
</nav>

<slot />
