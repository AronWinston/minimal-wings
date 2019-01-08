# minimal-wings

## Objective

To use a JavaScript axios call to create a webpage for redbull displaying their products with information about each product pulled from the redbull products page



## Code

```
axios.get("https://www.redbullshopus.com/products.json")
.then(response => {
   
   

    let data = response.data;
    for(let i = 0; i< data.products.length; i++){
```



## License
Aron Winston Jr. Software Engineer INC
