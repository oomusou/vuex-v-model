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
/** computed */
const name = {
  get() {
    return this.$store.state.name;
  },
  set(value) {
    this.$store.commit('setName', value);
  },
};

const computed = {
  name,
};

export default {
  name: 'HelloWorld',
  computed,
};
</script>
