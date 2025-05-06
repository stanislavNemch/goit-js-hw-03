function makeArray(firstArray, secondArray, maxLength) {
    const combinedArray = firstArray.concat(secondArray);
    // Перевіряємо, чи перевищує довжина об'єднаного масиву maxLength
    // Якщо так, то обрізаємо його до maxLength
    // Якщо ні, то повертаємо об'єднаний масив без змін
    return combinedArray.length > maxLength
        ? combinedArray.slice(0, maxLength)
        : combinedArray;
}

// Перевірка роботи функції
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
