/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
 const baseUrl = "https://platzi-avo.vercel.app"
 const appNode = document.querySelector('#app')
 
 const formatPrice = (price)=>{
    const newPrice = new window.Intl.NumberFormat('en-EN',{  //dependiendo del idioma, el valor se representa con diferentes signos de dinero o como letras.
     style: 'currency',
     currency: 'USD', //con aca puedes poner otras monedas
   }).format(price)
   
   return newPrice
 }
 
 //API Intl - api de internacionalizacion
 //1 - format fechas
 //2 - formato monedas
 
 //web api
 /*1.conectarnos al server
 2.procesar la respuesta y convertirla en JSON
 3.JSON -> Data -> renderizar info en el browser*/
 
 //1. conectarnos al server
 //el fetch me devuelve una promesas, por eso debo trabajar con promesas
 //tambien se puede utlizar asyn/await
 window
   .fetch(`${baseUrl}/api/avo`)
   //2. procesar la respuesta
   .then((respuesta) => respuesta.json())
   //3. JSON -> Data -> renderizar info en el browser
   //al ser un JSON ya es pura info
   .then((responseJson) => {
     console.log(responseJson);
     const todosLosItems = [];
 
     responseJson.data.forEach((item) => {
       //puedo utilizar forEach porque responseJson.data es un array.
       
       //crear imagen
       const imagen = document.createElement("img");
       imagen.src = `${baseUrl}${item.image}`
       
       //crear titulo
       const title = document.createElement("h2");
       title.textContent = item.name
       //title.style : 'font-size: 2rem'
       // title.style.fontSize = '3rem'
       title.className = 'title text-2xl text-current'
       
       //crear precio
       const price = document.createElement("div");
       price.className = 'price text-lg text-gray-600'
       price.textContent = formatPrice(item.price)
 
       const container = document.createElement("div");
       container.className = 'recuadros'
       container.append(imagen, title, price);
 
       todosLosItems.push(container);
     });
     appNode.append(...todosLosItems);
   });
 