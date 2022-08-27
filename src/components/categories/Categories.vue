<template>
  <div>
    <section
      class="text-gray-600 bg-teal-600 hover:bg-teal-700 hover:cursor-pointer mt-2 body-font"
      @click="show = !show"
      dir="rtl"
    >
      <div class="container px-2 py-16 mx-auto">
        <div
          class="lg flex flex-col sm:flex-row sm:items-center items-start mx-auto"
        >
          <h2
            class="flex-grow sm:pr-10 text-xl font-medium title-font text-white"
          >
            المجال: {{ dataRow.category }}
          </h2>
          <h2
            class="flex-grow sm:pr-10 text-xl font-medium title-font text-white"
          >
            عداد المجالات: {{ dataRow.category_number }}
          </h2>
          <h2
            class="flex-grow sm:pr-10 text-xl font-medium title-font text-white"
          >
            مهارات متاحة: {{ dataRow.available_skills }}
          </h2>
          <h2
            class="flex-grow sm:pr-10 text-xl font-medium title-font text-white"
          >
            متبقى:0
          </h2>
          <h2
            class="flex-grow sm:pr-10 text-xl font-medium title-font text-white"
          >
            نقاط قوة:0
          </h2>
          <h2
            class="flex-grow sm:pr-10 text-xl font-medium title-font text-white"
          >
            نقاط ضعف:0
          </h2>
          <h2
            class="flex-grow sm:pr-10 text-xl font-medium title-font text-white"
          >
            اخرى
          </h2>
        </div>
      </div>
    </section>
    <Transition>
      <div v-show="show">
        <div v-for="(data, key) in dataRow.children" :key="key">
          <SubCategories
            :id="'SubCategories-' + data.id"
            :dataRow="data"
          ></SubCategories>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script>
import SubCategories from "@/components/categories/SubCategories";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Categories",
  props: ["dataRow"],
  components: {
    SubCategories,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped></style>
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
