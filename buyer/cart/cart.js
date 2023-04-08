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