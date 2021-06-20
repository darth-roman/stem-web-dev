const form = document.getElementById("form")
const btn = document.getElementById("btn")
const shopingList = document.getElementsByClassName("shoping-list")[0]
//console.log(form);

btn.addEventListener("click", function(){
    const item = document.getElementById("item-input")
    const typeOfItem = document.getElementById("type")

    const itemText = document.createTextNode(`${item.value}`)
    const newItem = document.createElement("li")
    newItem.classList=`shoping-item ${typeOfItem.value}`
    newItem.appendChild(itemText)

    // const newItem = `
    //     <li class="shoping-list ${typeOfItem.value}">${item.value}</li>
    // `

    shopingList.append(newItem)
    
    console.log(item.value, typeOfItem.value);
})

