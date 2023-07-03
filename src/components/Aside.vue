import Vue from 'vue' import { CFlex, CBox, CButton,CLink,CText } from
"@chakra-ui/vue";

<script setup>
new Vue({
  el: "#aside",
});
</script>

<template>
  <div id="aside">
    <c-flex flex-dir="column" flex="1">
      <c-link to="/">
        <c-flex flex-dir="row">
          <c-box>
            <c-text>hfhjutuj</c-text>
          </c-box>
          <c-box>
            <c-text>Home</c-text>
          </c-box>
        </c-flex>
      </c-link>
    </c-flex>
  </div>
</template>
