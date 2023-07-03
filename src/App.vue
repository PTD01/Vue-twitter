<template>
  <c-flex id="app" h="100vh" w="100vw" flexDirection="row">

    <c-flex w="20%" flexDirection="column" bg="gray.700" color="white" p="4">
      <c-box h="10%">
        <h3>For you</h3>
      </c-box>
      <!-- The remaining space here for the rest of your "For you" content -->
    </c-flex>

    <c-box flex="1" h="100vh" p="4">
      <c-flex justifyContent="center" alignItems="center" h="10%">
        <Aside/>
      </c-flex>
      <!-- The remaining space here for the rest of your "Home" content -->
    </c-box>

    <c-flex w="20%" flexDirection="column" bg="gray.700" color="white" p="4">
      <c-box h="10%" ml="auto">
        <h3>Following</h3>
      </c-box>
      <!-- The remaining space here for the rest of your "Following" content -->
    </c-flex>

  </c-flex>
</template>

<script setup>
import { CFlex, CBox } from "@chakra-ui/vue";
import Aside from "@/components/Aside.vue";
</script>

<script>
export default {
  components: {
    Aside
  }
}
</script>
