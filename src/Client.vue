<template>
  <div id="app">
    <board
      :G="G"
      :ctx="ctx"
      :moves="client.moves"
      :events="client.events"
      :playerID="client.playerID"
      @cell-clicked="cellClicked"
    />
  </div>
</template>

<script>
import { Client } from 'boardgame.io/client';
import { Local } from 'boardgame.io/multiplayer';
import { TicTacToe } from './Game'
import Board from './Board';

export default {
  name: 'Client',
  components: {
    'board': Board,
  },
  props: ["playerID"],
  data() {
    return {
      G: {},
      ctx: {}
    }
  },
  created() {
    this.client = Client({ game: TicTacToe, multiplayer: Local(), playerID: this.playerID });
    this.client.start();
    this.client.subscribe(state => {
      this.G = {...state.G};
      this.ctx = {...state.ctx};
    });
  },
  methods: {
    cellClicked(index) {
      this.client.moves.clickCell(index);
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
