
let header = document.createElement("header");


let head=document.createElement("img");

head.style.display="flex";
// head.style.justifyContent="space-around";
head.src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c1e8.png";
head.style.width="600px";
head.style.height="250px";
head.style.fontSize="30px";
head.style.border="4px solid yellow";
head.style.backgroundColor="blue";
head.style.margin="10px";
head.style.padding="10px";







axios.get("https://www.redbullshopus.com/products.json")
.then(response => {
   
   

    let data = response.data;
    for(let i = 0; i< data.products.length; i++){


        let container=document.createElement("div");
        container.style.display = "inline-block";
        container.style.height = "300px";
        container.style.width = "200px";
        container.style.backgroundColor="grey";
        container.style.margin="10px";
        container.style.padding="10px";
        document.body.append(container);
        
        
        let items = document.createElement("img");
        let info = document.createElement("h1");
        let price = document.createElement("p");
        
  
    
    info.innerHTML += data.products[i].title;
    items.src += data.products[i].images[0].src;
    price.innerHTML += `<strong><em> price: $${data.products[i].variants[0].price}</em></strong>`;

    
    items.style.display="flex";
    items.style.width="180px";
    items.style.border="1px solid red";
    info.style.fontSize="20px";
    info.style.display="flex";
    price.style.display="flex";
    price.style.padding="10px";
    price.style.justifyContent="left";
    price.style.backgroundColor="yellow";
    
  

   
    

    
    container.appendChild(info);
    container.appendChild(items);
    container.appendChild(price);
   
    }
    
    
});

let body = document.getElementsByTagName('body')[0];
body.style.backgroundColor="grey";
body.appendChild(head);

body.appendChild(header);
header.appendChild(head);

header.style.display ="flex";
header.style.justifyContent="center";