const fatorial = n => {
    let num = 1;
    for (let i = n; i > 1; i -= 1) {
        num *= i;
    }
    return num;
}
console.log(fatorial(4));

console.log('----------------------- Fazendo fatorial com ternary operator -----------------------');

const fatorialTernary = n => n > 1 ? `${n * fatorialTernary(n - 1)}` : 1 ;
console.log(fatorialTernary(10));

//Tive dificuldade pra entender isso daqui, acabei pesquisando um pouco pra tentar entender melhor, eu estava complicando muito um código bem simples, preciso treinar mais minha lógica;