var selection=document.getElementById("selection");
const products=document.getElementsByClassName("product");
var productsname=document.getElementsByClassName("pname");
var user=document.getElementById("user");
if (localStorage.getItem("name")){
    user.innerHTML="welcome "+localStorage.getItem("name")
}
else{
    user.style.display="none"
}
function search(val){
    product=[]
    if(val==""){
        for(i = 0; i < products.length; i++){
            products[i].style.display="inline-block";
        }
    }
    else if(selection.value=="name"){
        for(i = 0; i < products.length; i++){
            var productval=products[i].getElementsByClassName("pname")[0];
            var productvalue=productval.innerHTML
            if(productvalue.startsWith(val)==false){
                products[i].style.display="none";
            }
        }
    }
    else if(selection.value=="catagory"){
        for(i = 0; i < products.length; i++){
            var productval=products[i].getElementsByClassName("pcatagory")[0];
            var productvalue=productval.innerHTML
            if(productvalue.startsWith(val)==false){
                products[i].style.display="none";
            }
        }
    }
}

var cartproducts=localStorage.getItem("products")?(localStorage.getItem("products")).split(","):[]
var cart=document.getElementById("cart")
var count=document.getElementById("count")
if(localStorage.getItem("products")!=null&&localStorage.getItem("products")!=''){
    var prods=localStorage.getItem("products");
    var myArray = prods.split(",");
    count.innerHTML=myArray.length/3
    for (i =0;i<myArray.length; i+=3){
        const pdiv=document.createElement("div");
            pdiv.className="pdiv"
            const newproduct = document.createElement("option");
            newproduct.className="elem"
            newproduct.innerHTML = myArray[i];
            const addpro=document.createElement("button")
            addpro.innerHTML="+"
            addpro.className="padd"
            addpro.addEventListener('click',addingpro,false)
            const delpro=document.createElement("button")
            delpro.innerHTML="-"
            delpro.className="del"
            delpro.addEventListener('click',deletingingpro,false)
            const procount=document.createElement("p")
            procount.innerHTML="1"
            procount.className="pcount"
            pdiv.appendChild(newproduct)
            pdiv.appendChild(procount)
            pdiv.appendChild(addpro)
            pdiv.appendChild(delpro)
            cart.appendChild(pdiv);
    }
}
var cartoption =document.getElementsByClassName("elem")
var pnames=document.getElementsByClassName("pname")
var btns=document.getElementsByClassName("add")
for(j=0;j<cartoption.length;j++){
    for(i=0;i<pnames.length;i++){
        if(pnames[i].innerHTML==cartoption[j].innerHTML){
            btns[i].style.backgroundColor="red";
            btns[i].innerHTML="remove from cart"
        }
    }
}
function addtocart(btnproduct,btn){
    if (localStorage.getItem("name")){
        if(btn.style.backgroundColor=="red"){
            btn.style.backgroundColor="green"
            btn.innerHTML="add to cart"
            for (x=0;x<cartproducts.length;x++){
                if(cartproducts[x]==btnproduct.getElementsByClassName("pname")[0].innerHTML){
                    cartproducts.splice(x,3)
                    localStorage.setItem("products",cartproducts)
                    count.innerHTML=parseInt(count.innerHTML)-1
                    break
                }
                }
            for(opt=0;opt<cartoption.length;opt++){
                    if(cartoption[opt].innerHTML==btnproduct.getElementsByClassName("pname")[0].innerHTML){
                        cartoption[opt].parentNode.remove();
                        break;
                    }
            }
            localStorage.setItem(btnproduct.getElementsByClassName("pname")[0].innerHTML,0)
            console.log(cartproducts)
        }
        else{
            const pdiv=document.createElement("div");
            pdiv.className="pdiv"
            const newproduct = document.createElement("option");
            newproduct.className="elem"
            newproduct.innerHTML = btnproduct.getElementsByClassName("pname")[0].innerHTML;
            const addpro=document.createElement("button")
            addpro.innerHTML="+"
            addpro.className="padd"
            addpro.addEventListener('click',addingpro,false)
            const delpro=document.createElement("button")
            delpro.innerHTML="-"
            delpro.className="del"
            delpro.addEventListener('click',deletingingpro,false)
            const procount=document.createElement("p")
            procount.innerHTML="1"
            procount.className="pcount"
            pdiv.appendChild(newproduct)
            pdiv.appendChild(procount)
            pdiv.appendChild(addpro)
            pdiv.appendChild(delpro)
            cart.appendChild(pdiv);
            cartproducts.push(btnproduct.getElementsByClassName("pname")[0].innerHTML)
            cartproducts.push(btnproduct.getElementsByClassName("price")[0].innerHTML)
            cartproducts.push(btnproduct.getElementsByClassName("pcatagory")[0].innerHTML)
            localStorage.setItem("products",cartproducts)
            count.style.display="inline-block"
            count.innerHTML=parseInt(count.innerHTML)+1
            btn.innerHTML="remove from cart"
            btn.style.background="red"
            localStorage.setItem(newproduct.innerHTML,1)
        }
    }
    else{
        window.location="signup.html"
    }
}
var cartblock=document.getElementsByClassName("cart")[0]
function showcart(){
    cartblock.style.display=="none"?cartblock.style.display="block":cartblock.style.display="none"
}
function logout(){
    localStorage.clear()
    window.location=("signup.html")
}

