function cong() {
    let a = Number(document.getElementById("mot").value);
    let b = Number(document.getElementById("hai").value);
    let c = a + b;
    document.getElementById("hienthi").innerHTML= "Result: " + c;

}

function tru() {
    let a = Number(document.getElementById("mot").value);
    let b = Number(document.getElementById("hai").value);
    let c = a - b;
    document.getElementById("hienthi").innerHTML = "Result: "+ c;

}
function nhan() {
    let a = Number(document.getElementById("mot").value);
    let b = Number(document.getElementById("hai").value);
    let c = a* b;
    document.getElementById("hienthi").innerHTML = "Result: " +c;

}
function chia() {
    let a = Number(document.getElementById("mot").value);
    let b = Number(document.getElementById("hai").value);
    let c =  a / b;
    document.getElementById("hienthi").innerHTML = "Result: " + c;

}