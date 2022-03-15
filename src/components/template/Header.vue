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
        bg-gray-900
        font-mono
        shadow
        sm:text-sm
      "
    >
      <div class="container mx-auto flex p-4 flex-col md:flex-row items-center">
        <div
          class="
            flex
            lg:w-full
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
              lg:flex-auto
              cursor-pointer
              border-b border-transparent
              text-normal
            "
          >
            Pizza
          </a>
          <a
            class="
              inline-flex
              sm:center
              justify-end
              hover:text-purple-300
              cursor-pointer
              border-b border-transparent
              hover:border-indigno-600
              sm:text-sm
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-110
              ml-8
            "
          >
            Home
          </a>
          <a
            class="
              sm:center
              inline-flex
              justify-end
              hover:text-purple-300
              cursor-pointer
              border-b border-transparent
              hover:border-indigno-600
              sm:text-sm
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-110
            "
          >
            Menu
          </a>
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

<style>
</style>