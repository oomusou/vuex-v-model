<template>
  <div>
    <div>
      <input type="text" :value="name" @input="onInputName">
    </div>
    <div>
      {{ name }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

/** computed */
const computed = mapState(['name']);

/** methods */
const onInputName = function(e) {
  this.$store.commit('setName', e.target.value);
};

const methods = {
  onInputName,
};

export default {
  name: 'HelloWorld',
  computed,
  methods,
};
</script>
