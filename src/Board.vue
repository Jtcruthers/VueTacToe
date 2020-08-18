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
  methods: {
    clickedCell(rowIndex, cellIndex) {
      const oneDimensionalIndex = rowIndex * 3 + cellIndex;
      this.$emit('cell-clicked', oneDimensionalIndex);
    }
  },
  computed: {
    rows() {
      const { cells = Array(9).fill('') } = this.G;

      const rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ].map(row => row.map(index => cells[index] || ''));
      console.log(rows);
      return rows;
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