//  ao digitar o numero fazer a tabuada dele

function contdown() {
    let yourDigit = +prompt(
      `Digite um numero, para receber a tabuada desse numero no console log`
    );
  for (let table = 1; table <= 10; table++) {
    const calculo = yourDigit * table;
    console.log(`${yourDigit} x ${table} = ${calculo}`);
  }
}
