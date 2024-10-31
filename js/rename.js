function first_name(){
    const item  = document.getElementById('first_name')
    console.log(item.innerText)
    item.innerHTML="Matvei"
}
function second_name(){
    const item  = document.getElementById('second_name')
    console.log(item.innerText)
    item.innerHTML="Evseev"
}
function thirty_name(){
    const item  = document.getElementById('thirty_name')
    console.log(item.innerText)
    item.innerHTML="Eugenievich"
}
function sex(){
    const item  = document.getElementById('sex')
    console.log(item.innerText)
    item.innerHTML="male"
}



const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",first_name)
node_for_click.addEventListener("click",second_name)
node_for_click.addEventListener("click",thirty_name)
node_for_click.addEventListener("click",sex)