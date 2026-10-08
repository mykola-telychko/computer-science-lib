#include <stdio.h>

// Оголошуємо функції, написані на асемблері
extern int square(int a);
extern int sum(int a, int b);
extern int divide(int a, int b);
extern int reduce(int a, int b);

int main() {
    int cmd, a, b, result = 0;

    printf("Виберіть команду:\n");
    printf("1 - Квадрат (square)\n");
    printf("2 - Сума (sum)\n");
    printf("3 - Ділення (divide)\n");
    printf("4 - Різниця (reduce)\n");
    printf("Ваш вибір: ");
    scanf("%d", &cmd);

    if (cmd == 1) {
        printf("Введіть число a: ");
        scanf("%d", &a);
        result = square(a);
    } else if (cmd >= 2 && cmd <= 4) {
        printf("Введіть число a: ");
        scanf("%d", &a);
        printf("Введіть число b: ");
        scanf("%d", &b);

        switch(cmd) {
            case 2: result = sum(a, b); break;
            case 3: result = divide(a, b); break;
            case 4: result = reduce(a, b); break;
        }
    } else {
        printf("Невідома команда!\n");
        return 1;
    }

    printf("Результат: %d\n", result);
    return 0;
}