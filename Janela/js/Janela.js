let bnt = document.getElementById('btn-info');

bnt.addEventListener('click', function abrirJanela(){
    let janela = document.getElementById('details');


    if(janela.classList.contains("details")){
        janela.classList.remove("details");
        janela.classList.add("abrirJanela");
    }else{
        janela.classList.remove("abrirJanela");
        janela.classList.add("details")
    }
})