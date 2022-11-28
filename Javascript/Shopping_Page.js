window.onload = pageLoad;

function pageLoad(){

    fetch('JSON/Goods_List.json')
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        appendData(data)
    })

}

var textt = document.getElementById("Total_Text").innerHTML;
console.log(textt);


    
function appendData(data){
    
    for(var i = 0; i < data.length; i++){
        var container = document.getElementById("slot" + [i+1]);

        var img = document.createElement("img");
        var text = document.createElement("h2");
        
        img.src = data[i].pic;
        text.innerHTML = data[i].name;
        
        container.appendChild(img);
        container.appendChild(text);
    }

    

    // for(var i = 0; i < data.length; i++){
    //     var container = document.getElementById("slot2" + [i+1]);

    //     var img = document.createElement("img");
    //     var text = document.createElement("h2");
    //     var price = document.createElement("h3");
        
    //     img.src = data[i].pic;
    //     text.innerHTML = data[i].name;
    //     price.innerHTML = data[i].price;
        
    //     container.appendChild(img);
    //     container.appendChild(text);
    //     container.appendChild(price);
    // }
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



































// const PreviewContainer = document.querySelector(".Preview_Container");
// var PreviewBox = PreviewContainer.querySelectorAll(".Preview");

// document.querySelectorAll(".container .Goods").forEach(Goods => {
//     Goods.onclick = () => {
//         PreviewContainer.style.display = 'flex';
//         let name = Goods.getAttribute('data-name');
//         PreviewBox.forEach(preview => {
//             let target = preview.getAttribute('data-target');
//             if (name == target){
//                 preview.classList.add('active');
//             }
//         });
//     };
// });

// PreviewBox.forEach(close => {
//     close.querySelector('#Close').onclick = () => {
//         close.classList.remove('active');
//         PreviewContainer.style.display = 'none';
//     }
// });