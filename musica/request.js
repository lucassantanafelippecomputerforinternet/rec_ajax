// A primeira linha é a função que ativa a requisição.
function ativarRequest(){
    // Na quarta linha é criada a variável pedido com o objeto XMLHttpRequest que trocará dados com o servidor.
    let pedido = new XMLHttpRequest();

    // Essa de número sete, essa função contém o código que será executado após receber o pedido.
    pedido.onload = function(){
        //  Essa função lê o XML. Ela retorna texto com dados lidos. o "this" é referência para o arquivo do "open".
        let txtDados = lerXML(this);
        // Essa linha de numero onze, o "p" é utilizado, ele é requerido pelo seu "id", e usa-se "innerHTML" para muda-lo para "txtDados".
        document.getElementById("texto").innerHTML = txtDados;
    }
    // Na linha quatorze, específica-se o tipo de envio, o tipo de arquivo de dados, e efetua o  envio na linha quinze.
    pedido.open("POST","music.xml");
    pedido.send();

}
// Na linha dezenove, tem a função de leitura xml.
function lerXML(xml){
    // Na linha vinte e um, é criada a variável "xmlDoc" que recebe o "responseXML".
    let xmlDoc = xml.responseXML;
    // Na linha vinte e três, pega a lista de alunos e armazena na variável "dadosXml".
    let dadosXml = xmlDoc.getElementsByTagName("musica");
    // Na linha vinte e cinco, a variável "txtDados" recebe "lista de alunos" para exibir na tela.
    let txtDados = "Lista de Músicas<br>";

    // No for, que está na linha vinte e oito, percorre-se a lista de alunos, e quarda os dados de cada aluno em "txtDados".
    for(let i = 0; i < dadosXml.length; i++){
        txtDados += dadosXml[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue + " <br>";
        txtDados += dadosXml[i].getElementsByTagName("artista")[0].childNodes[0].nodeValue + " <br>";
        txtDados += dadosXml[i].getElementsByTagName("gravadora")[0].childNodes[0].nodeValue + " <br>";
        txtDados += dadosXml[i].getElementsByTagName("genero")[0].childNodes[0].nodeValue + " <br>";
    }
    //Nessa linha retorna o "txtDados".
    return(txtDados);
}