window.onload = function() {
  html = '';
  arDays = [0, 1, 2, 3, 4, 5, 6];

  for (var i = 0; i < arDays.length; i++) {
    //showDay('+i+');
    button = document.createElement('button');
    button.setAttribute('onclick', 'showDay('+i+')');
    button.innerHTML = 'Dia ' + (i + 1);
    button.setAttribute('class', 'btn');
    document.getElementById('days').appendChild(button);
  }
}


function showDay(day) {
  
  requests = [
    'Sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:',
  ];

  questions = [    
    "<p class='comments'>//Declaração de variáveis</p>"+
    "<p class='code'>"+
    "  <pre class='tab0'><em class='var'>let</em> numeroUm = 1; </pre>"+
    "  <pre class='tab0'><em class='var'>let</em> stringUm = '1';</pre>"+
    "  <pre class='tab0'><em class='var'>let</em> numeroTrinta = 30;</pre>"+
    "  <pre class='tab0'><em class='var'>let</em> stringTrinta = '30';</pre>"+
    "  <pre class='tab0'><em class='var'>let</em> numeroDez = 10;</pre>"+
    "  <pre class='tab0'><em class='var'>let</em> stringDez = '10';</pre>"+
    "</p>"+
    "<p class='comments'>//Código de comparação</p>"+
    "<p class='code'>"+
    "  <pre class='tab0'>if (<em style='color: red;'>COMPARAR O numeroUm e a stringUm</em>) {</pre>"+
    "  <pre class='tab1'>console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');</pre>"+
    "  <pre class='tab0'>} else {</pre>"+
    "  <pre class='tab1'>console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');</pre>"+
    "  <pre class='tab0'>}</pre>"+
    ""+
    "  <pre class='tab0'>if (<em style='color: red;'>COMPARAR O numeroTrinta e a stringTrinta</em>) {</pre>"+
    "  <pre class='tab1'>console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo');</pre>"+
    "  <pre class='tab0'>} else {</pre>"+
    "  <pre class='tab1'>console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');</pre>"+
    "  <pre class='tab0'>}</pre>"+
    ""+
    "  <pre class='tab0'>if (<em style='color: red;'>COMPARAR O numeroDez e a stringDez</em>) {</pre>"+
    "  <pre class='tab1'>console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')</pre>"+
    "  <pre class='tab0'>} else {</pre>"+
    "  <pre class='tab1'>console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')</pre>"+
    "  <pre class='tab0'>}</pre>"+
    "</p>"
  ];

  answers = [
    "<p class='comments'>//Declaração de variáveis</p>"+
    "<p class='code'>"+
    "  <pre class='tab0'><em class='var'>let</em> numeroUm = 1; </pre>"+
    "  <pre class='tab0'><em class='var'>let</em> stringUm = '1';</pre>"+
    "  <pre class='tab0'><em class='var'>let</em> numeroTrinta = 30;</pre>"+
    "  <pre class='tab0'><em class='var'>let</em> stringTrinta = '30';</pre>"+
    "  <pre class='tab0'><em class='var'>let</em> numeroDez = 10;</pre>"+
    "  <pre class='tab0'><em class='var'>let</em> stringDez = '10';</pre>"+
    "</p>"+
    "<p class='comments'>//Código de comparação</p>"+
    "<p class='code'>"+
    "  <pre class='tab0'>if (<em style='color: red;'>numeroUm == stringUm</em>) {</pre>"+
    "  <pre class='tab1'>console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');</pre>"+
    "  <pre class='tab0'>} else {</pre>"+
    "  <pre class='tab1'>console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');</pre>"+
    "  <pre class='tab0'>}</pre>"+
    ""+
    "  <pre class='tab0'>if (<em style='color: red;'>numeroTrinta === stringTrinta</em>) {</pre>"+
    "  <pre class='tab1'>console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo');</pre>"+
    "  <pre class='tab0'>} else {</pre>"+
    "  <pre class='tab1'>console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');</pre>"+
    "  <pre class='tab0'>}</pre>"+
    ""+
    "  <pre class='tab0'>if (<em style='color: red;'>numeroDez == stringDez</em>) {</pre>"+
    "  <pre class='tab1'>console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')</pre>"+
    "  <pre class='tab0'>} else {</pre>"+
    "  <pre class='tab1'>console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')</pre>"+
    "  <pre class='tab0'>}</pre>"+
    "</p>"
  ];
  
  //questão
  document.getElementById('request').innerHTML = requests[day] != null ? requests[day] : 'Não há tarefas para este dia.';
  document.getElementsByClassName('text_code')[0].innerHTML = questions[day] != null ? questions[day] : 'Não há questões para este dia.';

  //resposta  
  document.getElementById('response').innerHTML = requests[day] != null ? getJSResponse(day) : 'Não há tarefas para este dia.';
  document.getElementsByClassName('text_code')[1].innerHTML = answers[day] != null ? answers[day] : 'Resposta ainda não cadastrada.';
}


function getJSResponse(day){
  if(day == 0){
    let numeroUm = 1;
    let stringUm = '1';
    let numeroTrinta = 30;
    let stringTrinta = '30';
    let numeroDez = 10;
    let stringDez = '10';

    html = '';
    if (stringUm == numeroUm) {
      html += '(Primeiro IF) As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes';
    } else {
      html += '(Primeiro IF) As variáveis numeroUm e stringUm não tem o mesmo valor';
    }
    html += '<br>';
    if (numeroTrinta === stringTrinta) {
      html += '(Segundo IF) As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo';
    } else {
      html += '(Segundo IF) As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo';
    }
    html += '<br>';
    
    if (numeroDez == stringDez) {
      html += '(Terceiro IF) As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes';
    } else {
      html += '(Terceiro IF) As variáveis numeroDez e stringDez não tem o mesmo valor';
    }
    html += '<br>';

    return html;
  }
}
