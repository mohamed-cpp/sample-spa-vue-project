<template>
  <section
    class="text-gray-600 bg-teal-200 hover:bg-teal-400 hover:cursor-pointer body-font"
    dir="rtl"
    @click="show = !show"
  >
    <div class="container px-2 py-6 mx-auto">
      <div
        class="lg flex flex-col sm:flex-row sm:items-center items-start mx-auto"
      >
        <h2
          class="flex-grow sm:pr-10 text-xl font-medium title-font text-black"
        >
          المجال: {{ dataRow.sub_category }}
        </h2>
        <h2
          class="flex-grow sm:pr-10 text-xl font-medium title-font text-black"
        >
          عداد المجالات: {{ dataRow.sub_category_number }}
        </h2>
        <h2
          class="flex-grow sm:pr-10 text-xl font-medium title-font text-black"
        >
          مهارات متاحة: {{ dataRow.sub_available_skills }}
        </h2>
        <h2
          class="flex-grow sm:pr-10 text-xl font-medium title-font text-black"
        >
          متبقى:0
        </h2>
        <h2
          class="flex-grow sm:pr-10 text-xl font-medium title-font text-black"
        >
          نقاط قوة: {{ score }}
        </h2>
        <h2
          class="flex-grow sm:pr-10 text-xl font-medium title-font text-black"
        >
          نقاط ضعف:0
        </h2>
        <h2
          class="flex-grow sm:pr-10 text-xl font-medium title-font text-black"
        >
          اخرى
        </h2>
      </div>
    </div>
  </section>
  <Transition>
    <div v-show="show">
      <div dir="rtl" class="mb-2">
        <Questions
          v-for="(data, key) in dataRow.questions"
          :key="key"
          :id="'Questions-' + data.id"
          :fatherId="dataRow.id"
          :dataRow="data"
        ></Questions>
      </div>
    </div>
  </Transition>
</template>

<script>
import Questions from "@/components/categories/Questions";

export default {
  name: "SubCategories",
  props: ["dataRow"],
  components: {
    Questions,
  },
  data() {
    return {
      show: false,
      score: 0,
      statePath: "$store.state.count.fathers_score." + this.dataRow.id,
    };
  },
  created() {
    // console.log(this.$root.statePath);
    this.score = this.$store.state.count.fathers_score[this.dataRow.id] ?? 0;
    this.$watch(
      () => {
        // Touch the properties we want to watch
        this.$store.state.count.fathers_score[this.dataRow.id];

        // Return a new value so Vue calls the handler when
        // this function is re-executed
        return {};
      },
      () => {
        this.score = this.$store.state.count.fathers_score[this.dataRow.id];
      }
    );
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
