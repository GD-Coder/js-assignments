'use strict'
const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0
        
        
        
const reduce = (arr) => {
	
	let acc = 0
	for (let elem of arr)
{
	acc = acc + elem
}
	return acc	
}

/**
 * transform carts into an array of { customer, total }
 */

const calculateTotals =
  listings => 
    carts => {
      let arr = []
      let arr2 = []
      let obj = [{}]
      let total = 0
      let stotal = 0
      let i = 0
      let  item = carts
      let prod = cart
      let customer = ''
      for(let car in carts)
      {
        for (let it in item)
        {
        if (cart(item[i].customer))
        if(regularListings[i].name || saleListings[i].name)
        arr[i] = regularListings[i].price
        arr2[i] = saleListings[i].price
        }
        total = reduce(arr)
        stotal = reduce(arr2)
        for(let nam in carts)
        {
        customer = item[i].customer
       
    }
    obj[car] =  {customer, total, stotal}
    i++
      }
    // console.log(total)
    //  console.log(stotal)
    //    console.log(customer)
        return obj

    }
	module.exports = {
  listing,
  cart,
  calculateTotals
}

const regularListings = [
  listing('detergent', 10),
  listing('hennessey', 100),
  listing('carlo rozzi', 20),
  listing('coffee', 5),
  listing('cookies', 6),
  listing('mountain dew', 2)
]

const saleListings = [
  listing('detergent', 5),
  listing('hennessey', 50),
  listing('carlo rozzi', 10),
  listing('coffee', 2.5),
  listing('cookies', 3),
  listing('mountain dew', 1)
]

const carts = [
  cart(
    'adam',
    'carlo rozzi',
    'carlo rozzi',
    'carlo rozzi',
    'carlo rozzi',
    'carlo rozzi',
    'carlo rozzi'
  ),
  cart(
    'david',
    'detergent',
    'hennessey',
    'coffee'
  ),
  cart(
    'michael',
    'coffee',
    'hennessey',
    'coffee',
    'hennessey',
    'coffee',
    'hennessey'
  ),
  cart(
    'dillon',
    'cookies',
    'cookies',
    'cookies',
    'mountain dew',
    'mountain dew',
    'mountain dew'
  )
]

const regularTotals = calculateTotals(regularListings)
const saleTotals = calculateTotals(saleListings)

regularTotals(carts)
  .forEach(cart => console.log(`${cart.customer}, your total is ${cart.total}`))

saleTotals(carts)
  .forEach(cart => console.log(`${cart.customer}, your total could have been ${cart.stotal} if you were smart enough to come on a sale day! (you dummy)`))
