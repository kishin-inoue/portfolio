window.addEventListener("load", () => {
    kishinRandom()
    kishinRandom2()
    kishinRandom3()
    kishinRandom4()
    kishinRandom5()
    kishinRandom6()
    kishinRandom7()
    kishinRandom8()
    kishinRandom9()
    kishinRandom10()
} )

//let i = 0

//function kishinRandom() {
//    for (i = 0; i < 11; i++) {
//            let name = "plant3D" + i
//            console.log(name)
//            let tonTruc = document.getElementById(name)
//            let marginHaut = Math.random() * 15;
//            let marginGauche = Math.random() * 15;
//            tonTruc.style.marginTop = marginHaut + "cm"
//            tonTruc.style.marginLeft = marginGauche + "cm"
//    }}

function kishinRandom() {
    let tonTruc = document.getElementById("plant3D1")
    let marginHaut = Math.floor(Math.random() * 15)
    let marginGauche = Math.floor(Math.random() * 15)
     
    tonTruc.style.marginTop = marginHaut + "cm"
    tonTruc.style.marginLeft = marginGauche + "cm"
}
function kishinRandom2() {
    let tonTruc = document.getElementById("plant3D2")
    let marginHaut = Math.floor(Math.random() * 50)
    let marginGauche = Math.floor(Math.random() * 15)
     
    tonTruc.style.marginTop = marginHaut + "cm"
    tonTruc.style.marginLeft = marginGauche + "cm"
}
function kishinRandom3() {
    let tonTruc = document.getElementById("plant3D3")
    let marginHaut = Math.floor(Math.random() * 84)
    let marginGauche = Math.floor(Math.random() * 15)
     
    tonTruc.style.marginTop = marginHaut + "cm"
    tonTruc.style.marginLeft = marginGauche + "cm"
}
function kishinRandom4() {
    let tonTruc = document.getElementById("plant3D4")
    let marginHaut = Math.floor(Math.random() * 98)
    let marginGauche = Math.floor(Math.random() * 5)
    
    tonTruc.style.marginTop = marginHaut + "cm"
    tonTruc.style.marginLeft = marginGauche + "cm"
}
function kishinRandom5() {
    let tonTruc = document.getElementById("plant3D5")
    let marginHaut = Math.floor(Math.random() * 60)
    let marginGauche = Math.floor(Math.random() * 8)
     
    tonTruc.style.marginTop = marginHaut + "cm"
    tonTruc.style.marginLeft = marginGauche + "cm"
}
function kishinRandom6() {
    let tonTruc = document.getElementById("plant3D6")
    let marginHaut = Math.floor(Math.random() * 60)+25;
    let marginGauche = Math.floor(Math.random() * 8)

    tonTruc.style.marginTop = marginHaut + "cm"
    tonTruc.style.marginLeft = marginGauche + "cm"
}
function kishinRandom7() {
    let tonTruc = document.getElementById("plant3D7")
    let marginHaut = Math.floor(Math.random() * 60)+30;
    let marginGauche = Math.floor(Math.random() * 8)

    tonTruc.style.marginTop = marginHaut + "cm"
    tonTruc.style.marginLeft = marginGauche + "cm"
}
function kishinRandom8() {
    let tonTruc = document.getElementById("plant3D8")
    let marginHaut = Math.floor(Math.random() * 80)+30;
    let marginGauche = Math.floor(Math.random() * 9)

    tonTruc.style.marginTop = marginHaut + "cm"
    tonTruc.style.marginLeft = marginGauche + "cm"
}
function kishinRandom9() {
    let tonTruc = document.getElementById("plant3D9")
    let marginHaut = Math.floor(Math.random() * 15)+120;
    let marginGauche = Math.floor(Math.random() * 14)

    tonTruc.style.marginTop = marginHaut + "cm"
    tonTruc.style.marginLeft = marginGauche + "cm"
}
function kishinRandom10() {
    let tonTruc = document.getElementById("plant3D10")
    let marginHaut = Math.floor(Math.random() * 30)+100;
    let marginGauche = Math.floor(Math.random() * 13)

    tonTruc.style.marginTop = marginHaut + "cm"
    tonTruc.style.marginLeft = marginGauche + "cm"
}



document.getElementById("tomjoubert").addEventListener("click", () => {
    
    tomasgeoghegan()
    kishinRandomPlus()
    
}
)
        
let i = 1
var totalCount = 3;

function tomasgeoghegan() {
            i ++;
            var name = 'plantRandomPlus' + i
            console.log(name)

            var num = Math.ceil(Math.random() * totalCount)+1;
            var target = document.getElementById(name)

            target.src = 'plant' + num + '.glb';
    
}

function kishinRandomPlus() {
            var name = 'plantRandomPlus' + i
            console.log(name)

    let tonTruc = document.getElementById(name)
    let marginHaut = Math.floor(Math.random() * 120);
    let marginGauche = Math.floor(Math.random() * 25)

    tonTruc.style.marginTop = marginHaut + "cm"
    tonTruc.style.marginLeft = marginGauche + "cm"
}



/*var imagesArray = ["plant2.glb", "plant4.glb", "plant5.glb"];

document.getElementById("tomjoubert").addEventListener("click", () => {
    tomasgeoghegan()
} )

function tomasgeoghegan(){

    var num = Math.floor(Math.random() * (imagesArray.length+1));
    document.canvas.src = imagesArray[num];
} */
