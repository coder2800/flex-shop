// Get the URL parameter "product"
const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url');
const pname = urlParams.get('name');
const price = urlParams.get('price');

document.getElementById('imgurl').src = url;
document.getElementById('name').innerHTML = pname;
document.getElementById('price').innerHTML = "&#8377 " + price;

document.getElementById('add-to-cart').addEventListener('click',function(){
    let cartItems = [];

    // Check if cart data exists in local storage and load it
    if(localStorage.getItem('cart')) {
        cartItems = JSON.parse(localStorage.getItem('cart'));
    }
  
    const item = {
        url: url,
        pname: pname,
        price: price
    };
    
    cartItems.push(item);
    localStorage.setItem('cart', JSON.stringify(cartItems));
});
