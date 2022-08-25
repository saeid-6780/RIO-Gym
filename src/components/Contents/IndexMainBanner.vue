<template>
  <section
      class="header relative pt-16 items-center flex h-screen max-h-860-px"
  >
    <div class="container mx-auto items-center flex flex-wrap">
      <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
        <div class="pt-32 sm:pt-0">
          <h2 class="font-semibold text-4xl text-blueGray-600">
            شعار ما شعار ما... شهادت افتخار ما
          </h2>
          <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
            محتوای زیر بنر اصلی سایت، محتوای زیر بنر اصلی سایت،محتوای زیر بنر اصلی سایت،محتوای زیر بنر اصلی سایت،محتوای زیر بنر اصلی سایت،محتوای زیر بنر اصلی سایت،محتوای زیر بنر اصلی سایت.
          </p>
          <div class="mt-12">
            <router-link
                to="/auth/register"
                class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-rio-orange active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
              ثبت نام کنید
            </router-link>
            <router-linka
                to="/"
                class="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-rio-lorange active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"

            >
              درباره ما
            </router-linka>
          </div>
        </div>
      </div>
    </div>

    <img
        class="absolute top-0 b-auto left-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-full max-h-860-px"
        :src="patternVue"
        alt="..."
    />
  </section>
</template>

<script>
import patternVue from "@/assets/img/home-symbol-banner.png";
export default {
  name: "IndexMainBanner",
  data() {
    return {
      patternVue,
    }
  }
}
</script>

<style scoped>

</style>