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