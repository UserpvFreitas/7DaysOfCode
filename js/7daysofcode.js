requests = [
  'Sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:',
  'Sabe quando você se cadastra em um site e, logo em seguida, quando faz o seu login, ele já te chama pelo seu nome? É isso que você vai fazer no desafio de hoje!'+
  'Quando você cria algum sistema, site ou aplicativo, é comum querer colocar alguns toques personalizados para tornar a experiência na sua aplicação mais rica e dinâmica.'+
  'Fazer isso através da programação pode não ser uma tarefa muito fácil. Dependendo do nível de customização que você quiser implementar, a quantidade de código que você precisará escrever pode ser imensa.'+
  'Mas é claro que você pode começar de uma maneira mais simples. Para isso, o importante é entender como capturar e armazenar valores dentro de variáveis. E é nisso que eu vou te ajudar hoje!'+
  'Variáveis são os blocos básicos de construção de qualquer sistema e são essenciais para processar qualquer tipo de informação, seja ela de uma pessoa logada no sistema ou mesmo para exibir detalhes de produtos em um catálogo de e-commerce.',
  'Você alguma vez já jogou algum jogo que te desse mais de uma escolha e, dependendo do que você escolhesse, o destino do personagem seria totalmente diferente?'+
  'Hoje você vai desenvolver um exemplo assim com Javascript!'+
  'Eu quero que você trabalhe com estruturas de controle de fluxo. Esse jeito complicado de falar só quer dizer que, assim como nos jogos, a história que você montar precisa se adaptar às respostas dadas por quem está jogando.'+
  'Para isso, você vai precisar de algumas estruturas capazes de alterar o fluxo da aplicação, como for, while, if e else. Todas essas conseguem cumprir esse objetivo, dada uma certa condição.'+
  'O if e o else, que eu já te mostrei nos últimos dias, são capazes de criar ramificações dentro da aplicação para que seja tomada uma ou outra ação, dependendo da condição fornecida.'+
  'Os loops (como for e while) são capazes de fazer uma tarefa repetitiva se transformar em poucas linhas de código, independente de quantas vezes você precisar repetir aquela tarefa.'
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
  "</p>",
  "<p>Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:</p>"+
  "<ul>"+
  "<li>- Qual o seu nome?</li>"+
  "<li>- Quantos anos você tem?</li>"+
  "<li>- Qual linguagem de programação você está estudando?</li>"+
  "</ul>"+
  "<p>À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.</p>"+
  "<p>No final, o sistema vai exibir a mensagem:</p>"+
  "<p>Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!</p>"+
  "<p>Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.</p>",
  "<p>Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:"+
  "<ol>"+
  "<li>Se quer seguir para área de Front-End ou seguir para a área de Back-End.</li>"+
  "<li>Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.</li>"+
  "<li>Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.</li>"+
  "<li>Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.</li>"+
  "</ol>"+
  "<p>O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação."+
  "<p>Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado."


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
  "</p>",
  '<div class="form">'+
    '<h3>Entrada de dados do formulário</h3>'+
    '<form id="formDay2" action="" onsubmit="return false;">'+
      '<table>'+
        '<tr>'+
          '<td><label for="name">Nome: </label></td><td><input type="text" id="name"/></td>'+
        '</tr>'+
        '<tr>'+
        '<td><label for="age">Idade: </label></td><td><input type="text" id="age"/></td>'+
        '</tr>'+
        '<tr>'+
        '<td><label for="language">Linguagem de programação preferida: </label></td><td><input type="text" id="language"/></td>'+
        '</tr>'+        
      '</table>'+
      '<div class="container"><div id="divButton" class="child"></div></div>'+
    '</form>'+
  '</div>',
  '<div class="form">'+
    '<h3>Entrada de dados do formulário</h3>'+
    '<form id="formDay3" action="" onsubmit="return false;">'+
      '<table>'+
        '<tr>'+
          '<td><label for="stack">Qual área da carreira gostaria de prosseguir?</label></td>'+
          '<td><input type="radio" name="stacks" value="1"/>Front-End<br/><input type="radio" name="stacks" value="0"/>Back-End</td>'+
        '</tr>'+       
      '</table>'+
      '<div class="container"><div id="divButton" class="child"></div></div>'+
    '</form>'+
  '</div>'
];


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
  //questão
  document.getElementById('request').innerHTML = requests[day] != null ? requests[day] : 'Não há tarefas para este dia.';
  document.getElementsByClassName('text_code')[0].innerHTML = questions[day] != null ? questions[day] : 'Não há questões para este dia.';

  //resposta  
  document.getElementsByClassName('text_code')[1].innerHTML = answers[day] != null ? answers[day] : 'Resposta ainda não cadastrada.';
  document.getElementById('response').innerHTML = requests[day] != null ? getJSResponse(day) : 'Não há tarefas para este dia.';    
}


function getJSResponse(day){
  if(day == 0){
   return codeinResponse(); 
  }else{
    return formResponse(day);
  }
}

