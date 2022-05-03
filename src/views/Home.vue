<template>
  <div class="w-full">
    <div
      class="
        w-full
        h-full
        flex
        items-center
        justify-center
        h-screen
        mb-12
        bg-fixed bg-center bg-cover
        custom-img
      "
    >
      <div
        class="
          p-6
          text-2xl text-white
          bg-purple-300 bg-opacity-50
          rounded-xl
          mr-12
          font-light
        "
      >
        BuyPizza
      </div>
      <div
        classs="flex flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2 sm:text-center"
      >
        <h3
          class="
            flex
            text-center
            lg:text-7xl
            text-white
            md:text-4xl
            mb-14
            font-poppins
            sm:text-6xl
          "
        >
          Pedidos online
        </h3>
        <div class="mt-6 text-5xl text-gray-50 md:text-light font-extralight">
          <h3>Receba em casa o melhor serviço de pizzaria</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
.custom-img {
  background-image: url("https://images.pexels.com/photos/1878346/pexels-photo-1878346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1750&w=1260");
}

.imgPizza {
  background-image: url("https://img.icons8.com/plasticine/344/pizza.png");
}
</style>