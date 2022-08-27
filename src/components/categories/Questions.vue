<template>
  <ul class="grid grid-cols-7 gap-x-7 py-2 bg-white">
    <div class="col-span-3">
      <h1 class="text-2xl text-center pt-3">
        {{ dataRow.question }}
      </h1>
    </div>
    <Answers
      v-for="(data, key) in dataRow.answers"
      @click="add_score(data.id, data.score)"
      :key="key"
      :id="'Questions-' + data.id"
      :fatherId="dataRow.id"
      :checkedArr="!!answersArr[data.id]"
      :dataRow="data"
    ></Answers>
  </ul>
</template>

<script>
import Answers from "@/components/categories/Answers";
import { mapActions } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Questions",
  props: ["dataRow", "fatherId"],
  components: {
    Answers,
  },
  data() {
    return {
      old_id: false,
      answersArr: this.$store.state.count.fathers_children[this.fatherId] ?? [],
    };
  },
  created() {
    console.log(this.dataRow.id, this.fatherId);
  },
  methods: {
    add_score(id, score) {
      this.setScore({
        old_id: this.old_id,
        new_id: id,
        score: score,
        father_id: this.fatherId,
      });
      this.old_id = id;
    },
    ...mapActions("count", ["setScore"]),
  },
};
</script>

<style scoped></style>
