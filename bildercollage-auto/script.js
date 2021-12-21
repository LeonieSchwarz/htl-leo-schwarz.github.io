
let inputPic="";
for(let i =1 ; i < 16 ;i++ ){
    inputPic += `<img src="./img/snow${i}.jpg" alt="snow">`;
}

document.getElementById('content').innerHTML = inputPic;