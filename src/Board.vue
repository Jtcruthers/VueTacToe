<template>
  <table>
    <tr :key="row.id" :rows="rows" v-for="(row, rowIndex) in rows">
      <td
        class="cell"
        :key="cell.id"
        :row="row"
        v-for="(cell, cellIndex) in row"
        @click="clickedCell(rowIndex, cellIndex)"
      >
        {{ cell }}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'Board',
  props: ["G", "ctx", "moves", "events", "playerID"],
  data() {
    return {
      rows: [["", "", ""], ["", "", ""], ["", "", ""]],
    }
  },
  methods: {
    clickedCell(rowIndex, cellIndex) {
      const oneDimensionalIndex = rowIndex * 3 + cellIndex;
      this.$emit('cell-clicked', oneDimensionalIndex);
    }
  },
}
</script>

<style scoped>
.cell {
  border: 1px solid #555;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>