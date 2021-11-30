var btn = document.querySelector('#btn');
var price = document.querySelector('.price');
var quantity = document.querySelector('.quantity');
var currentprice = document.querySelector('.current-price');

btn.addEventListener('click',outPut);

function outPut(){
    var priceValue = parseInt(price.value);
    var quantityValue = parseInt(quantity.value);
    var currentValue = parseInt(currentprice.value);
    var output = document.querySelector('#output');

    var totalCP=(priceValue*quantityValue);
    var totalSP=(currentValue*quantityValue);

    var profit,profitPrcnt,loss,lossPrcnt;
    if(totalSP>totalCP){
        profit=(totalSP-totalCP);
        profitPrcnt=(profit/totalCP)*100;
        output.innerText=`You gained ${profitPrcnt.toFixed(2)}% Your total profit is ₹ ${profit}`;

    }else if(totalSP<totalCP){
        loss=(totalCP-totalSP);
        lossPrcnt=(loss/totalCP)*100;
        output.innerText=`You lost ${lossPrcnt.toFixed(2)}%. Your total loss is ₹ ${loss}`;
    }else{
        output.innerText=`You gained 0.00%. Your total profit is ₹ 0.00`;

    }

}