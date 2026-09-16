const inputBase = document.getElementById("inputBase");
const outputBase = document.getElementById("OutputBase");
const inputNum = document.getElementById("inputBaseValue");
const outputNum = document.getElementById("OutputBaseValue");
function Convert() {
    //Binary to Decimal
    if (inputBase.value === "Binary" && outputBase.value === "Decimal") {
        outputNum.value = BtoD(inputNum.value);
    }
    
    //Binary to Binary
    else if (inputBase.value === "Binary" && outputBase.value === "Binary") {
        outputNum.value = BtoB(inputNum.value);
    }
    //Binary to Hex
    else if (inputBase.value === "Binary" && outputBase.value === "HexaDecimal") {
        outputNum.value = BtoH(inputNum.value);
    }
    //Binary to Octal
    else if (inputBase.value === "Binary" && outputBase.value === "Octal") {
        outputNum.value = BtoO(inputNum.value);
    }
    //Decimal to Binary
    else if (inputBase.value === "Decimal" && outputBase.value === "Binary") {
        outputNum.value = DtoB(inputNum.value);
    }
    //Decimal to HexaDecimal
    else if (inputBase.value === "Decimal" && outputBase.value === "HexaDecimal") {
        outputNum.value = DtoH(inputNum.value);
    }
    //Decimal to Octal
    else if (inputBase.value === "Decimal" && outputBase.value === "Octal") {
        outputNum.value = DtoO(inputNum.value);
    }
    //Decimal to Decimal
    else if (inputBase.value === "Decimal" && outputBase.value === "Decimal") {
        outputNum.value = DtoD(inputNum.value);
    }
    //HexaDecimal to Decimal
    else if (inputBase.value === "HexaDecimal" && outputBase.value === "Decimal") {
        outputNum.value = HtoD(inputNum.value);
    }
    //HexaDecimal to Binary
    else if (inputBase.value === "HexaDecimal" && outputBase.value === "Binary") {
        outputNum.value = HtoB(inputNum.value);
    }
    //HexaDecimal to Octal
    else if (inputBase.value === "HexaDecimal" && outputBase.value === "Octal") {
        outputNum.value = HtoO(inputNum.value);
    }
    //HexaDecimal to HexaDecimal
    else if (inputBase.value === "HexaDecimal" && outputBase.value === "HexaDecimal") {
        outputNum.value = HtoH(inputNum.value);
    }
    //Octal to Octal
    else if (inputBase.value === "Octal" && outputBase.value === "Octal") {
        outputNum.value = OtoO(inputNum.value);
    }
    //Octal to HexaDecimal
    else if (inputBase.value === "Octal" && outputBase.value === "HexaDecimal") {
        outputNum.value = OtoH(inputNum.value);
    }
    //Octal Decimal
    else if (inputBase.value === "Octal" && outputBase.value === "Decimal") {
        outputNum.value = OtoD(inputNum.value);
    }
    //Octal to Binary
    else if (inputBase.value === "Octal" && outputBase.value === "Binary") {
        outputNum.value = OtoB(inputNum.value);
    }


}
function stringValidator(inum) {
    if (inum === "") {
        inputNum.value = "0";
        return "0";
    }
    else return inum;
}
//Binary to Radix(x);
//Binary to Binary just for fun
function BtoB(inum) {
    inum = stringValidator(inum);
    if (!/^[01]+$/.test(inum)) {
        outputNum.style.color = "red";
        return "Invalid Binary";
    }
    outputNum.style.color = "black";
    return inum;
}
//binary to decimal
function BtoD(inum) {
    inum = stringValidator(inum);
    if (!/^[01]+$/.test(inum)) {
        outputNum.style.color = "red";
        return "Invalid Binary";
    }
    outputNum.style.color = "black";
    inum = inum.trim();
    let ans = 0;
    inum = inum.split("").reverse().join("");
    for (let i = 0; i < inum.length; i++) {
        ans += (Number(inum[i])) * (2 ** i);
    }
    return String(ans);
}
//binary to HexaDecimal
function BtoH(inum) {
    inum = stringValidator(inum);
    if (!/^[01]+$/.test(inum)) {
        outputNum.style.color = "red";
        return "Invalid Binary";
    }
    outputNum.style.color = "black";
    inum = BtoD(inum);
    return DtoH(inum);

}
//Binary to Octal
function BtoO(inum) {
    inum = stringValidator(inum);
    if (!/^[01]+$/.test(inum)) {
        outputNum.style.color = "red";
        return "Invalid Binary";
    }
    outputNum.style.color = "black";
    inum = BtoD(inum);
    return DtoO(inum);
}
//Decimal to Radix(X);
//Decimal to HexaDecimal
function DtoH(inum) {
    inum = stringValidator(inum);
    if (!/^[0123456789]+$/.test(inum)) {
        outputNum.style.color = "red";
        return "Invalid Decimal";
    }
    outputNum.style.color = "black";
    if (inum === "0") return "0";
    inum = inum.trim();
    inum = Number(inum);
    let ans = String();
    let hex = "0123456789ABCDEF";
    while (inum > 0) {
        ans = ans + hex[inum % 16];
        inum = Math.floor(inum / 16);
    }
    ans = ans.split("").reverse().join("");
    return ans;

}

