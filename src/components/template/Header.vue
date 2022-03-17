<template>
  <div class="w-full">
    <nav class="bg-white shadow-lg">
      <div
        class="
          md:flex
          items-center
          justify-between
          py-2
          px-8
          md:px-12
          sm:flex sm:px-4
        "
      >
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold text-gray-800 md:text-3xl">
            <a>🍕 Pizza</a>
          </div>
        </div>
        <div
          class="flex-row mx-auto flex p-4 flex-col md:flex-row items-center"
        >
          <router-link
            to="/"
            class="
              text-gray-800
              rounded
              hover:bg-red-600 hover:text-gray-50 hover:font-medium
              py-2
              px-2
              md:mx-1
            "
            >Home</router-link
          >
          <router-link
            to="/menu"
            class="
              text-gray-800
              rounded
              hover:bg-red-600 hover:text-gray-50 hover:font-medium
              py-2
              px-2
              md:mx-1
            "
            >Menu</router-link
          >
          <router-link
            to="/menu"
            class="
              text-gray-800
              rounded
              hover:bg-red-600 hover:text-gray-50 hover:font-medium
              py-2
              px-2
              md:mx-1
            "
            >Contato</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>