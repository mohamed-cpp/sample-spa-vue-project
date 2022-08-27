<template>
  <section
    class="text-gray-600 bg-teal-100 hover:bg-teal-200 hover:cursor-pointer mt-1 body-font"
    @click="show = !show"
  >
    <div class="container px-5 py-14 mx-auto">
      <div
        class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"
      >
        <h1
          class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900"
        >
          {{ dataRow.title }}
        </h1>
      </div>
    </div>
  </section>
  <Transition>
    <div v-show="show">
      <div v-for="(data, key) in dataRow.children" :key="key">
        <router-link
          :to="{
            name: 'questions',
            params: { father: dataRow.id, child: data.id },
          }"
        >
          <SubMainBox :id="'row-' + data.id" :dataRow="data"></SubMainBox>
        </router-link>
      </div>
    </div>
  </Transition>
</template>

<script>
import SubMainBox from "@/components/boxes/SubMainBox";

export default {
  name: "MainBox",
  props: ["dataRow"],
  data() {
    return {
      show: false,
    };
  },
  components: {
    SubMainBox,
  },
};
</script>
<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
