function headphone() {
    var head = document.getElementById("headphone").src;
    var an = head.length;
    head = head.slice(22, an);
    console.log(document.getElementById("icon"));
    // console.log(head);
    document.getElementById("icon").src = "assets/headphoneICON.jpg";
}