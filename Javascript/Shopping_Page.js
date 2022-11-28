window.onload = pageLoad;

function pageLoad(){

    fetch('JSON/Goods_List.json')
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        appendData(data)
    })

    for (var j = 0; j < 9; j++){
        document.getElementById("Amount_in_Cart" + j).value = 0;
    }
}

function Clear_Cart(){
    for (var k = 0; k < 9; k++){
        document.getElementById("Amount_in_Cart" + k).value = 0;
    }
    Calculate_Price();
}

function Checkout(){
    var Paid = document.getElementById("Cart_Total_Number").innerHTML;
    alert("You paid " + Paid + " Baht. Thank you for shopping.")
}

function Calculate_Price(){

    var pp = document.querySelectorAll(".Price_of_Product");

    for(var i = 0; i < pp.length; i++){
        var priceText = document.getElementById("Price_Text" + i).innerHTML;
        // var Price_in_Number = parseInt(priceText);
        // console.log(priceText);

        var amountText = document.getElementById("Amount_in_Cart" + i).value;
        // console.log(amountText);

        if(amountText < 0){
            document.getElementById("Amount_in_Cart" + i).value = 0;
            amountText = 0;
        }


        // var pp = document.querySelectorAll(".Price_of_Product");
        // // console.log(pp);
        // // console.log(pp[i].innerText);

        // var ppp = pp[i].innerText;
        // // console.log(ppp[0],ppp[1], ppp[2],ppp[3]);

        // var Price_in_Number = parseInt(ppp[0].concat(ppp[1]));
        // console.log(Price_in_Number);


        var total = parseInt(priceText) * parseInt(amountText);

        document.getElementById("Total_Text" + i).innerHTML = total;

        totalText = total;
        console.log(totalText);
    }

    var CartSubNumber = document.getElementById("Cart_Subtotal_Number").innerHTML;
    CartSubNumber = 0;
    
    for (var k = 0; k < 9; k++){
        CartSubNumber = CartSubNumber + parseInt(document.getElementById("Total_Text" + k).innerHTML);
    }

    document.getElementById("Cart_Subtotal_Number").innerHTML = CartSubNumber;
    document.getElementById("Cart_Tax_Number").innerHTML = Math.round(CartSubNumber * (0.07));
    document.getElementById("Cart_Total_Number").innerHTML = CartSubNumber + parseFloat(document.getElementById("Cart_Tax_Number").innerHTML);

    
    // console.log(CartSubNumber);



    // var priceText = document.getElementById("Price_Text").innerHTML;
    // console.log(priceText);

    // var pp = document.querySelectorAll(".Price_of_Product");
    // console.log(pp);
    // console.log(pp[1].innerText);

    // var ppp = pp[0].innerText;
    // console.log(ppp[0],ppp[1], ppp[2],ppp[3]);

    // var pppp = parseInt(ppp[0].concat(ppp[1]));
    // console.log(pppp);






    // var amountText = document.getElementById("Amount_in_Cart").value;
    // console.log(amountText);

    // var total = parseInt(priceText) * parseInt(amountText);

    // document.getElementById("Total_Text").innerHTML = total;

    // totalText = total;
    // console.log(totalText);

}
    


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