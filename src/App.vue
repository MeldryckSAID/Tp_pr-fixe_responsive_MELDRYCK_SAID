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

         <div class="flex items-center lg:hidden">
          <input type="search" placeholder="Search Location" class=" h-16  w-full  rounded-lg border-2 border-indigo-100 px-4 placeholder:text-xs "/>

          <SearchIcon class=" -ml-12  h-10 w-10 rounded-sm bg-indigo-600 stroke-indigo-100 p-1"/>
        </div>

      </div>

       <div class=" hidden h-24 w-full  items-center  gap-4  rounded-lg  border-2 border-indigo-100  px-4 font-inter lg:flex" >
          
          <div class="w-1/2 min-w-max border-r-2 border-gray-300 px-4">
            <span class="text-base text-gray-900">Location</span>
            <p class="text-lg font-bold">New York, USA</p>
          </div>
         
         <div class="w-1/2 min-w-max border-r-2 border-gray-300 px-4">
            <span class="text-base text-gray-900">When</span>
            <p class="text-lg font-bold">Select Move-in Date</p>
          </div>
         
         <div class="w-1/2 min-w-max border-r-2 border-gray-300 px-4 pr-10">
            <span class="text-base text-gray-900">Price</span>
            <p class="text-lg font-bold">$500-$2,500</p>
          </div>

       </div>  

       
          <div class="flex w-1/2 items-center justify-center">
            <p class="rounded-sm bg-indigo-600 px-6  py-3 text-center text-indigo-100 "  >
              Search
            </p>
      
        
      <div class=" mx-auto  grid  w-4/5  grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-7">

        <Cards :price="2500" :favori="true" :image="'src/img/house2.png'" />
        <Cards
          :price="2850"
          :adresse="'2820 Lake Sevilla, Palm Harbor, TX'"
          :image="'src/img/house3.jpg'"
        />
        <Cards
          :price="4500"
          :favori="true"
          :adresse="'2820 Lake Sevilla, Palm Harbor, TX'"
          :image="'src/img/house.png'"
        />
        <Cards
          :price="2850"
          :adresse="'2820 Lake Sevilla, Palm Harbor, TX'"
          :image="'src/img/house4.jpg'"
        />
        <Cards
          :price="2850"
          :adresse="'2820 Perdu dans la nature'"
          :image="'src/img/house5.jpg'"
        />
        <Cards :price="2500" :favori="true" :image="'src/img/house2.png'" />
        <Cards
          :price="2850"
          :adresse="'2820 Lake Sevilla, Palm Harbor, TX'"
          :image="'src/img/house3.jpg'"
        />
        <Cards
          :price="4500"
          :favori="true"
          :adresse="'2820 Lake Sevilla, Palm Harbor, TX'"
          :image="'src/img/house.png'"
        />
        <Cards
          :price="2850"
          :adresse="'2820 Lake Sevilla, Palm Harbor, TX'"
          :image="'src/img/house4.jpg'"
        />
        <Cards
          :price="2850"
          :adresse="'2820 Lake Sevilla, Perl Harbor, TX'"
          :image="'src/img/house5.jpg'"
        />
      
      </div>
          </div>
     </main>
     

  
</template>

<style >
.bouton1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  background: #6366f1;
  border-radius: 8px;
}
.bouton2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 22px;
  border: 2px solid #c7d2fe;
  border-radius: 8px;
}

@media screen and (min-width: 1024px) {
  .menu {
    display: none;
  }
  .menu-text {
    display: flex;
  }
}
</style>

<script>


import IconLogo from "./components/icons/IconLogo.vue";
import { FilmIcon ,ChevronDownIcon, SearchIcon } from "@heroicons/vue/outline";
import menu2 from  "./components/icons/menu.vue";
import cards from"./components/cards.vue";


export default {
  components: { IconLogo, FilmIcon, menu2,ChevronDownIcon, SearchIcon,cards },
};
</script>