function addingpro(btn){
    var productcount=btn.target.parentNode.getElementsByClassName("pcount")[0]
    productcount.innerHTML=parseInt(productcount.innerHTML)+1
    var elemname=btn.target.parentNode.getElementsByClassName("elem")[0].innerHTML
    localStorage.setItem(elemname,productcount.innerHTML)
}

function deletingingpro(btn){
    var productcount=btn.target.parentNode.getElementsByClassName("pcount")[0]
    var elemname=btn.target.parentNode.getElementsByClassName("elem")[0].innerHTML
    if(productcount.innerHTML==1){
        for(i = 0; i < products.length; i++){
            var productval=products[i].getElementsByClassName("pname")[0];
            var productvalue=productval.innerHTML
            if(productvalue==elemname){
                products[i].getElementsByClassName("add")[0].style.backgroundColor="green";
                products[i].getElementsByClassName("add")[0].innerHTML="add to cart";
            }
        }
        for (x=0;x<cartproducts.length;x++){
        if(cartproducts[x]==elemname){
            cartproducts.splice(x,3)
            localStorage.setItem("products",cartproducts)
            count.innerHTML=parseInt(count.innerHTML)-1
            btn.target.parentNode.remove()
            localStorage.setItem(elemname,0)
            break
        }
        }}
    else{
        productcount.innerHTML=parseInt(productcount.innerHTML)-1
        localStorage.setItem(elemname,productcount.innerHTML)
    }
}
var pcounts=document.getElementsByClassName("pcount")
for(ele=0;ele<pcounts.length;ele++){
    var parent=pcounts[ele].parentNode
    if(localStorage.getItem(parent.getElementsByClassName("elem")[0].innerHTML)!=null){
    pcounts[ele].innerHTML=localStorage.getItem(parent.getElementsByClassName("elem")[0].innerHTML)}
}
var heart=document.getElementsByClassName("fa-heart")
for(h=0;h<heart.length;h++){
    heart[h].addEventListener('click',hearts,false)
}
var favproducts=localStorage.getItem("favproducts")?(localStorage.getItem("favproducts")).split(","):[]
function hearts(btn){
    if (localStorage.getItem("name")){
        var parenth=btn.target.parentNode.parentNode
        if(btn.target.style.color=="red"){
            btn.target.style.color="grey"
            for (x=0;x<favproducts.length;x++){
                if(favproducts[x]==parenth.getElementsByClassName("pname")[0].innerHTML){
                    favproducts.splice(x,2)
                    localStorage.setItem("favproducts",favproducts)
                    break
                }
                }
        }
        else{
            btn.target.style.color="red"
            favproducts.push(parenth.getElementsByClassName("pname")[0].innerHTML)
            favproducts.push(parenth.getElementsByClassName("pcatagory")[0].innerHTML)
            localStorage.setItem("favproducts",favproducts)
        }
    }
    else{
        window.location="signup.html"
    }
}
if(localStorage.getItem("favproducts")!=null&&localStorage.getItem("products")!=''){
    var favprods=localStorage.getItem("favproducts");
    var myArray = favprods.split(",");
    for (i=0;i<myArray.length; i+=2){
        for(j=0;j<heart.length;j++){
            if(myArray[i]==heart[j].parentNode.parentNode.getElementsByClassName("pname")[0].innerHTML){
                heart[j].style.color="red"
            }
        }
    }
}