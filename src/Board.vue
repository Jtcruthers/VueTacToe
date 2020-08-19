<template>
  <div>
    <p>The current player is {{ctx.currentPlayer}}</p>
    <p>You are {{playerID}}</p>
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
    <div v-if="ctx.gameover">
      <h2>The winner is {{ctx.gameover.winner ? ctx.gameover.winner : "no one. You all suck."}}</h2>
    </div>
  </div>
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
      const { cells } = this.G;

      const rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ].map(row => row.map(index => cells[index] || ''));
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