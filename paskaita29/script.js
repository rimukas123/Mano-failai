// Žaidimo tinklelio dydis
const GRID_SIZE = 4;

// Pradinių plytelių generavimas
function initializeGrid() {
    const grid = [];
    for (let i = 0; i < GRID_SIZE; i++) {
        grid[i] = [];
        for (let j = 0; j < GRID_SIZE; j++) {
            grid[i][j] = 0; // Pradinė reikšmė - tuščia plytelė
        }
    }
    return grid;
}

// Atvaizduoti tinklelį HTML
function renderGrid(grid) {
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Išvalyti turinį

    grid.forEach(row => {
        row.forEach(value => {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.textContent = value !== 0 ? value : ''; // Nerodyti nulio reikšmės
            container.appendChild(tile);
        });
    });
}

// Pagrindinė funkcija, kuri inicijuoja žaidimą
function startGame() {
    const grid = initializeGrid();
    renderGrid(grid);
}

// Pradinių plytelių sugeneravimas ir žaidimo pradžia
startGame();

// Tikrinti, ar žaidimas laimėtas
function checkWin(grid) {
    return grid.some(row => row.includes(2048));
}

// Tikrinti, ar žaidimas pralaimėtas
function checkLose(grid) {
    // Patikrinti, ar yra tuščių langelių
    if (grid.some(row => row.includes(0))) return false;

    // Patikrinti, ar galima susijungti bent vieną plytelę į kiekvieną kryptį
    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            const currentValue = grid[i][j];
            // Tikrinti horizontalius ir vertikalius judėjimus
            if ((grid[i][j + 1] === currentValue && grid[i][j + 2] === currentValue) ||
                (grid[i + 1] && grid[i + 2] && grid[i + 1][j] === currentValue && grid[i + 2][j] === currentValue)) {
                return false;
            }
        }
    }
    return true;
}

// Sugeneruoti naują plytelę su 2 arba 4 reikšme
function generateTile(grid) {
    const availablePositions = [];
    grid.forEach((row, i) => {
        row.forEach((value, j) => {
            if (value === 0) availablePositions.push([i, j]);
        });
    });
    if (availablePositions.length > 0) {
        const [i, j] = availablePositions[Math.floor(Math.random() * availablePositions.length)];
        grid[i][j] = Math.random() < 0.9 ? 2 : 4; // Tikimybė, kad atsiras plytelė su 2: 90%, su 4: 10%
    }
}
// Klavišų valdymas
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        // Įvykdyti judėjimą į viršų
    } else if (event.key === 'ArrowDown') {
        // Įvykdyti judėjimą žemyn
    } else if (event.key === 'ArrowLeft') {
        // Įvykdyti judėjimą į kairę
    } else if (event.key === 'ArrowRight') {
        // Įvykdyti judėjimą į dešinę
    }
});



// Judėjimas žemyn
function moveTilesDown() {function moveTilesUp() {
    // Sukurkime laikiną kopiją tinklelio
    const gridCopy = JSON.parse(JSON.stringify(grid));

    // Pereiti per kiekvieną stulpelį
    for (let j = 0; j < GRID_SIZE; j++) {
        const column = [];
        // Rinkti ne nulines reikšmes
        for (let i = 0; i < GRID_SIZE; i++) {
            if (grid[i][j] !== 0) column.push(grid[i][j]);
        }
        // Susijungti plyteles, jei jos turi tą pačią reikšmę
        for (let i = 0; i < column.length - 1; i++) {
            if (column[i] === column[i + 1]) {
                column[i] *= 2;
                column.splice(i + 1, 1);
            }
        }
        // Užpildyti tinklelį sujungtomis plytelėmis ir tuščiomis reikšmėmis
        for (let i = 0; i < GRID_SIZE; i++) {
            if (i < column.length) {
                grid[i][j] = column[i];
            } else {
                grid[i][j] = 0;
            }
        }
    }

    // Tikrinti, ar tinklelyje atsirado nauja plytelė
    if (!arraysEqual(grid, gridCopy)) generateTile(grid);

    // Atvaizduoti atnaujintą tinklelį
    renderGrid(grid);
}

    // Implementacija
}

// Judėjimas į kairę
function moveTilesLeft() {
    // Implementacija
}

