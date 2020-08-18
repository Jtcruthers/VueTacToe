<template>
  <div id="app">
    <board @cell-clicked="cellClicked" />
  </div>
</template>

<script>
import { Client } from 'boardgame.io/client';
import { TicTacToe } from './Game'
import Board from './Board';

export default {
  name: 'App',
  components: {
    'board': Board,
  },
  data() {
    return {
      client: null,
    }
  },
  created() {
    this.client = Client({ game: TicTacToe });
    this.client.start();
  },
  methods: {
    cellClicked(index) {
      console.log(index);
      //this.client.moves.clickCell(index);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  min-height: 500px;
}
</style>
