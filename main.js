var reconocedorVoz = window.webkitSpeechRecognition;
var reconocedor = new reconocedorVoz();
var Textbox = document.getElementById("textbox");

function start(){
    document.getElementById("microfono").src="speak.gif";
    document.getElementById("textbox").innerHTML = "";
    reconocedor.start();
    setTimeout(function(){
        document.getElementById("microfono").src="mic.png";
    }, 4000);
}

reconocedor.onresult = function(event) {
    console.log(event);

    var Contenido = event.results[0] [0].transcript;
    document.getElementById("textbox").innerHTML=Contenido;
    console.log(Contenido);
}

function speak(){
    var habla = window.speechSynthesis;
    speak_data ="Tu selfie se tomara en tres segundos";
    var diEsto = new SpeechSynthesisUtterance(speak_data);
    diEsto.pitch = 10;
    diEsto.volume = 0.4;
    habla.speak(diEsto);
}