<template>
  <div class="flex items-center justify-between w-full">
    <header
      class="
        items-center
        flex-wrap
        md:p-4
        lg:p-4
        w-full
        text-gray-100
        bg-white
        font-mono
        shadow-lg
        sm:text-sm
      "
    >
      <div class="container mx-auto flex p-4 flex-col md:flex-row items-center">
        <div
          class="
            flex
            lg:w-2/8
            sm:w-full
            flex-wrap
            items-center
            text-base
            md:ml-auto
            inline-flex
            space-x-2
          "
        >
          <a
            class="
              lg:w-2/3
              cursor-pointer
              border-b border-transparent
              hover:bg-red-600 hover:text-gray-50 hover:font-medium
              text-gray-800
              rounded
              font-bold
              px-1
              py-1
            "
          >
            🍕 Pizza
          </a>
          <router-link
            to="/menu"
            class="
              rounded
              px-1
              py-1
              font-bold
              text-gray-800
              inline-flex
              sm:center
              justify-end
              cursor-pointer
              border-b border-transparent
              hover:bg-red-600 hover:text-gray-50 hover:font-medium
              sm:text-sm
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-110
            "
          >
            Menu
          </router-link>
          <router-link
            to="/"
            class="
              rounded
              text-gray-800
              px-1
              py-1
              font-bold
              sm:center
              inline-flex
              justify-end
              hover:bg-red-600 hover:text-gray-50 hover:font-medium
              cursor-pointer
              border-b border-transparent
              sm:text-sm
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-110
            "
          >
            Sobre
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>