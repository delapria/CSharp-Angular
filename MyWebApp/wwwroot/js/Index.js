$(document).ready(function () {

    var $meuButton = $("#meu-button");
    $meuButton.on("click", function () {
        alert("Você não tem dinheiro");
    });

    var $precos = $(".preco-produto li");
    $precos.on("click", function () {
        alert($(this).text());
    });

    var $login = $("#login");
    var $popupForm = $(".popup-form");

    $login.on("click", function () {
        $popupForm.toggle(1000);
    });

});

//var meuForm = document.getElementById("meu-form");
//meuForm.hidden = true;



//funtion ExibirMensagem(){
//    alert("teste evento");
//}







