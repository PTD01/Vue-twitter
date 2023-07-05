<template>
  <c-flex id="app" h="100vh" w="100vw" flexDirection="row">

    <!-- For you section -->
    <c-flex w="20%" flexDirection="column" bg="gray.700" color="white" p="4">
      <c-box h="10%">
        <h3>For you</h3>
      </c-box>
      <!-- Some example tweets -->
      <c-text fontWeight="bold" mb="2">Tweet 1</c-text>
      <c-text>Tweet text...</c-text>
      <c-text fontWeight="bold" mt="4" mb="2">Tweet 2</c-text>
      <c-text>Tweet text...</c-text>
    </c-flex>

    <!-- Home section -->
    <c-box flex="1" h="100vh" p="4">
      <c-flex justifyContent="center" alignItems="center" h="10%">
        <Aside/>
      </c-flex>
      <!-- The remaining space here for the rest of your "Home" content -->
    </c-box>

    <!-- Following section -->
    <c-flex w="20%" flexDirection="column" bg="gray.700" color="white" p="4">
      <c-box h="10%" ml="auto">
        <h3>Following</h3>
      </c-box>
      <!-- Some example trending topics -->
      <c-text fontWeight="bold" mb="2">#TrendingTopic1</c-text>
      <c-text>Description...</c-text>
      <c-text fontWeight="bold" mt="4" mb="2">#TrendingTopic2</c-text>
      <c-text>Description...</c-text>
    </c-flex>

  </c-flex>
</template>


<script setup>
import { CFlex, CBox, CText } from "@chakra-ui/vue";
import Aside from "@/components/Aside.vue";
</script>

<script>
export default {
  components: {
    Aside,
    CFlex,
    CBox,
    CText,
    Aside
  }
}
</script>
