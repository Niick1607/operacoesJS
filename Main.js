const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual operação você deseja efetuar? ("+", "-", "*", "/"): ', (conta) => {
    rl.question('Coloque o primeiro numero: ', (num1) => {
        rl.question('Coloque o segundo numero: ', (num2) => {
            let resultado;
            if (conta === '+') {
                resultado = parseFloat(num1) + parseFloat(num2);
            } else if (conta === '-') {
                resultado = parseFloat(num1) - parseFloat(num2);
            } else if (conta === '*') {
                resultado = parseFloat(num1) * parseFloat(num2);
            } else if (conta === '/') {
                resultado = parseFloat(num1) / parseFloat(num2);
            }

            console.log(`${num1}${conta}${num2} = ${resultado}!`);
            rl.close();
        });
    });
});