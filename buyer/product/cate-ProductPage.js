
const params = new URLSearchParams(window.location.search);
const product = params.get('product');
console.log("Hi this params: ",params);

if(product == 'phone'){
    document.getElementById('brand-img1').src = '../../assets/mobile1.png';
    document.getElementById('brand-img2').src = '../../assets/mobile2.jpg'
    document.getElementById('brand-img3').src = '../../assets/mobile3.webp'
    document.getElementById('brand-img4').src = '../../assets/mobile4.jpg'

    document.getElementById('brand1').innerHTML = "POCO M3 Pro 5G (Cool Blue, 64 GB) (4 GB RAM)";
    document.getElementById('brand2').innerHTML = "OnePlus 8 Glacial Green,​ 5G Unlocked Android Smartphone U.S Version, 8GB RAM+128GB Storage";
    document.getElementById('brand3').innerHTML = "Apple iPhone 12 Pro Max (128GB, Graphite) [Locked] + Carrier Subscription";
    document.getElementById('brand4').innerHTML = "OPPO Reno4 Z 5G Dual SIM Smartphone, 6.57 Inch 120Hz Ultra HD Display";
}
else if(product == 'laptop'){
    document.getElementById('brand-img1').src = '../../assets/Laptop1.jpg'
    document.getElementById('brand-img2').src = '../../assets/Laptop2.jpg'
    document.getElementById('brand-img3').src = '../../assets/Laptop3.jpg'
    document.getElementById('brand-img4').src = '../../assets/Laptop4.jpg'

    document.getElementById('brand1').innerHTML = "HP Pavilion x360 Touchscreen 2-in-1 FHD 14'(35.56cms)";
    document.getElementById('brand2').innerHTML = "Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 15.6";
    document.getElementById('brand3').innerHTML = "Acer Aspire 7 Laptop, 15.6' Full HD IPS Display, AMD Ryzen 5 3550H";
    document.getElementById('brand4').innerHTML = "Apple MacBook Pro (13.3-inch/33.78 cm and Apple M1 chip with 8‑core CPU)";
}
else if(product == 'cloth'){
    document.getElementById('brand-img1').src = '../../assets/cloth1.jpg'
    document.getElementById('brand-img2').src = '../../assets/cloth2.jpg'
    document.getElementById('brand-img3').src = '../../assets/cloth3.jpg'
    document.getElementById('brand-img4').src = '../../assets/cloth4.jpg'

    document.getElementById('brand1').innerHTML = "Indian Women's Mustard Poly Silk Kurta";
    document.getElementById('brand2').innerHTML = "Essentials Men's Regular-fit Short-Sleeve Shirt";
    document.getElementById('brand3').innerHTML = "Women's Kanchipuram Silk Blend Party Wear Sari";
    document.getElementById('brand4').innerHTML = "Under Armour Men's Tech 2.0 Short-Sleeve T-Shirt ";
}
else{
    document.getElementById('brand-img1').src = '../../assets/tv1.jpg'
    document.getElementById('brand-img2').src = '../../assets/tv2.jpg'
    document.getElementById('brand-img3').src = '../../assets/tv3.jpg'
    document.getElementById('brand-img4').src = '../../assets/tv4.jpg'

    document.getElementById('brand1').innerHTML = "Sony X80J 55 Inch TV: 4K Ultra HD LED Smart Google TV with Dolby Vision HDR and Alexa Compatibility";
    document.getElementById('brand2').innerHTML = "Sony X90J 65 Inch TV: BRAVIA XR Full Array LED 4K Ultra HD Smart Google TV";
    document.getElementById('brand3').innerHTML = "LG 43UP8000PUA Alexa Built-in 43' 4K Smart UHD TV ";
    document.getElementById('brand4').innerHTML = "SAMSUNG 40-inch Class LED Smart FHD TV 1080P (UN40N5200AFXZA, 2019 Model)";
}

function brand1() {
    console.log("Brand 1");
    window.location.href = "ProductPage.html?url=mobile1.png&name=Poco&price=3000";
    var store1 = document.getElementById('brand1');
    console.log(store1);
    document.getElementById('name').innerHTML = store1;
}

function brand2() {
    console.log("Brand 2");
    window.location.href = "ProductPage.html";
    var store1 = document.getElementById('brand2');
    document.getElementById('name').innerHTML = "store1";
}

function brand3() {
    console.log("Brand 3");
    window.location.href = "ProductPage.html";
    var store1 = document.getElementById('brand3');
    document.getElementById('name').innerHTML = "store1";
}

function brand4() {
    console.log("Brand 4");
    window.location.href = "ProductPage.html";
    var store1 = document.getElementById('brand4');
    document.getElementById('name').innerHTML = "store1";
}