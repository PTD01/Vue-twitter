<template>
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
  </template>
  
  <script setup>
  import { CFlex, CBox, CText } from "@chakra-ui/vue";
  </script>
  