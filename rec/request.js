function ativarRequest(){
    let pedido = new XMLHttpRequest();

    pedido.onload = function(){
        let txtDados = lerXML(this);
        document.getElementById("texto").innerHTML = txtDados;
    }
    pedido.open("POST","students.xml");
    pedido.send();

}

function lerXML(xml){
    let xmlDoc = xml.responseXML;
    let dadosXml = xmlDoc.getElementsByTagName("aluno");
    let txtDados = "Lista de Alunos<br>";

    for(let i = 0; i < dadosXml.length; i++){
        txtDados += dadosXml[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue + " <br>";
        txtDados += dadosXml[i].getElementsByTagName("rm")[0].childNodes[0].nodeValue + " <br>";
        txtDados += dadosXml[i].getElementsByTagName("curso")[0].childNodes[0].nodeValue + " <br>";
    }
    return(txtDados);
}