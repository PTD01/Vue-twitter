<template>
  <c-box
    as="aside"
    w="full"
    py="5"
    px="6"
    bg="gray.700"
    shadow="lg"
  >
    <!-- User profile -->
    <c-box display="flex" alignItems="center" marginBottom="4">
      <c-avatar size="md" src="/path/to/your/avatar.png" />
      <c-text ml="3" fontSize="lg" fontWeight="semibold">Username</c-text>
    </c-box>

    <!-- Navigation -->
    <c-link 
      to="/" 
      display="flex" 
      alignItems="center"
      color="white"
      py="2"
    >
      <c-icon name="home" size="5" color="blue.500"/>
      <c-text ml="3">Home</c-text>
    </c-link>
  </c-box>
</template>

<script setup>
import { CFlex, CBox, CText, CLink, CIcon, CAvatar } from "@chakra-ui/vue";
</script>

<script>
export default {
  components: {
    CBox,
    CText,
    CLink,
    CIcon,
    CFlex,
    CAvatar
  }
}
</script>


<style scoped>
c-link:hover {
  background-color: #718096; /* Equivalent to 'gray.600' in Chakra UI */
}
</style>
