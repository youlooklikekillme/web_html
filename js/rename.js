function first_name() {
    const item  = document.getElementById("first_name");
    item.innerHTML = "Matvei";
    console.log(item.innerHTML);
}

function second_name() {
    const item = document.getElementById("second_name");
    item.innerHTML = "Evseev";
    console.log(item.innerHTML);
}

function thirty_name() {
    const item = document.getElementById("thirty_name");
    item.innerHTML = "Eugenievich";
    console.log(item.innerHTML);
}

function sex() {
    const item = document.getElementById("sex");
    item.innerHTML = "male";
    console.log(item.innerHTML);
}


document.getElementById("for_click").addEventListener("click", function() {
    first_name();
    second_name();
    thirty_name();
    sex();
});
