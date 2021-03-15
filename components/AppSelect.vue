<template>
  <select>
    <option v-for="option in selectOptions" :key="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['selectOptions']),
  },
}
</script>

<style lang="scss" scoped></style>
