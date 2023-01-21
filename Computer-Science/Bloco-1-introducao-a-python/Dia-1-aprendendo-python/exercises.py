# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def higherNumber(n1, n2):
    print(max([n1, n2]))


higherNumber(50, 15)


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def arithmeticAverage(list):
    numbersSumResult = 0
    for n in list:
        numbersSumResult += n
    print(numbersSumResult / len(list))


arithmeticAverage(range(0, 100))

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def printSquare(number):
    n = 0
    while n < number:
        print(number * "*")
        n += 1


printSquare(10)


# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres


def lowestCharactersName(nameList):
    print(min([len(name) for name in nameList]))


nameList = ["Leonardo", "Guimarães", "Urci"]
lowestCharactersName(nameList)