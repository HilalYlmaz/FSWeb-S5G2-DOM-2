import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

document.querySelector("img").addEventListener("mouseover", (e)=>{
    e.target.style.transform="scale(2)";
});
document.querySelector("img").addEventListener("mouseout", (e)=>{
    e.target.style.transform="scale(1)";
})
document.querySelectorAll(".btn")[2].addEventListener("click", (e)=>{
   e.target.style.backgroundColor= "black";
});
document.querySelectorAll(".btn")[2].addEventListener("dblclick", (e)=>{
    e.target.style.backgroundColor= "";
 });

document.querySelector("nav a").addEventListener("wheel", (e)=>{
    e.target.style.backgroundColor="red";
});
document.querySelectorAll("img")[1].addEventListener("dblclick", (e)=>{
    e.target.style.filter= "blur(4px)";
})
document.querySelectorAll("img")[2].addEventListener("mouseout", (e)=>{
    e.target.style.filter="grayscale(1)";
})
document.querySelectorAll("img")[2].addEventListener("mouseover", (e)=>{
    e.target.style.filter="grayscale(0)";
});
document.querySelectorAll("nav a")[3].addEventListener("dblclick", (e)=>{
    e.preventDefault();
    alert("önce giriş yapmalısın!!")
});