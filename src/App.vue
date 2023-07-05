<template>
  <c-flex id="app" h="100vh" w="100vw" flexDirection="row">
    <ForYou />
    <Home />
    <Following />
  </c-flex>
</template>

<script setup>
  import { CFlex, CBox, CText } from "@chakra-ui/vue";
</script>

<script>
import ForYou from "@/components/ForYou.vue";
import Home from "@/components/Home.vue";
import Following from "@/components/Following.vue";

export default {
  components: {
    ForYou,
    Home,
    Following
  }
};
</script>
