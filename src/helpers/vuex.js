import { capitalize } from "./string";

/** 動態產生 v-model 所需要的含 setter 的 computed */
export const createComputed = stateName => {
  const mutationName = `set${capitalize(stateName)}`;

  const get = function() {
    return this.$store.state[stateName];
  };

  const set = function(value) {
    this.$store.commit(`${mutationName}`, value);
  };

  return {
    get,
    set,
  };
};

/** 建立 mutation function */
export const createMutation = stateName =>
  (state, payload) => state[stateName] = payload;