function codeinResponse(){
  let numeroUm = 1;
  let stringUm = '1';
  let numeroTrinta = 30;
  let stringTrinta = '30';
  let numeroDez = 10;
  let stringDez = '10';

  html = "<span class='message'>"+
          "<b>RESPOSTA</b>"+
        "</span><br/>";
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

function formResponse(day){
  //create a submit button
  let submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('id', 'submit');
  submit.setAttribute('onclick', 'return confirmData('+day+');');
  submit.innerHTML = 'Enviar';
  document.getElementById('divButton').appendChild(submit);
}

function confirmData(day){
  
  if(day == 1){
    html = "<span class='message'>"+
      "<b>RESPOSTA</b>"+
    "</span><br/>"+
    "<b>Nome: </b>"+document.getElementById('name').value+
    "<br/>"+
    "<b>Idade: </b>"+document.getElementById('age').value+
    "<br/>"+
    "<b>Linguagem de programação preferida: </b>"+document.getElementById('language').value+
    '<br/><br/>'+
    "<label for='additional_ask'>Você gosta de estudar "+document.getElementById('language').value+"?</label><br/>"+
    "<input type='radio' name='yes_no' value='1'/>Sim<br/>"+
    "<input type='radio' name='yes_no' value='0'/>Não"+
    "<br/>"+
    "<div id='info'></div>";
    
    document.getElementById('response').innerHTML = html;

    document.getElementsByName('yes_no')[0].addEventListener('change', function(){
      getChoice('yes_no');
    });

    document.getElementsByName('yes_no')[1].addEventListener('change', function(){
      getChoice('yes_no');
    });
  }else if(day == 2){
    var choosen = getChoice('stacks');
    
    if(choosen == "Front-End"){
      html = 
      "<label for='additional_ask'>Qual das stacks você quer aprender?</label><br/>"+
      "<input type='radio' name='tools' value='0'/>Vue<br/>"+
      "<input type='radio' name='tools' value='1'/>React"+      
      "<br/><br/>"+
      "<div id='info'></div>"
      ;
    }
    else if(choosen == "Back-End"){
      html = 
      "<label for='additional_ask'>Qual das stacks você quer aprender?</label><br/>"+
      "<input type='radio' name='tools' value='0'/>Java<br/>"+
      "<input type='radio' name='tools' value='1'/>C#"+      
      "<br/><br/>"+
      "<div id='info'></div>";
    }

    document.getElementById('response').innerHTML = html;

    document.getElementsByName('tools')[0].addEventListener('change', function(){
      getChoice('tools');
    });

    document.getElementsByName('tools')[1].addEventListener('change', function(){
      getChoice('tools');
    });
  }
  
}

function getChoice(type){  
  var radios = document.getElementsByName(type);
  
  let choice = "";
  for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        type == 'yes_no' || type == 'tools' || type == 'career_ask'
          ? getInfo(type, radios[i].value) 
          : choice = radios[i].value == 1 ? 'Front-End' : 'Back-End'
      }
  }

  return choice;
};

function getInfo(type, value){
  newTec = [];

  if(type ==  'yes_no'){
    document.getElementById('info').innerHTML = value == 1
      ? 'Muito bom! Continue estudando e você terá muito sucesso.' 
      : 'Ahh que pena... Já tentou aprender outras linguagens?';
  }else if (type == 'tools'){
    document.getElementById('info').innerHTML = 
    "<label for='additional_ask2'>O que deseja fazer agora?</label><br/>"+
    "<input type='radio' name='career_ask' value='0'/>Me desenvolver para ser um FullStack<br/>"+
    "<input type='radio' name='career_ask' value='1'/>Continuar especializando na stack escolhida..."+
    "<br/><br/>"+
    "<div id='newStacks'></div>";

    document.getElementsByName('career_ask')[0].addEventListener('change', function(){
      getChoice('career_ask');
    });

    document.getElementsByName('career_ask')[1].addEventListener('change', function(){
      getChoice('career_ask');
    });
  }else{
    if(value == 0){
      document.getElementById('newStacks').innerHTML += 
      "<label for='additional_ask3'>Quais novas tecnologias deseja aprender?</label><br/>"+
      "<input type='text' name='newTec'/><input id='btnAdd' type='button' value='Adicionar'/><br/>"+
      "<input id='finishAdd' type='button' value='Finalizar escolhas'/>"+
      "<br/><br/>"+
      "<div>Novas tecnologias que quero aprender"+
        "<ul id='newTecList'></ul>";
      "</div>";

      document.getElementById('btnAdd').addEventListener('click', function(){
        newTec.push(document.getElementsByName('newTec')[0].value);
        document.getElementsByName('newTec')[0].value = "";
        console.log(newTec);
      });

      document.getElementById('finishAdd').addEventListener('click', function(){
        html = '';
        newTec.forEach(function(item){
          html += '<li>'+item+'</li>';
        });
        document.getElementById('newTecList').innerHTML = html;
      });
    }else{
      alert('Obrigado por participar!');
    }
  }
  
  return;
}
