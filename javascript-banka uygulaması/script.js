//?            BANKA UYGULAMASI

let yeniSatir = "\r\n"
let bakiye = 1000

let  metin = "1-Bakiye Görüntüleme" + yeniSatir
+"2-Para Çekme" + yeniSatir
+"3-Para Yatırma" + yeniSatir
+"4-Çıkış" + yeniSatir
+"Lütfen bir değer seçiniz."

let secim = prompt(metin)
switch(secim){
    case "1":
        alert("Bakiyeniz :" + bakiye)
        break   
    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz"))
        if(cekilecekTutar < bakiye){
        }else{
            alert("Bakiyenizden fazal para çekemezsiniz!")
        }
        break
    case "3":
        let yatirilacakTutar = Number(prompt("Yatırmak istediğiniz tutarı giriniz: "))
        bakiye = bakiye + yatirilacakTutar
        alert("Güncel Bakiyeniz :" + bakiye)
        break
        case "4":
        console.log("Sistemden çıkış yapılmıştır..")
        break
}




//?           RANDOM ŞİFRE UYGULAMASI

let password =  [    "a",    "b",    "c",    "ç",    "d",    "e",    "f",    "g",    "ğ",    "h",    "ı",    "i",    "j",    "k",    "l",    "m",    "n",    "o",    "ö",    "p",    "r",    "s",    "ş",    "t",    "u",    "ü",    "v",    "y",    "z",    "q",    "w",    "x",    "A",    "B",    "C",    "Ç",    "D",    "E",    "F",    "G",    "Ğ",    "H",    "I",    "I",    "J",    "K",    "L",    "M",    "N",    "O",    "Ö",    "P",    "R",    "Ş",    "T",    "U",    "Ü",    "V",    "Y",    "Z",    "Q",    "W",    "X",    0,    1,    2,    3,    4,    5,    6,    7,    8,    9,    10,    "!",    "'",    "^",    "+",    "%",    "&",    "/",    "(",    ")",    "=",    "?",    "-", "_",    "*",    ",",    ";",    "`","{",    "}",    "[",    "]",    "@",    "|",    "<",    ">",    ".",    ":",    "é",    "$","#","£","€", "₺"]

// let uzunluk = Number(prompt("Bir Şifre Uzunluğu Giriniz"))
let sifre = []


for(let i = 0; i< uzunluk; i++){
  let random = Math.floor(Math.random() * password.length );
  sifre.push(password[random])
}
console.log(sifre)






//?                RANDOM RENK UYGULAMASI

const text = document.getElementById('text')
const btn = document.getElementById('btn')

const renkKodu = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9]

const randomRenk = () => {
    let hexKod = "#"
    for(let i = 0; i < 6; i++){
        hexKod += renkKodu[Math.floor(Math.random() * renkKodu.length)]
    }
    return hexKod
}

btn.addEventListener('click',() => {
    const Renk = randomRenk()
    text.innerText = Renk
    document.body.style.backgroundColor = Renk
}) 


