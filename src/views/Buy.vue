<template>
  <div class="flex justify-center flex-col">
    <h2
      class="
        center
        text-center text-4xl
        font-semibold
        dark:text-gray-400
        mb-8
        mt-8
        hover:text- hover:text-red-300
        cursor-pointer
        hover:border-red-600
      "
    >
      Pagamento...
    </h2>

    <h2
      class="
        info-box
        text-2xl
        font-poppins
        flex
        justify-center
        p-1
        font-light
        text-gray-500
        ml-2
        mb-8
        mt-8
      "
    >
      Calabresa | Calabresa Especial
    </h2>
    <p class="flex justify-center text-red-400 text-xl font-semibold mt-8 mb-8">
      Total: {{ counterState.count * 55 + counterState.countEspecial * 60 }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    counterState: "getCounterState",
  }),
};
</script>
