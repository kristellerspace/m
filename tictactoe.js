document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("tic-tac-toe-board");
    const cells = [];

    let currentPlayer = "X";
    let gameEnded = false;

    // Create the Tic Tac Toe board
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("tic-tac-toe-cell");
        cell.dataset.index = i;
        cells.push(cell);
        cell.addEventListener("click", () => cellClicked(i));
        board.appendChild(cell);
    }

    // Function to handle cell click
    function cellClicked(index) {
        if (gameEnded || cells[index].textContent !== "") return;
        
        cells[index].textContent = currentPlayer;
        if (checkWinner()) {
            alert(`Player ${currentPlayer} wins!`);
            gameEnded = true;
            return;
        }
        if (checkDraw()) {
            alert("It's a draw!");
            gameEnded = true;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    // Function to check for a winner
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (cells[a].textContent !== "" && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                return true;
            }
        }
        return false;
    }

    // Function to check for a draw
    function checkDraw() {
        return cells.every(cell => cell.textContent !== "");
    }
});
