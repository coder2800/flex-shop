const cartItems = JSON.parse(localStorage.getItem('cart'));
const cartContainer = document.getElementById('add-products');

if(cartItems){
    cartItems.forEach(item =>{
        // console.log(item[url]," ",item[pname]," ",item[price]);
        console.log("Over");
        const row = document.createElement('tr');
        const header = document.createElement('th');
        row.appendChild(header);

        const cartImgTag = document.createElement('div');
        header.appendChild(cartImgTag);

        const cartImg = document.createElement('img');
        cartImg.src = item['url'];
        cartImgTag.appendChild(cartImg);
        
        const namecontainer = document.createElement('div');
        cartImg.appendChild(namecontainer);
        cartImgTag.appendChild(namecontainer);

        const pname = document.createElement('p');
        pname.innerHTML = item['pname'];        
        namecontainer.appendChild(pname);

        const removeitem = document.createElement('a');
        removeitem.textContent = 'Remove from Cart';
        removeitem.addEventListener('click', function() {
            removeFromStorage(item);
            updateCartOnClickRemoveFromCart();
            row.remove();
            updateCartTotal();
            // if
          });

        namecontainer.appendChild(removeitem);     
        
        const tdElement = document.createElement('td');
        const inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'number');
        inputElement.setAttribute('name', 'quantity');
        inputElement.setAttribute('value', '1');
        tdElement.appendChild(inputElement);

        const tdPrice = document.createElement('td');
        tdPrice.innerHTML = "&#8377 " + item['price'];
        row.appendChild(tdElement);
        row.appendChild(tdPrice);

        cartContainer.appendChild(row);
    })
}

var cartCount,cartSize;

window.onload = function() {
    var getCartItems = JSON.parse(localStorage.getItem('cart'));
    cartSize = getCartItems.length;
    if(getCartItems && cartSize != null){
        var iframe = document.getElementsByClassName('header')[0];
        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        cartCount = innerDoc.getElementById('cart-item');
        cartCount.innerHTML = cartSize;
    }
  }

function updateCartTotal() {
    var subtotal = document.getElementById('subtotal');
    var gst = document.getElementById('gst');
    var total = document.getElementById('totalprice');
    var payButton = document.getElementById('Pay');

    if(cartItems && cartItems.length > 0){
        let sum = 0, gstPrice = 2000;
        if(cartItems){
            cartItems.forEach(item =>{
                sum += parseInt(item['price']);
                console.log(typeof(item['price']));
            })
        }
        var tp = sum + gstPrice;
        subtotal.innerHTML = "&#8377 " + sum.toString();
        gst.innerHTML = "&#8377 " + gstPrice.toString();
        total.innerHTML = "&#8377 " + tp.toString();
    }
    else{
        subtotal.innerHTML = "0";
        gst.innerHTML = "0";
        total.innerHTML = "Nothing to Pay";
        payButton.disabled = true;
    }

};

updateCartTotal();

function removeFromStorage(item) {
    const index = cartItems.indexOf(item);
    if(index > -1) {
      cartItems.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }

function updateCartOnClickRemoveFromCart() {
    var getCartItems = JSON.parse(localStorage.getItem('cart'));
    cartSize = getCartItems.length;
    cartCount.innerHTML = cartSize;
}