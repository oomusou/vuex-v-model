<template>
  <div>
    <div>
      <input type="text" v-model="name">
    </div>
    <div>
      {{ name }}
    </div>
  </div>
</template>

<script>
import { createComputed } from "../helpers/vuex";

/** computed */
const computed = {
  name: createComputed('name'),
};

export default {
  name: 'HelloWorld',
  computed,
};
</script>
