<template>
  <div>
<!--    <navbar />-->
    <main>
      <section class="relative w-full h-full py-40 min-h-screen font-IRANSansX" dir="rtl">
        <div
          class="absolute top-0 w-full h-full bg-blueGray-800 bg-repeat bg-auto"
          :style="`background-image: url('${registerBg2}');`"
        ></div>
        <router-view />
<!--        <footer-small absolute />-->
      </section>
    </main>
  </div>
</template>
<script>

import registerBg2 from "@/assets/img/auth-bg.jpg";

export default {
  data() {
    return {
      registerBg2,
    };
  },
  components: {

  },
};
</script>
