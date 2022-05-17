<template>
 <header
      class="
        sticky
        top-0
        z-40
        h-16
        w-full
        border-b border-b-indigo-100
        bg-gray-100
        px-3
      "
    >
      <div class="flex h-full w-full items-center justify-between">
        <div class="flex items-center">
         <icon-logo  />
          <span class="font-bold">Estatery</span>
        </div>
        <div class="lg:hidden">

         <menu2 class="sm:hidden"/>
         
        </div>
        <nav
          class="
            absolute
            left-0
            top-16
            w-full
            -translate-y-[200%]
            bg-slate-300
            pl-2
            lg:relative lg:top-0 lg:w-fit lg:translate-y-0 lg:bg-transparent
          "
         
        >
          <ul class="flex flex-col gap-8 py-4 font-bold lg:flex-row">
            <li>Rent</li>
            <li>Buy</li>
            <li>Sell</li>
            <li>Manage Property</li>
            <li>Ressources</li>
          </ul>
        </nav>
        <div class="menu-text gap-4">
          <button class="bouton2 mt-1 mb-1 font-bold text-[#6366F1]">
            Login
          </button>
          <button class="bouton1 mr-2 mt-1 mb-1 font-bold text-white">
            Sign Up
          </button>
        </div>
      </div>
    </header>
     
     

  
</template>

<script>
import IconLogo from "./components/icons/IconLogo.vue";
import { FilmIcon } from "@heroicons/vue/outline";
import menu2 from  "./components/menu.vue";
export default {
  components: { IconLogo, FilmIcon, menu2 },
};
</script>