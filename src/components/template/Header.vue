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
        md:w-full
      "
    >
      <div class="flex p-4 flex-col items-center justify-center md:center">
        <div
          class="lg:w-1/8 sm:w-full text-base inline-flex space-x-4 md:center"
        >
          <a
            class="
              lg:w-2/3
              md:w-1/2
              text-gray-800
              rounded
              font-bold
              px-1
              py-1
              text-lg
            "
          >
            🍕 Pizza
          </a>
          <router-link
            to="/menu"
            class="
              rounded-sm
              px-2
              py-2
              font-bold
              text-gray-800
              inline-flex
              sm:centerg
              md:center
              justify-end
              cursor-pointer
              border-b border-transparent
              hover:bg-red-600 hover:text-gray-50 hover:font-medium
              sm:text-sm
              md:text-sm
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-110
              text-lg
            "
          >
            Menu
          </router-link>
          <router-link
            to="/"
            class="
              rounded-sm
              text-gray-800
              px-2
              py-2
              font-bold
              sm:center
              md:center
              inline-flex
              justify-end
              hover:bg-red-600 hover:text-gray-50 hover:font-medium
              cursor-pointer
              border-b border-transparent
              sm:text-sm
              md:text-sm
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-110
              text-lg
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
export default {};
</script>