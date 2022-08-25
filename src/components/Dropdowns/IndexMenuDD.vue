<template>
  <div dir="rtl">
    <a
      class="hover:text-rio-lorange text-white px-3 py-2 flex items-center text-xs uppercase font-bold"
      href=""
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      حساب کاربری
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-right py-2 list-none text-right rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >


      <router-link
        to="/auth/login"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Login
      </router-link>
      <router-link
        to="/auth/register"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Register
      </router-link>

    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};
</script>