//Decimal to Octal
function DtoO(inum) {
    inum = stringValidator(inum);
    if (!/^[0123456789]+$/.test(inum)) {
        outputNum.style.color = "red";
        return "Invalid Decimal";
    }
    outputNum.style.color = "black";
    if (inum === "0") return "0";
    inum = inum.trim();
    inum = Number(inum);
    let ans = String();
    let oct = "01234567";
    while (inum > 0) {
        ans = ans + oct[inum % 8];
        inum = Math.floor(inum / 8);
    }
    ans = ans.split("").reverse().join("");
    return ans;
}
//Decimal to Binary
function DtoB(inum) {
    inum = stringValidator(inum);
    if (!/^[0123456789]+$/.test(inum)) {
        outputNum.style.color = "red";
        return "Invalid Decimal";
    }
    outputNum.style.color = "black";
    if (inum === "0") return "0";
    inum = inum.trim();
    inum = Number(inum);
    let ans = String();
    let bin = "01";
    while (inum > 0) {
        ans = ans + bin[inum % 2];
        inum = Math.floor(inum / 2);
    }
    ans = ans.split("").reverse().join("");
    return ans;
}
//Decimal to Decimal
function DtoD(inum) {
    inum = stringValidator(inum);
    if (!/^[0123456789]+$/.test(inum)) {
        outputNum.style.color = "red";
        return "Invalid Decimal";
    }
    outputNum.style.color = "black";
    return inum;
}

//HexaDecimal to Radix(X)
//HexaDecimal to Binary
function HtoB(inum) {
    inum = stringValidator(inum);
    if (!/^[0-9A-Fa-f]+$/.test(inum)) {
        outputNum.style.color = "red";
        return "Invalid Hex";
    }
    outputNum.style.color = "black";
    inum = HtoD(inum);
    return DtoB(inum);
}
//HexaDecimal to Decimal
function HtoD(inum) {
    inum = stringValidator(inum);
    if (!/^[0-9A-Fa-f]+$/.test(inum)) {
        outputNum.style.color = "red";
        return "Invalid Hex";
    }
    outputNum.style.color = "black";
    inum = inum.split("").reverse().join("");
    inum = inum.toUpperCase();
    let ans = 0;
    let hex = "0123456789ABCDEF";
    for (let i = 0; i < inum.length; i++) {
        ans += (hex.indexOf(inum[i])) * (16 ** i);
    }
    return String(ans);
}
//HexaDecimal to Octal
function HtoO(inum) {
    inum = stringValidator(inum);
    if (!/^[0-9A-Fa-f]+$/.test(inum)) {
        outputNum.style.color = "red";
        return "Invalid Hex";
    }
    outputNum.style.color = "black";
    inum = HtoD(inum);
    return DtoO(inum);
}
//HexaDecimal to Hexadecimal
function HtoH(inum) {
    inum = stringValidator(inum);
    if (!/^[0-9A-Fa-f]+$/.test(inum)) {
        outputNum.style.color = "red";
        return "Invalid Hex";
    }
    outputNum.style.color = "black";
    return inum;
}
//Octal to Radix(X)
//Octal to Decimal
function OtoD(inum){
    inum = stringValidator(inum);
    if (!/^[0-7]+$/.test(inum)) {
        outputNum.style.color = "red";
        return "Invalid Octal";
    }
    outputNum.style.color = "black";
    inum = inum.split("").reverse().join("");
    inum = inum.toUpperCase();
    let ans = 0;
    let oct= "01234567";
    for (let i = 0; i < inum.length; i++) {
        ans += (oct.indexOf(inum[i])) * (8 ** i);
    }
    return String(ans);
}
//Octal to HexaDecimal
function OtoH(inum){
    inum = stringValidator(inum);
    if (!/^[0-7]+$/.test(inum)) {
        outputNum.style.color = "red";
        return "Invalid Octal";
    }
    outputNum.style.color = "black";
    inum=OtoD(inum);
    return DtoH(inum);
}
//Octal to Binary
function OtoB(inum){
    inum = stringValidator(inum);
    if (!/^[0-7]+$/.test(inum)) {
        outputNum.style.color = "red";
        return "Invalid Octal";
    }
    outputNum.style.color = "black";
    inum=OtoD(inum);
    return DtoB(inum);
}
//Octal to Octal
function OtoO(inum){
    inum = stringValidator(inum);
    if (!/^[0-7]+$/.test(inum)) {
        outputNum.style.color = "red";
        return "Invalid Octal";
    }
    outputNum.style.color = "black";
    return inum;
}
