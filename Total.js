function Tinhdiem() {
    let math  = +document.getElementById("Math").value;
    let liter = +document.getElementById("Liter").value;
    let eng   = +document.getElementById("Eng").value;
    let place = document.getElementById("Place").value;
    let area;
    switch (place) {

        case "1":
            area = 0.75;
            break;
        case "2NT":
            area = 0.5;
            break;
        case "2":
            area = 0.25;
            break;
        case "3":
            area = 0;
            break;
    } 
    let sum = math + liter + eng + area;
    document.getElementById("result").innerHTML ="Tổng điểm ĐH khối D của bạn là: "  + sum;
}