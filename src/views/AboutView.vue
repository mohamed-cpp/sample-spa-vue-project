<template>
  <div class="about">
    <div class="container lg:mx-auto">
      <section
        class="text-gray-600 bg-green-300 hover:bg-green-400 hover:cursor-pointer body-font"
      >
        <div class="container px-5 py-24 mx-auto">
          <div
            class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"
          >
            <h1
              class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900"
            >
              Slow-carb next level shoindxgoitch ethical authentic, scenester
              sriracha forage.
            </h1>
          </div>
        </div>
      </section>
      <section
        class="text-gray-600 bg-green-300 hover:bg-green-400 hover:cursor-pointer body-font"
      >
        <div class="container px-2 py-15 mx-auto">
          <div
            class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"
          >
            <h1
              class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900"
            >
              Slow-carb next level shoindxgoitch ethical authentic, scenester
              sriracha forage.
            </h1>
          </div>
        </div>
      </section>
      <div class="flex justify-center">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label
            class="form-check-label inline-block text-gray-800"
            for="inlineRadio10"
            >1</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label
            class="form-check-label inline-block text-gray-800"
            for="inlineRadio20"
            >2</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="option3"
          />
          <label
            class="form-check-label inline-block text-gray-800"
            for="inlineRadio30"
            >3</label
          >
        </div>
        <h2>{{ helpers.utils.hello(", Mohamed") }}</h2>
      </div>
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
    </div>
  </div>
</template>
