<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow bg-rio-green"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <a
            class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white "
            href=""
          >
            RYO GYM
          </a>
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="fas fa-bars text-white"></i>
        </button>
      </div>
      <div
        class="lg:flex items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >

        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <IndexMenuDD />
          </li>
          <li class="flex items-center">
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href=""
              target="_blank"
            >
              <span class="lg:hidden inline-block ml-2 text-white">اینستاگرام</span>
              <i class="hover:text-rio-lorange text-white fab fa-instagram text-lg leading-lg" />
            </a>
          </li>

          <li class="flex items-center">
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href=""
              target="_blank"
            >
              <span class="lg:hidden inline-block ml-2 text-white">لینکداین</span>
              <i class="hover:text-rio-lorange text-white fab fa-linkedin text-lg leading-lg" />

            </a>
          </li>



          <li class="flex items-center">
            <button
              class="bg-rio-lgreen text-white active:bg-rio-lgreen-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150 font-IRANSansX"
              type="button"
            >
              <i class="fas fa-arrow-alt-circle-down "></i> مطالعه راهنما
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import IndexMenuDD from "@/components/Dropdowns/IndexMenuDD.vue";

export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    IndexMenuDD,
  },
};
</script>