// Judėjimas į dešinę
function moveTilesRight() {
    // Implementacija
}
function moveTilesUp() {
    // Sukurkime laikiną kopiją tinklelio
    const gridCopy = JSON.parse(JSON.stringify(grid));

    // Pereiti per kiekvieną stulpelį
    for (let j = 0; j < GRID_SIZE; j++) {
        const column = [];
        // Rinkti ne nulines reikšmes
        for (let i = 0; i < GRID_SIZE; i++) {
            if (grid[i][j] !== 0) column.push(grid[i][j]);
        }
        // Susijungti plyteles, jei jos turi tą pačią reikšmę
        for (let i = 0; i < column.length - 1; i++) {
            if (column[i] === column[i + 1]) {
                column[i] *= 2;
                column.splice(i + 1, 1);
            }
        }
        // Užpildyti tinklelį sujungtomis plytelėmis ir tuščiomis reikšmėmis
        for (let i = 0; i < GRID_SIZE; i++) {
            if (i < column.length) {
                grid[i][j] = column[i];
            } else {
                grid[i][j] = 0;
            }
        }
    }

    // Tikrinti, ar tinklelyje atsirado nauja plytelė
    if (!arraysEqual(grid, gridCopy)) generateTile(grid);

    // Atvaizduoti atnaujintą tinklelį
    renderGrid(grid);

function moveTilesDown() {
    // Sukurkime laikiną kopiją tinklelio
    const gridCopy = JSON.parse(JSON.stringify(grid));

    // Pereiti per kiekvieną stulpelį iš apačios į viršų
    for (let j = 0; j < GRID_SIZE; j++) {
        const column = [];
        // Rinkti ne nulines reikšmes
        for (let i = GRID_SIZE - 1; i >= 0; i--) {
            if (grid[i][j] !== 0) column.push(grid[i][j]);
        }
        // Susijungti plyteles, jei jos turi tą pačią reikšmę
        for (let i = column.length - 1; i > 0; i--) {
            if (column[i] === column[i - 1]) {
                column[i] *= 2;
                column.splice(i - 1, 1);
            }
        }
        // Užpildyti tinklelį sujungtomis plytelėmis ir tuščiomis reikšmėmis iš apačios į viršų
        for (let i = GRID_SIZE - 1; i >= 0; i--) {
            const index = GRID_SIZE - 1 - i;
            if (index < column.length) {
                grid[i][j] = column[index];
            } else {
                grid[i][j] = 0;
            }
        }
    }

    // Tikrinti, ar tinklelyje atsirado nauja plytelė
    if (!arraysEqual(grid, gridCopy)) generateTile(grid);

    // Atvaizduoti atnaujintą tinklelį
    renderGrid(grid);
}
function moveTilesLeft() {
    // Sukurkime laikiną kopiją tinklelio
    const gridCopy = JSON.parse(JSON.stringify(grid));

    // Pereiti per kiekvieną eilutę iš kairės į dešinę
    for (let i = 0; i < GRID_SIZE; i++) {
        const row = [];
        // Rinkti ne nulines reikšmes
        for (let j = 0; j < GRID_SIZE; j++) {
            if (grid[i][j] !== 0) row.push(grid[i][j]);
        }
        // Susijungti plyteles, jei jos turi tą pačią reikšmę
        for (let j = 0; j < row.length - 1; j++) {
            if (row[j] === row[j + 1]) {
                row[j] *= 2;
                row.splice(j + 1, 1);
            }
        }
        // Užpildyti tinklelį sujungtomis plytelėmis ir tuščiomis reikšmėmis iš kairės į dešinę
        for (let j = 0; j < GRID_SIZE; j++) {
            if (j < row.length) {
                grid[i][j] = row[j];
            } else {
                grid[i][j] = 0;
            }
        }
    }

    // Tikrinti, ar tinklelyje atsirado nauja plytelė
    if (!arraysEqual(grid, gridCopy)) generateTile(grid);

    // Atvaizduoti atnaujintą tinklelį
    renderGrid(grid);
}
function moveTilesRight() {
    // Sukurkime laikiną kopiją tinklelio
    const gridCopy = JSON.parse(JSON.stringify(grid));

    // Pereiti per kiekvieną eilutę iš dešinės į kairę
    for (let i = 0; i < GRID_SIZE; i++) {
        const row = [];
        // Rinkti ne nulines reikšmes
        for (let j = GRID_SIZE - 1; j >= 0; j--) {
            if (grid[i][j] !== 0) row.push(grid[i][j]);
        }
        // Susijungti plyteles, jei jos turi tą pačią reikšmę
        for (let j = row.length - 1; j > 0; j--) {
            if (row[j] === row[j - 1]) {
                row[j] *= 2;
                row.splice(j - 1, 1);
            }
        }
        // Užpildyti tinklelį sujungtomis plytelėmis ir tuščiomis reikšmėmis iš dešinės į kairę
        for (let j = GRID_SIZE - 1; j >= 0; j--) {
            const index = GRID_SIZE - 1 - j;
            if (index < row.length) {
                grid[i][j] = row[index];
            } else {
                grid[i][j] = 0;
            }
        }
    }

    // Tikrinti, ar tinklelyje atsirado nauja plytelė
    if (!arraysEqual(grid, gridCopy)) generateTile(grid);

    // Atvaizduoti atnaujintą tinklelį
    renderGrid(grid);
}}
