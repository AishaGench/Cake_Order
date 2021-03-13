"use strict";

const patisserie = {
  bananaCaramel: {
    stock: 3,
    price: 9.99,
  },
  contessa: {
    stock: 5,
    price: 7.99,
  },
  concorde: {
    stock: 11,
    price: 22.99,
  },
  mouseCake: {
    stock: 8,
    price: 16.99,
  },
  confettiSuprise: {
    stock: 9,
    price: 14.99,
  },
};

let selectCake = document.getElementById('cakeSelect');
let amountCake = document.getElementById('cakeAmount');

let orderBtn = document.getElementById('submit_btn');

const checkOrder = (order) => {

  return new Promise((resolve,reject)=>{

setTimeout(()=>{

let stockControl = patiseria[order[0]].stock;
let cost = patisserie[order[0]].price * order[1];

if(stockControl >= order[1]){
  console.log(`Stock is enough, your total is ${cost}.Press 1 if it is ok!!!`)
resolve([order,cost])
}else{
reject(`not enough`)
}
},1000);

})
};

const payment = (resolvedValue) => {

  const order = resolvedValue[0];
  const cost =resolvedValue[1];

  return new Promise ((resolve, reject) => {

    setTimeout(()=> {

      document.addEventListener('keypress',((item) =>{

        if(item.key ==='1'){
          console.log(`payment completed. You paid ${cost}`)
          resolve(order);
        }else{
          reject(`The payment could not be completed`);
        }
      })) 

    },1000);
  })
  
}

const checkStock = (resolvedValue) => {

   const order = resolvedValue[0];
  const remained =resolvedValue[1];

  return new Promise ((resolve, reject) => {

    setTimeout(()=> {

      let stockRemained = patisserie[order].stock - remained;
      if(stockRemained <=2){

        resolve(`${order} stock is ${stockRemained} and it is critic`)

      }else{
        reject(`${order}'s stock enough.`)
      }
    },2000);
  });
};

async function orderSync(param){

  try {
    
  } catch (error) {
    
  }

}


orderBtn.onclick = ()=>{
  const order = [selectCake.value, amountCake.value];

  checkOrder(order).then((res)=>{
    return payment(res);
  }).then((res) =>{
    return checkStock(res)
  }).then((res)=>{
    console.log(res)
  }).catch((val) =>{
    console.log(val)
  })

}