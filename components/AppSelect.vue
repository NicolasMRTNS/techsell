<template>
  <select
    :id="select"
    :name="select"
    @change="$emit('change', $event.target.value)"
  >
    <option v-for="option in optionsarray" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'AppSelect',
  props: {
    select: {
      type: String,
      default: 'Portable Android'
    },
    optionsarray: {
      type: Array,
      default: () => ['Portable Android']
    }
  }
}
</script>

<style lang="scss" scoped></style>
