# Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:
# PEDRO

# SAÍDA:

# PEDRO
# PEDR
# PED
# PE
# P

name = input("Digite seu nome: ")

splited_name = list(name)

name_rest = ""
while len(splited_name) != 0:
    for letter in splited_name:
        name_rest += letter
    print(name_rest)
    name_rest = ''
    splited_name.pop()


