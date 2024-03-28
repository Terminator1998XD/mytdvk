// Проверка столкновения с ячейкой
function isColided(x, y) {
  const mapsize = curmap.size;
    if (x < 0 || y < 0 || x >= mapsize.w || y >= mapsize.h) {
        return true;
    }

    const obj = curmap.grid[[x, y]];
    return obj == null || !obj.ispath;
}

function FindPath(startX, startY, endX, endY) {
    if(isColided(startX,startY) || isColided(endX,endY)) return null;

    // Создаем открытый список и закрытый список
    let openList = [];
    let closedList = [];

    // Создаем структуру данных для каждой ячейки
    class Cell {
        constructor(x, y, g, h, parent) {
            this.x = x;
            this.y = y;

            // Затраты перемещения от старта к этой ячейке
            this.g = g;

            // Примерное манхэттенское расстояние до цели
            this.h = h;

            // Родительская ячейка
            this.parent = parent;
        }

        // Вычисляем общую стоимость f
        get f() {
            return this.g + this.h;
        }
    }

    // Добавляем соседнюю ячейку в открытый список
    function addToOpenList(x, y, g, h, parent) {
        if (!isColided(x, y)) {
            const neighborCell = new Cell(x, y, g, h, parent);
            openList.push(neighborCell);
        }
    }

    // Находим ячейку с наименьшей общей стоимостью f в открытом списке
    function findLowestFCostCell() {
        let lowestIndex = 0;
        for (let i = 0; i < openList.length; i++) {
            if (openList[i].f < openList[lowestIndex].f) {
                lowestIndex = i;
            }
        }
        return openList[lowestIndex];
    }

    // Проверяем, является ли ячейка конечной
    function isEndCell(cell) {
        return cell.x === endX && cell.y === endY;
    }

    // Создаем начальную ячейку
    const startCell = new Cell(startX, startY, 0, 0, null);
    openList.push(startCell);

    while (openList.length > 0) {
        // Находим ячейку с наименьшей общей стоимостью f в открытом списке
        const currentCell = findLowestFCostCell();

        // Удаляем текущую ячейку из открытого списка и добавляем в закрытый список
        openList = openList.filter(cell => !(cell.x === currentCell.x && cell.y === currentCell.y));
        closedList.push(currentCell);

        // Проверяем, является ли текущая ячейка конечной
        if (isEndCell(currentCell)) {
            // Построение пути
            let path = [];
            let currentPathCell = currentCell;
            while (currentPathCell !== null) {
                path.push({ x: currentPathCell.x, y: currentPathCell.y });
                currentPathCell = currentPathCell.parent;
            }
            path.reverse();
            return path;
        }

        // Генерируем соседние ячейки
        const neighbors = [
            { x: currentCell.x - 1, y: currentCell.y }, // Слева
            { x: currentCell.x + 1, y: currentCell.y }, // Справа
            { x: currentCell.x, y: currentCell.y - 1 }, // Сверху
            { x: currentCell.x, y: currentCell.y + 1 }, // Снизу
        ];

        // Проходимся по каждой соседней ячейке
        for (let neighbor of neighbors) {
            // Если соседняя ячейка уже находится в закрытом списке или столкновение, пропускаем ее
            if (
                closedList.some(cell => cell.x === neighbor.x && cell.y === neighbor.y) ||
                isColided(neighbor.x, neighbor.y)
            ) {
                continue;
            }

            // Рассчитываем новые затраты перемещения от старта до соседней ячейки
            const gCost = currentCell.g + 1;

            // Рассчитываем примерное манхэттенское расстояние от соседней ячейки до конечной
            const hCost = Math.abs(neighbor.x - endX) + Math.abs(neighbor.y - endY);

            // Добавляем соседнюю ячейку в открытый список
            addToOpenList(neighbor.x, neighbor.y, gCost, hCost, currentCell);
        }
    }

    // Не удалось найти путь
    return null;
}
