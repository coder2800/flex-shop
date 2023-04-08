// Get the URL parameter "product"
const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url');
const pname = urlParams.get('name');
const price = urlParams.get('price');

document.getElementById('imgurl').src = url;
document.getElementById('name').innerHTML = pname;
document.getElementById('price').innerHTML = "&#8377 " + price;