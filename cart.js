function logout(){
    localStorage.clear()
    window.location=("html/signup.html")
}
if(localStorage.getItem("products")!=null&&localStorage.getItem("products")!=''){
        var selectedItems=document.getElementById("items")
        var localItems=localStorage.getItem("products")
        var myArray = localItems.split(",");
        var countNum=0
        for(i=1;i<=myArray.length+1;i++){
            if(i==myArray.length+1){
                var div=document.createElement("div")
                div.className="tot"
                div.innerHTML="s"
                selectedItems.appendChild(div);
            }
            else if(i%3==0){
                var catag=document.createElement("p")
                catag.className="catag"
                catag.innerHTML="catagory: "+myArray[i-1]
                var countdiv=document.createElement("div")
                var countnum=document.createElement("p")
                countnum.className="pcount"
                countnum.innerHTML=countNum
                var plus=document.createElement("button")
                plus.className="padd"
                plus.innerHTML="+"
                plus.addEventListener('click',addingpro,false)
                var minus=document.createElement("button")
                minus.className="del"
                minus.innerHTML="-"
                minus.addEventListener('click',deletingingpro,false)
                countdiv.appendChild(countnum)
                countdiv.appendChild(plus)
                countdiv.appendChild(minus)
                div.appendChild(catag)
                div.appendChild(countdiv)
                var remove=document.createElement("button")
                remove.className="remove"
                remove.innerHTML="remove"
                div.appendChild(remove)
                remove.addEventListener('click',Remove,false)
            }
            else if((i-2)%3==0||i==2){
                var pri=document.createElement("p")
                pri.className="pri"
                pri.innerHTML=myArray[i-1]
                var prispan=document.createElement("p")
                prispan.className="prispan"
                prispan.innerHTML="price: "
                div.appendChild(prispan)
                div.appendChild(pri)
            }
            else{
                countNum=localStorage.getItem(myArray[i-1])
                var div=document.createElement("div")
                div.className="item"
                var productName=document.createElement("p")
                productName.className="productName"
                productName.innerHTML=myArray[i-1]
                var pr=document.createElement("span")
                pr.innerHTML="product name: "
                div.appendChild(pr)
                div.appendChild(productName)
                var brele=document.createElement('br')
                div.appendChild(brele)
                selectedItems.appendChild(div);
            }
        }
}
function addingpro(btn){
    var productcount=btn.target.parentNode.getElementsByClassName("pcount")[0]
    productcount.innerHTML=parseInt(productcount.innerHTML)+1
    var elemname=btn.target.parentNode.parentNode.getElementsByClassName("productName")[0].innerHTML
    localStorage.setItem(elemname,productcount.innerHTML)
    total()
}
var cartproducts=localStorage.getItem("products")?(localStorage.getItem("products")).split(","):[]

function deletingingpro(btn){
    var productcount=btn.target.parentNode.getElementsByClassName("pcount")[0]
    var elemname=btn.target.parentNode.parentNode.getElementsByClassName("productName")[0].innerHTML
    if(productcount.innerHTML==1){
        for (x=0;x<cartproducts.length;x++){
        if(cartproducts[x]==elemname){
            cartproducts.splice(x,3)
            localStorage.setItem("products",cartproducts)
            btn.target.parentNode.parentNode.remove()
            localStorage.setItem(elemname,0)
            total()
            break
        }
        }}
    else{
        productcount.innerHTML=parseInt(productcount.innerHTML)-1
        localStorage.setItem(elemname,productcount.innerHTML)
        total()
    }
}
function Remove(btn){
    var elemname=btn.target.parentNode.getElementsByClassName("productName")[0].innerHTML
    localStorage.setItem(elemname,0)
    for (x=0;x<cartproducts.length;x++){
        if(cartproducts[x]==elemname){
            cartproducts.splice(x,3)
            localStorage.setItem("products",cartproducts)
            btn.target.parentNode.remove()
            localStorage.setItem(elemname,0)
            total()
            break
        }
        }
}
var totalsum=document.getElementsByClassName("tot")[0]
function total(){
    var cartproducts=localStorage.getItem("products")?(localStorage.getItem("products")).split(","):[]
    var prices=document.getElementsByClassName("pri")
    if (localStorage.getItem("products")==null||localStorage.getItem("products")==""){
        totalsum.innerHTML= 0;
    }
    else{
        tot=0
        p=[]
        for(x=0;x<cartproducts.length;x+=3){
            var count=localStorage.getItem(cartproducts[x])
            p.push(count)
        }
        for(z=0;z<prices.length;z++){
            tot=tot+(prices[z].innerHTML)*parseFloat(p[z])
        }
        totalsum.innerHTML="total: "+ tot+" $"
     }
}
total()
if(localStorage.getItem("favproducts")!=null&&localStorage.getItem("favproducts")!=''){
    var favItems=document.getElementById("favs")
    var localfav=localStorage.getItem("favproducts")
    var favArray = localfav.split(",");
    for(i=1;i<=favArray.length;i++){
    if(i%2==0){
        var favcat=document.createElement("p")
        favcat.className="favc"
        favcat.innerHTML=favArray[i-1]
        var favcatt=document.createElement("p")
        favcatt.className="favct"
        favcatt.innerHTML="catagory: "
        vdiv.appendChild(favcatt)
        vdiv.appendChild(favcat)
        var elebr=document.createElement("br")
        vdiv.appendChild(elebr)
        var icon=document.createElement("i")
        icon.className="fa-solid fa-heart r"
        vdiv.appendChild(icon)
    }
    else{
        var vdiv=document.createElement("div")
        vdiv.className="vitem"
        var favName=document.createElement("p")
        favName.className="favn"
        favName.innerHTML=favArray[i-1]
        var favNamet=document.createElement("p")
        favNamet.className="favnt"
        favNamet.innerHTML="product name: "
        var elebr=document.createElement("br")
        vdiv.appendChild(favNamet)
        vdiv.appendChild(favName)
        vdiv.appendChild(elebr)
        favItems.appendChild(vdiv)
    }
}}
var heart=document.getElementsByClassName("fa-heart")
for(h=0;h<heart.length;h++){
    heart[h].addEventListener('click',hearts,false)
}
var favproducts=localStorage.getItem("favproducts")?(localStorage.getItem("favproducts")).split(","):[]
function hearts(btn){
    var parent=btn.target.parentNode
    for (x=0;x<favproducts.length;x++){
        if(favproducts[x]==parent.getElementsByClassName("favn")[0].innerHTML){
            favproducts.splice(x,2)
            localStorage.setItem("favproducts",favproducts)
            break
        }
    }
    parent.remove()
}