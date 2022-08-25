<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-rio-gray border-0"
        >

          <div class="flex-auto px-4 lg:px-10 py-5 pt-8">
            <div class="text-black-400 text-center mb-3 font-bold">
              <small>اطلاعات ورود به حساب کاربری خود را وارد کنید</small>
            </div>
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  شماره تماس
                </label>
                <input
                    required
                  type="number"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  dir="ltr"
                  placeholder="0913***4444"
                />
              </div>
<!--              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-blueGray-600">
                    Remember me
                  </span>
                </label>
              </div>-->

              <div class="text-center mt-6">
                <button
                  class="bg-rio-orange text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                >
                  ورود
                </button>
              </div>
            </form>
          </div>
          <div class="flex flex-wrap my-2 relative text-center text-black">

            <div class="w-full text-center">
              <router-link to="/auth/register" class="hover:text-rio-orange text-black">
                <small >ایجاد حساب جدید</small>
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import github from "@/assets/img/github.svg";
import google from "@/assets/img/google.svg";

export default {
  data() {
    return {
      github,
      google,
    };
  },
};
</script>
