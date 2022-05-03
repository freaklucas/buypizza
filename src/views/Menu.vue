<template>
  <div
    class="heading text-center font-poppins text-2xl m-5 text-gray-900 mb-10"
  >
    Selecione o sabor favorito!
  </div>
  <div
    class="
      holder
      mx-auto
      w-10/12
      grid
      sm:grid-cols-1
      md:grid-cols-2
      lg:grid-cols-2
    "
  >
    <div
      class="
        each
        mb-10
        m-2
        shadow-lg
        border-gray-800
        bg-gray-100
        relative
        transition
        duration-500
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-110
      "
    >
      <img
        class="w-full"
        src="https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?k=20&m=1192094401&s=612x612&w=0&h=jesvXuPyvqM36GQ5QEvJrL3QZjK6YKsziUUF3ZbW0gw="
        alt=""
      />
      <div
        class="
          info-box
          text-md
          font-poppins
          flex
          p-1
          font-semibold
          text-gray-500
          ml-2
        "
      >
        Calabresa
      </div>
      <div>
        <button
          class="
            mt-2
            mb-2
            ml-2
            mr-2
            bg-gray-700
            hover:bg-gray-800
            text-white
            font-bold
            py-1
            px-2
            rounded
            justify-center
          "
          @click="clickIncrement()"
        >
          +
        </button>
        {{ counterState.count }}

        <button
          class="
            mt-2
            mb-2
            ml-2
            bg-gray-700
            hover:bg-gray-800
            text-white
            font-bold
            py-1
            px-2
            rounded
          "
          @click="clickDecrement()"
        >
          -
        </button>
        <p class="bg-gray-100 circle-lg flex ml-2">$55</p>
      </div>
    </div>
    <div
      class="
        each
        mb-10
        m-2
        shadow-lg
        border-gray-800
        bg-gray-100
        relative
        transition
        duration-500
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-110
      "
    >
      <img
        class="w-full"
        src="https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?k=20&m=1192094401&s=612x612&w=0&h=jesvXuPyvqM36GQ5QEvJrL3QZjK6YKsziUUF3ZbW0gw="
        alt=""
      />
      <div
        class="
          info-box
          text-md
          font-poppins
          flex
          p-1
          font-semibold
          text-gray-500
          ml-2
        "
      >
        Calabresa Especial
      </div>
      <div>
        <button
          class="
            mt-2
            mb-2
            ml-2
            mr-2
            bg-gray-700
            hover:bg-gray-800
            text-white
            font-bold
            py-1
            px-2
            rounded
            justify-center
          "
          @click="clickIncrementEspecial()"
        >
          +
        </button>
        {{ counterState.countEspecial }}
        <button
          class="
            mt-2
            mb-2
            ml-2
            bg-gray-700
            hover:bg-gray-800
            text-white
            font-bold
            py-1
            px-2
            rounded
          "
          @click="clickDecrement()"
        >
          -
        </button>
        <p class="bg-gray-100 circle-lg flex ml-2">$60</p>
      </div>
    </div>
  </div>

  <div
    class="
      holder
      mx-auto
      w-10/12
      grid
      sm:grid-cols-1
      md:grid-cols-3
      lg:grid-cols-1
      shadow-2xl
    "
  >
    <h1
      class="
        flex
        justify-center
        mb-8
        mt-8
        rounded-lg
        text-2xl
        font-poppins
        text-gray-900
      "
      v-if="counterState.count === 0 && counterState.countEspecial === 0"
    >
      🛒 Carrinho vazio!!!
    </h1>
    <hr />

    <div v-if="counterState.count >= 1 || counterState.countEspecial >= 1">
      <h2
        class="
          info-box
          text-md
          font-poppins
          flex
          justify-center
          p-1
          font-semibold
          text-gray-500
          ml-2
        "
      >
        Calabresa | Calabresa Especial
      </h2>
      <p class="flex justify-center">
        Total: {{ counterState.count * 55 + counterState.countEspecial * 60 }}
      </p>
      <div class="flex justify-center mb-12 mt-4 mb-12">
        <button
          class="
            bg-green-600
            px-2
            py-2
            hover:bg-green-700
            rounded
            mr-2
            font-poppins
          "
          @click="submitPizza"
        >
          Finalizar
        </button>
        <button
          class="bg-red-600 px-2 py-2 hover:bg-red-700 rounded font-poppins"
          @click="resetPizza"
        >
          Cancelar
        </button>
      </div>
      <div
        v-show="active && counterState.count >= 1"
        class="
          flex
          justify-center
          mb-12
          mt-4
          font-poppins
          text-xl text-gray-900
        "
      >
        😁 Espero que goste da nossa pizza!
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: function () {
    return {
      active: false,
    };
  },
  methods: {
    clickIncrement() {
      this.$store.dispatch("counterModule/incrementCounter");
    },
    clickDecrement() {
      this.$store.dispatch("counterModule/decrementCounter");
    },
    clickDecrementEspecial() {
      this.$store.dispatch("counterModule/decrementCounterEspecial");
    },
    clickIncrementEspecial() {
      this.$store.dispatch("counterModule/incrementCounterEspecial");
    },
    clickIncrementBy(value) {
      this.$store.dispatch("counterModule/incrementCounterBy", {
        value: value,
      });
    },
    submitPizza() {
      setTimeout(() => {
        this.active = !this.active;
      }, 3000);
    },
    resetPizza() {
      this.$store.dispatch("counterModule/resetCounter");
    },
  },
  computed: mapGetters({
    counterState: "getCounterState",
  }),
};
</script>