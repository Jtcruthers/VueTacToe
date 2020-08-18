import { INVALID_MOVE } from 'boardgame.io/core';

const isVictory = (cells) => {
    const positions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];

    const isRowComplete = row => {
        const symbols = row.map(index => cells[index]);
        return symbols.every(symbol => symbol !== null && symbol === symbols[0]);
    }

    return positions.map(isRowComplete).some(row => row === true);
}

const isDraw = (cells) => {
    return cells.filter(cell => cell === null).length === 0;
}

export const TicTacToe = {
    setup: () => ({ cells: Array(9).fill(null) }),

    turn: {
        moveLimit: 1,
    },

    moves: {
        clickCell: (G, ctx, id) => {
            if (G.cells[id] !== null) return INVALID_MOVE;

            G.cells[id] = ctx.currentPlayer;
        },
    },

    endIf: (G, ctx) => {
        if (isVictory(G.cells)) return { winner: ctx.currentPlayer };
        if (isDraw(G.cells)) return { draw: true };
    }
};