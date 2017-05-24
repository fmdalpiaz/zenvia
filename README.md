# Zenvia
## Teste do processo seletivo

O objetivo desse repositório é apresentar uma solução para um dos problemas contidos no teste.
O problema escolhido foi o [Transformar números romanos](http://codingdojo.org/kata/RomanNumerals/)
Para tal, foi criado um módulo utilizando a linguagem _JavaScript_.

### Testando o módulo
1. abrir o arquivo /src/index.html
2. será exibida a tela de testes do _Jasmine_, framework utilizado para criação dos testes unitários
3. para utilizar o módulo, abra o console do browser e digite um dos seguintes comandos: `romamModule.convertToNumeral(r);` ou `romamModule.convertToRomam(n);`;
3.1. onde _r_ é o número romano que você deseja converter e _n_ é um número natural que você deseja converter
3.2. além disso, _r_ precisa ser uma _string_, ou seja, o valor precisa ser passado entre aspas, ex.: `romamModule.convertToNumeral('LXXXVI');`
3.3 já _n_ é um número inteiro maior que _0_ e pode ser chamado assim: `romamModule.convertToRomam(86);`
4. o módulo disponibiliza outras 4 funções auxiliares:
4.1 `romamModule.isEmpty(x)` que verifica se o parâmetro passado está vazio
4.2 `romamModule.isString(x)` para verificar se o parâmetro passado é do tipo string
4.3 `romamModule.hasOnlyRomamChars(x))` verifica se o parâmetro passado contém apenas caracteres de números romanos
4.4 `romamModule.isNaturalBiggerThanZero(x))` verifica se o parâmetro passado é um número natural maior que 0

