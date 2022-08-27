<template>
  <div>
    <UserInfo></UserInfo>
    <MainBox
      v-for="(data, key) in getData"
      :key="key"
      :id="'row-' + data.id"
      :dataRow="data"
    >
    </MainBox>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBox from "@/components/boxes/MainBox";
import UserInfo from "@/components/UserInfo";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    MainBox,
    UserInfo,
  },
  computed: {
    ...mapGetters("db", ["getData"]),
  },
  created() {},
  updated() {},
  methods: {},
};
</script>
