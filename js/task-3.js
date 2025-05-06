function filterArray(numbers, value) {
    // Перевіряємо, чи масив чисел не порожній
    if (numbers.length === 0) {
        return [];
    }
    // Створюємо новий масив для відфільтрованих чисел
    const filteredNumbers = [];
    // Перебираємо масив чисел
    // і додаємо до нового масиву тільки ті числа,
    // які більші за передане значення
    for (const number of numbers) {
        if (number > value) {
            filteredNumbers.push(number);
        }
    }
    return filteredNumbers;
}

// Перевірка роботи функції
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
