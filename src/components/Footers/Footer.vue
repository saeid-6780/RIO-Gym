<template>
  <footer class="relative bg-rio-gray pt-8 pb-6">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
      style="transform: translateZ(0);"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-rio-gray fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-center lg:text-right">

        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">

            <div class="w-full lg:w-8/12 px-4">
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
              >
                معرفی ریو
              </span>
              <ul class="list-unstyled">
                <li>
                  <p
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://github.com/creativetimofficial/vue-notus/blob/main/LICENSE.md?ref=vn-footer"
                  >
                    توضیحاتی در حد چند خط برای فوتر، توضیحاتی در حد چند خط برای فوتر، توضیحاتی در حد چند خط برای فوتر، توضیحاتی در حد چند خط برای فوتر،
                  </p>
                </li>

              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                  class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
              >
                لینک های مرتبط
              </span>
              <ul class="list-unstyled">
                <li>
                  <router-link
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      to=""
                  >
                    درباره ما
                  </router-link>
                </li>
                <li>
                  <router-link
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      to="/auth/register"
                  >
                    ثبت نام
                  </router-link>
                </li>
                <li>
                  <router-link
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      to="/auth/login"
                  >
                    ورود
                  </router-link>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold">ما را در شبکه های اجتماعی دنبال کنید!</h4>
          <div class="mt-6 lg:mb-0 mb-6">
            <button
                class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
            >
              <i class="fab fa-instagram"></i>
            </button>
            <button
                class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
            >
              <i class="fab fa-linkedin"></i>
            </button>

          </div>
        </div>
      </div>
      <hr class="my-6 border-blueGray-300" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            کپی رایت © {{ date }}
            <a
              href="https://www.creative-tim.com?ref=vn-footer"
              class="text-blueGray-500 hover:text-blueGray-800"
            >

            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
