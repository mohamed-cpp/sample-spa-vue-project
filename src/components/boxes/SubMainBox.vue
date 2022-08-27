<template>
  <section
    class="text-gray-600 bg-teal-600 hover:bg-teal-700 hover:cursor-pointer mb-2 body-font"
  >
    <div class="container px-2 py-15 mx-auto">
      <div
        class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"
      >
        <h1
          class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white"
        >
          {{ dataRow.title }}
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SubMainBox",
  props: ["dataRow"],
};
</script>
