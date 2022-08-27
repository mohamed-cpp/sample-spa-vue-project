<template>
  <li class="relative">
    <input
      class="sr-only peer"
      type="radio"
      :value="dataRow.score"
      :name="'answer_' + fatherId"
      :id="'answer_yes_' + dataRow.id"
      :checked="checkedArr"
    />
    <label
      class="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-500 peer-checked:ring-2 peer-checked:border-transparent"
      :for="'answer_yes_' + dataRow.id"
      >{{ dataRow.answer }}</label
    >
  </li>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Answers",
  props: ["dataRow", "fatherId", "checkedArr"],
};
</script>

<style scoped></style>
