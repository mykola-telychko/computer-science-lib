Ось повний опис та розбір вашого коду, оформлений у вигляді готового до використання файлу `README.md`. Ви можете скопіювати цей текст і зберегти його у файлі з назвою `README.md` у вашому репозиторії.

```markdown
# x86-64 Assembly Basic Math & Linux Syscalls

Цей проєкт містить програму на мові асемблера (синтаксис **NASM** для архітектури **x86-64** у Linux), яка виконує базові математичні операції з двома числами ($15$ та $4$), перетворює числові результати в текстовий формат та виводить їх на екран за допомогою низькорівневих системних викликів (`syscall`).

---

## 📄 Повний код програми (`file_asm.s`)

```assembly
; Basic math operations in Assembly
section .data
    a dd 15
    b dd 4
    
    add_msg db 'Addition: 15 + 4 = '
    add_len equ $ - add_msg
    
    sub_msg db 'Subtraction: 15 - 4 = '
    sub_len equ $ - sub_msg
    
    mul_msg db 'Multiplication: 15 * 4 = '
    mul_len equ $ - mul_msg
    
    div_msg db 'Integer Division: 15 / 4 = '
    div_len equ $ - div_msg
    
    mod_msg db 'Modulus: 15 % 4 = '
    mod_len equ $ - mod_msg
    
    pow_msg db 'Power: 15 ^ 2 = '
    pow_len equ $ - pow_msg
    
    newline db 10

section .bss
    num_buffer resb 12

section .text
    global _start

num_to_string:
    push rbp
    mov rbp, rsp
    push rbx
    push rcx
    
    mov rbx, 10
    mov rcx, 0
    add rdi, 11
    mov byte [rdi], 0
    
.convert_loop:
    dec rdi
    mov rdx, 0
    div rbx
    add dl, '0'
    mov [rdi], dl
    inc rcx
    test rax, rax
    jnz .convert_loop
    
    mov rsi, rdi
    mov rdx, rcx
    
    pop rcx
    pop rbx
    pop rbp
    ret

print_string:
    mov rax, 1
    mov rdi, 1
    syscall
    ret

_start:
    ; Addition
    mov rsi, add_msg
    mov rdx, add_len
    call print_string
    
    mov eax, [a]
    add eax, [b]
    mov rdi, num_buffer
    call num_to_string
    call print_string
    
    mov rsi, newline
    mov rdx, 1
    call print_string
    
    ; Subtraction
    mov rsi, sub_msg
    mov rdx, sub_len
    call print_string
    
    mov eax, [a]
    sub eax, [b]
    mov rdi, num_buffer
    call num_to_string
    call print_string
    
    mov rsi, newline
    mov rdx, 1
    call print_string
    
    ; Multiplication
    mov rsi, mul_msg
    mov rdx, mul_len
    call print_string
    
    mov eax, [a]
    imul eax, [b]
    mov rdi, num_buffer
    call num_to_string
    call print_string
    
    mov rsi, newline
    mov rdx, 1
    call print_string
    
    ; Division
    mov rsi, div_msg
    mov rdx, div_len
    call print_string
    
    mov eax, [a]
    cdq
    idiv dword [b]
    mov rdi, num_buffer
    call num_to_string
    call print_string
    
    mov rsi, newline
    mov rdx, 1
    call print_string
    
    ; Modulus
    mov rsi, mod_msg
    mov rdx, mod_len
    call print_string
    
    mov eax, [a]
    cdq
    idiv dword [b]
    mov rax, rdx  ; remainder
    mov rdi, num_buffer
    call num_to_string
    call print_string
    
    mov rsi, newline
    mov rdx, 1
    call print_string
    
    ; Power (square)
    mov rsi, pow_msg
    mov rdx, pow_len
    call print_string
    
    mov eax, [a]
    imul eax, eax
    mov rdi, num_buffer
    call num_to_string
    call print_string
    
    mov rsi, newline
    mov rdx, 1
    call print_string
    
    ; Exit
    mov rax, 60
    mov rdi, 0
    syscall

```

---

## 🔍 Детальний розбір коду по рядках

### 1. Секція даних (`section .data`)

Містить ініціалізовані змінні та текстові повідомлення, які завантажуються в пам'ять при запуску.

* **`a dd 15` / `b dd 4**`: Змінні типу Double Word (4 байти / 32 біти) зі значеннями 15 та 4.
* **`add_msg db ...`**: Текст повідомлення для операцій.
* **`add_len equ $ - add_msg`**: Автоматичний розрахунок довжини рядка (де `$` — поточна адреса пам'яті).
* **`newline db 10`**: Символ перенесення рядка (`\n`, ASCII код 10).

### 2. Секція неініціалізованих даних (`section .bss`)

* **`num_buffer resb 12`**: Резервує 12 байтів у пам'яті для тимчасового збереження числа у вигляді текстового рядка (перед виводом на екран).

### 3. Секція коду та точка входу (`section .text`, `_start`)

* **`global _start`**: Головна точка входу в програму для компонувальника (linker) у Linux.

### 4. Функція `num_to_string`

Перетворює число з регістру `rax` у пообідовий ASCII-рядок.

* Створює стек (`push rbp`, `mov rbp, rsp`) та зберігає регістри `rbx`, `rcx`.
* Використовує цикл ділення на 10 (`div rbx`), отримуючи цифри числа з кінця.
* Додає зміщення `+ '0'` (`add dl, '0'`), щоб перетворити числову цифру в її символьний ASCII-еквівалент.
* Записує результат у буфер справа наліво.

### 5. Функція `print_string`

Виводить рядок на екран через системний виклик ядра Linux.

* **`mov rax, 1`**: Системний номер функції `sys_write`.
* **`mov rdi, 1`**: Дескриптор `stdout` (екран).
* **`syscall`**: Передача управління ядру.

### 6. Головна логіка (`_start`)

Послідовно виконує обчислення:

* **Addition (`add`)**: Додавання `15 + 4`.
* **Subtraction (`sub`)**: Віднімання `15 - 4`.
* **Multiplication (`imul`)**: Множення `15 * 4`.
* **Division (`idiv`)**: Цілочисельне ділення `15 / 4` (результат в `eax`).
* **Modulus**: Отримання залишку від ділення (береться з регістру `rdx` після `idiv`).
* **Power**: Піднесення до квадрату шляхом множення `imul eax, eax`.

### 7. Завершення програми (Exit)

* **`mov rax, 60`**: Системний виклик `sys_exit`.
* **`mov rdi, 0`**: Код успішного завершення (`EXIT_SUCCESS`).
* **`syscall`**: Зупинка процесу.

---

## 🛠️ Як зібрати та запустити в Linux

Виконайте ці команди в терміналі:

```bash
# 1. Зібрати асемблерний код в об'єктний файл
nasm -f elf64 main.asm -o main.o

# 2. Зв'язати об'єктний файл у виконуваний файл
ld main.o -o math_program

# 3. Запустити програму
./math_program

```

```

```