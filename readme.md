# ReactJS 101 Todos

## TODO(Together): Create your first ReactJS App

Use the tutorial [HERE](https://reactjs.org/docs/add-react-to-a-website.html)

## TODO(Together): Start the Amazon Cart App

## TODO: Create the Header using JSX

#### HTML Structure

```
.App
    .App-header
        h1 "Amazon Cart"
```

## TODO(Together): Style the Header in ReactJS

## TODO(Together): Convert the Header to a ReactJS Component

## TODO: Pass the title argument into the Header component

#### HINTS:

- Title should be `Amazon Cart`
- Use props

## TODO(Together): Create HTML/Style for Cart Items and Cart Total

## TODO: Convert Cart Items and Cart Total into components

#### HINTS:
- Name the components `CartItems` and `CartTotal`

## TODO: Create individual CartItem component structure

#### HTML Structure:
```
.CartItem
    div.CartItem-image
        img
    div.CartItem-info
        div.info-title
            h2
        div.info-stock
        div.item-actions
            div.item-quantity
                select
            div.item-delete
    div.CartItem-price
```

## TODO(Together): Create Style for individual CartItem component

## TODO(Together): Import data from data.js and set it in the State

#### TODO: Pass the data into CartItems components as props

## TODO: Loop through cart items list and display them using JSX 

#### HINTS:
- Use the `.map` function
- Output the original Cart Item with fake data

## TODO: Convert CartItem component to now use props and pass them in 

#### HINTS:
- Use `item` as a prop
- Replace fake data with data from cart items list
- For the image src use `process.env.PUBLIC_URL`

## TODO(Together): Create HTML and Style for CartTotal Component

## TODO: Calculate total price from cart items list

#### HINTS:
- Create a `getTotalPrice()` function
- Output it using JSX

## TODO(Homework): Correctly calculate cart total

The way I do it is wrong, and I want you to fix it ;) 

## TODO(Together): Install your first external React Module to format the total price number

## TODO(Together): Add the ability to change item quantity in the cart

## TODO: Add the ability to delete an item in the cart 

#### HINTS:
- Create a `deleteItem()` function
- Pass the function from `CartItems` to `CartItem` component
- Pass the `index` of the item to know which item to delete
- Use the `filter()` function in es6 to filter out item based on index
- Update the items using `setCartItems()` function 

## TODO(Together): Cleanup

## TODO(Together): Publish the APP LIVE!!!!






















