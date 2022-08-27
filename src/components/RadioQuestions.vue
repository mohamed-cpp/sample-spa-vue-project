<template>
  <ul class="grid grid-cols-7 gap-x-7 m-10">
    <li class="relative">
      <input
        class="sr-only peer"
        type="radio"
        value="yes"
        name="answer"
        id="answer_yes"
      />
      <label
        class="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
        for="answer_yes"
        >Yes</label
      >
    </li>

    <li class="relative">
      <input
        class="sr-only peer"
        type="radio"
        value="no"
        name="answer"
        id="answer_no"
      />
      <label
        class="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent"
        for="answer_no"
        >No</label
      >
    </li>
    <li class="relative">
      <input
        class="sr-only peer"
        type="radio"
        value="maybe"
        name="answer"
        id="answer_maybe2"
      />
      <label
        class="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent"
        for="answer_maybe2"
        >Maybe</label
      >
    </li>
    <li class="relative">
      <input
        class="sr-only peer"
        type="radio"
        value="maybe"
        name="answer"
        id="answer_maybe"
      />
      <label
        class="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent"
        for="answer_maybe"
        >Maybe 2</label
      >
    </li>
    <div class="col-span-3">
      <h1 class="text-2xl text-center pt-3">
        {{ helpers.utils.hello(", Mohamed") }}
      </h1>
    </div>
  </ul>
</template>

<script>
export default {
  name: "RadioQuestions",
};
</script>
