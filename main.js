const title = document.getElementById('title')
const price = document.getElementById('price')
const taxes = document.getElementById('taxes')
const ads = document.getElementById('ads')
const discount = document.getElementById('discount')
const total = document.getElementById('total')
const count = document.getElementById('count')
const category = document.getElementById('category')
let submit = document.getElementById('submit')

// get total 
function getTotal(){
  if(price.value !== ""){
    let result = (+price.value + +taxes.value + +ads.value) - +discount.value
    total.innerHTML = `Total: ${result}$`
    total.style.background = 'green'
  } else {
    total.innerHTML = "";
    total.style.backgroundColor ='red';
  }
}
// create product
let dataProduct;
if(localStorage.product !== null){
  dataProduct = JSON.parse(localStorage.product)
} else {
  dataProduct = []
}

// submit data
submit.onclick = function(){
  let newProduct = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    count: count.value,
    category: category.value,
    total: total.innerHTML
  }
  dataProduct.push(newProduct)
  localStorage.setItem('product', JSON.stringify(dataProduct))
  clearData()
  showData()
}
// clear inputs
function clearData(){
  title.value = ''
  price.value = ''
  taxes.value = ''
  ads.value = ''
  discount.value = ''
  count.value = ''
  category.value = ''
  total.innerHTML = 'Total:'
}
// display products
function showData(){
  let table = ''
  for(let i = 0; i < dataProduct.length; i++){
    table += `
    <tr>
    <td>${i}</td>
    <td>${dataProduct[i].title}</td>
    <td>${dataProduct[i].price}</td>
    <td>${dataProduct[i].taxes}</td>
    <td>${dataProduct[i].ads}</td>
    <td>${dataProduct[i].discount}</td>
    <td>${dataProduct[i].total}</td>
    <td>${dataProduct[i].category}</td>
    <td><button id="update">update</button></td>
    <td><button id="delete" onclick="deleteData(${i})">delete</button></td>
    </tr>
    `
  }
  document.getElementById('tbody').innerHTML = table
  let btnDelete = document.getElementById('deleteAll')
  if(dataProduct.length > 0){
    btnDelete.innerHTML = `
    <button onclick="deleteAll()">delete All</button>
    `
  } else {
    btnDelete.innerHTML = ""
  }
}
showData()
// delete single product
function deleteData(i){
  dataProduct.splice(i,1)
  localStorage.product = JSON.stringify(dataProduct)
  showData()
}
// delete All products
function deleteAll(){
  
}





















