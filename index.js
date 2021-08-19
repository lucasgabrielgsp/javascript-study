class Item {
  constructor(name, price) {
    this.name = name;
    this.price = parseInt(price);
  }
  
}

class Bill {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  addItem = (item) => {
      this.items.push(item);
  }


  billTotal = () => {
    let billTotalContainer = document.getElementById('total')
    billTotalContainer.innerHTML = ''
    let billTotalValue = document.createElement('p')
    billTotalValue.innerHTML = 'R$ ' + (this.total = this.total + parseInt(inputPrice.value))
    billTotalContainer.append(billTotalValue)

  }


  render = () => {
    let billContainer = document.getElementById('items');
    billContainer.innerHTML = '';

    this.items.map(item => {
      let deleteButton = document.createElement('button')
      let deleteText = document.createTextNode(' Excluir')
      deleteButton.append(deleteText)
      deleteButton.setAttribute('onclick','removeItemBill(bill.items.indexOf())')

      let row = document.createElement('tr');
      let foodName = document.createElement('td');
      let foodPrice = document.createElement('td');
      foodName.innerHTML = item.name;
      foodPrice.innerHTML = 'R$ ' + item.price;

      row.append(foodName);
      foodName.append(deleteButton)
      row.append(foodPrice);
      billContainer.append(row);
    })

  }
}

  removeItemBill = (props) => {
    bill.items.splice(props, 1);
    bill.render();
  }



  rendering = () => {
    var billEmptyMessage = document.getElementById('items');
    if(Bill.items == undefined ){
      let title = document.createElement('h1')
      let emptytitle = title.innerHTML = '| A comanda está vazia |'
      title.append(emptytitle)
      billEmptyMessage.append(title)
    }else{
      return init()
    }
}

  var inputName = document.getElementById('inputname')
  var inputPrice = document.getElementById('inputprice')
  


var bill = new Bill();




function init() {
  if(inputName.value == '' || inputPrice.value == ''){
    alert('Insira o nome e o valor do item à sua comanda')
    return false
  }else{
  bill.addItem(new Item(`${inputName.value}`, `${inputPrice.value}`));
  bill.render();
  bill.billTotal();
  inputName.value = ''
  inputPrice.value = ''
  document.getElementsByTagName('body')[0].style.display = 'flex';}
}


function printBill() {
  window.print();
}