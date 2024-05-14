const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data.vide0-canvas]");
const mensagem = document.querySelector("[data-mensagen]");

botaoIniciarCamera.addEventListener("click", async function (){
    const iniciarVideo = await navigator.mediaDevices
    .getUserMedia({video:true, audio:false})

    botaoIniciarCamera.computedStyleMap.display = "none";
    campoCamera.computedStyleMap.display = "block";

    video.srcObject = iniciarVideo;
})

botaoTirarFoto.addEventListener("click", function(){
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.Width, canvas.height);

    imagemURL = canvas.toDataURL()
})