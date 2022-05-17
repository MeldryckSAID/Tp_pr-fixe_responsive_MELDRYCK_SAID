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
     
     <main>
      <div class="mx-auto mb-7 flex w-4/5 flex-col gap-7">

        <div class="flex flex-col gap-7 lg:flex-row lg:justify-between">

            <h2 class="text-center text-4xl font-bold text-indigo-900">Search properties to rent</h2>

           <div class="flex items-center">
               <input type="search" placeholder="Search with Search Bar" class=" h-12 w-full rounded-lg border-2 border-indigo-100 px-4 placeholder:text-xs "/>
               <ChevronDownIcon class="-ml-8 h-5 w-5 rounded-full bg-indigo-100 stroke-indigo-600 p-1 "/>
            </div>
            
        </div>

      </div>
     </main>
     

  
</template>

<script>
import IconLogo from "./components/icons/IconLogo.vue";
import { FilmIcon ,ChevronDownIcon, SearchIcon } from "@heroicons/vue/outline";
import menu2 from  "./components/icons/menu.vue";
export default {
  components: { IconLogo, FilmIcon, menu2,ChevronDownIcon, SearchIcon },
};
</script>