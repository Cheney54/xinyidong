let num1 = document.querySelectorAll(".bannerd")
console.log(num1)
let num2 = document.querySelectorAll(".shi")
console.log(num2)
let banners = document.querySelector(".banner")
let prev = document.querySelector(".bannerleft")
let next = document.querySelector(".bannerright")

num2.forEach(function (n, m) {
    n.onclick = function () {
        for (let i = 0; i < num2.length; i++) {
            num2[i].classList.remove("sahn");
            num1[i].classList.remove("sahn")
        }
        this.classList.add("sahn");
        num1[m].classList.add("sahn");
        en = m;
    }
});

let en = 0;

function banne(dir = "right") {
    if (dir == "right") {
        en++;
    }
    if (en === num2.length) {
        en = 0;
    }
    if (dir == "left") {
        en--

    }
    if (en == -1) {
        en = num1.length - 1
    }


    for (let i = 0; i < num2.length; i++) {
        num2[i].classList.remove("sahn");
        num1[i].classList.remove("sahn")
    }
    num2[en].classList.add("sahn");
    num1[en].classList.add("sahn");

}

let st = setInterval(banne, 2000)
banners.onmouseover = function () {
    clearInterval(st)
}
banners.onmouseout = function () {
    st = setInterval(banne, 2000)
}


// next.onclick = function () {
//     banne()
// }
// prev.onclick = function () {
//     banne("left")
// }




{
    let aside=document.querySelector('aside');
    console.log(aside)
    let btns=document.querySelectorAll('.btn');
    console.log(btns)
    let floors=document.querySelectorAll('.lou');
    console.log(floors)
    let Top=document.querySelector('.navtop');
    window.onscroll=function () {
        if (document.documentElement.scrollTop>600){
            Top.style.display="block";
        }else {
            Top.style.display="none";
        }
        if (document.documentElement.scrollTop>700){
            aside.style.display="block";
        }else {
            aside.style.display="none";
        }
        floors.forEach(function (value, index) {
            if (document.documentElement.scrollTop>value.offsetTop-160){
                for (let i=0;i<btns.length;i++){
                    btns[i].classList.remove('active');
                }
                btns[index].classList.add("active")
            }
        })
    }


    btns.forEach(function (value, index) {
        value.onclick=function () {
            let ot=floors[index].offsetTop-120;
            let now=document.documentElement.scrollTop;
            let speed=(ot-now)*30/300;
            let time=0;
            let t=setInterval(function () {
                now+=speed;
                document.documentElement.scrollTop=now;
                time+=30;
                if (time===300){
                    clearInterval(t);
                    now=ot;
                }
            },30)
        }
    })

    let totop=document.querySelector('#back');
    totop.onclick=function () {
        let st=document.documentElement.scrollTop;
        let speed=st*30/500;
        let t=setInterval(function () {
            st-=speed;
            if (st<=0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },30)
    }
}