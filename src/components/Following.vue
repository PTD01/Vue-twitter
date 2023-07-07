<template>
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
</template>

<script setup>
import { CFlex, CBox, CText } from "@chakra-ui/vue";
</script>
