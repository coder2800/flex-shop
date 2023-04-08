// Get the URL parameter "product"
const urlParams = new URLSearchParams(window.location.search);
const product = urlParams.get('product');

// An object that maps product names to image URLs
const productImages = {
    phones: ['mobile1.png', 'mobile2.jpg', 'mobile3.webp','mobile4.jpg'],
    laptops: ['Laptop1.jpg', 'Laptop2.jpg', 'Laptop3.jpg','Laptop4.jpg'],
    cloths: ['cloth1.jpg', 'cloth2.jpg', 'cloth3.jpg','cloth4.jpg'],
    tvs: ['tv1.jpg','tv2.jpg','tv3.jpg','tv4.jpg']
};

const productName = {
    phones: ['POCO M3 Pro 5G (Cool Blue, 64 GB) (4 GB RAM)',
            'OnePlus 8 Glacial Green,​ 5G Unlocked Android Smartphone U.S Version, 8GB RAM+128GB Storage',
            'Apple iPhone 12 Pro Max (128GB, Graphite) [Locked] + Carrier Subscription',
            'OPPO Reno4 Z 5G Dual SIM Smartphone, 6.57 Inch 120Hz Ultra HD Display'],
    laptops: ['HP Pavilion x360 Touchscreen 2-in-1 FHD 14\'(35.56cms)',
            'Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 15.6',
            'Acer Aspire 7 Laptop, 15.6\' Full HD IPS Display, AMD Ryzen 5 3550H',
            'Apple MacBook Pro (13.3-inch/33.78 cm and Apple M1 chip with 8‑core CPU)'],
    cloths: ['Indian Women\'s Mustard Poly Silk Kurta',
            'Essentials Men\'s Regular-fit Short-Sleeve Shirt',
            'Women\'s Kanchipuram Silk Blend Party Wear Sari',
            'Under Armour Men\'s Tech 2.0 Short-Sleeve T-Shirt'],
    tvs:    ['Sony X80J 55 Inch TV: 4K Ultra HD LED Smart Google TV with Dolby Vision HDR and Alexa Compatibility',
            'Sony X90J 65 Inch TV: BRAVIA XR Full Array LED 4K Ultra HD Smart Google TV',
            'LG 43UP8000PUA Alexa Built-in 43\' 4K Smart UHD TV',
            'SAMSUNG 40-inch Class LED Smart FHD TV 1080P (UN40N5200AFXZA, 2019 Model)']
}

const productPrice = {
    phones: [11000,18000,15000,25000],
    laptops: [57000,60000,75000,56000],
    cloths: [8000,4000,2000,4000],
    tvs: [30000,52000,45000,48000]
}

const productContainer = document.getElementById('inside-grid');

const images = productImages[product];
const pnames = productName[product];
const prices = productPrice[product];

var eleSize = 4;

if(images) {
   for(var i=0;i<eleSize;i++) {
        images[i] = "../../assets/" + images[i];
   }
}

for(var i=0;i<eleSize;i++) {
    const item = document.createElement('div');
    item.classList.add('items');

    const imgElement = document.createElement('img');
    imgElement.src = images[i];
    item.appendChild(imgElement);
    
    const pnameElement = document.createElement('div');
    pnameElement.innerHTML = pnames[i];
    pnameElement.classList.add('brand-name');
    pnameElement.setAttribute('url-data',images[i]);
    pnameElement.setAttribute('name-data',pnames[i]);
    pnameElement.setAttribute('price-data',prices[i]);

    console.log(images[i]);

    pnameElement.addEventListener('click', function(){
        const urldata = this.getAttribute('url-data');
        const namedata = this.getAttribute('name-data');
        const pricedata = this.getAttribute('price-data');
        window.location.href = `ProductPage.html?url=${urldata}&name=${namedata}&price=${pricedata}`;
    })

    item.appendChild(pnameElement);

    const mrp = document.createElement('div');
    mrp.classList.add('MRP');
    item.appendChild(mrp);

    const price = document.createElement('div');
    price.innerHTML = "Price: ";
    price.classList.add('brand-price');
    mrp.appendChild(price);
    
    const priceEle = document.createElement('div');
    priceEle.innerHTML = prices[i];
    priceEle.classList.add('price');
    mrp.appendChild(priceEle);

    productContainer.appendChild(item);
}
