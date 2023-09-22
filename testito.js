document.getElementById('no').addEventListener("mouseover", moveButton);
document.getElementById('yes').addEventListener("click", function(){
    document.getElementById('feedback').innerHTML = "Lo sabía eheheh";
    document.querySelector('#container').removeChild(document.querySelector('#buttons'));
    var image = document.createElement("img");
    image.src = "https://pbs.twimg.com/media/DNi7bAgV4AEcfQM?format=jpg&name=small";
    document.getElementById("foto").appendChild(image);
    
})

function moveButton(){
    let x = Math.floor((Math.random() * 200) + 1);
    let y = Math.floor((Math.random() * 200) + 1);
    x *= Math.round(Math.random()) ? 1 : -1;
    y *= Math.round(Math.random()) ? 1 : -1;

    let buttonMv = document.getElementById('no');
    buttonMv.style.transform = `translate(${x}px, ${y}px)`;

}