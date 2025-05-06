function formatMessage(message, maxLength) {
    // Перевіряємо довжину рядка
    if (message.length <= maxLength) {
        return message; // Повертаємо початковий рядок, якщо його довжина не перевищує maxLength
    }
    // Обрізаємо рядок до maxLength символів і додаємо "..."
    return message.slice(0, maxLength) + "...";
}

// Приклади використання
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
