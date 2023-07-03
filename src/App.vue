<script setup>
import { CFlex, CBox, CButton,  } from "@chakra-ui/vue";
import Aside from "@/components/Aside.vue";
components: {
  Aside
}
</script>

<template>
  <div id="app">
    <c-flex flex="1" bg="red" w="100vw" h="100%">
      <c-flex h="100vh" w="30vw" bg="black"><Aside/></c-flex>
      <c-flex h="100vh" w="40vw" bg="black" color="white" border="solid 2px grey">Home
        <c-flex flex="1" justify="space-around">
          <h3>For you</h3>
          <h3>Following</h3>
        </c-flex>
  
        <c-flex>
          
        </c-flex>

      </c-flex>
      <c-flex h="100vh full" w="30vw" bg="black">Info</c-flex>

    </c-flex>
  </div>

</template>
