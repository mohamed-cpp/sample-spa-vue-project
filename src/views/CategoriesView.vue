<template>
  <div>
    <Categories
      v-for="(data, key) in dataById['sub_children']"
      :key="key"
      :id="'Categories-' + data.id"
      :dataRow="data"
    ></Categories>
  </div>
</template>

<script>
import Categories from "@/components/categories/Categories";
import { mapGetters } from "vuex";
export default {
  name: "CategoriesView",
  components: {
    Categories,
  },
  computed: {
    ...mapGetters("db", ["getDataByID"]),
    dataById() {
      return this.getDataByID(
        this.$route.params.father,
        this.$route.params.child
      );
    },
  },
};
</script>

<style scoped></style>
