console.log('');

console.log('Seja Bem Vindo ao Desafio do Felipão.');
console.log('');

let nomeDoHeroi = 'Felipão';
let nivelDoHeroi = 100;
let classificacao;
const levelBoss = 1000;

console.log(`O Herói **${nomeDoHeroi}** está com **XP ${nivelDoHeroi}**.`);

console.log('');
console.log('###### Hora da Batalha! ######');
console.log('');


for (let i = 100; i <= 1300; i += 100) {
    nivelDoHeroi = i;
    console.log(`O Herói ${nomeDoHeroi} ganhou + 100 XP: Total ${i}`);
}

nivelDoHeroi += levelBoss;

console.log('');

console.log(`O Herói ${nomeDoHeroi}, matou o Boss, ganhou + ${levelBoss} XP: Total ${nivelDoHeroi}`);

console.log('');

if (nivelDoHeroi < 1000) {
    classificacao = "Ferro";
} else if (nivelDoHeroi > 1001 && nivelDoHeroi < 2000) {
    classificacao = "Bronze";
} else if (nivelDoHeroi > 2001 && nivelDoHeroi < 5000) {
    classificacao = "Prata";
} else if (nivelDoHeroi > 5001 && nivelDoHeroi < 7000) {
    classificacao = "Ouro";
} else if (nivelDoHeroi > 7001 && nivelDoHeroi < 8000) {
    classificacao = "Platina";
} else if (nivelDoHeroi > 8001 && nivelDoHeroi < 9000) {
    classificacao = "Ascendente";
} else if (nivelDoHeroi > 9001 && nivelDoHeroi < 10000) {
    classificacao = "Imortal";
} else {
    classificacao = "Radiante";
}


console.log(`O Herói de NOME **${nomeDoHeroi}** está com **XP ${nivelDoHeroi}**, classificado como **${classificacao}**.`);





