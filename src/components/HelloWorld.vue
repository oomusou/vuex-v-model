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
const data = function() {
  return {
    name: '',
  };
};

export default {
  name: 'HelloWorld',
  data,
};
</script>
