
//Script Search function
const listproducts = document.getElementById('searchlist');// Visa resultat
const searchBar = document.getElementById('searchBar');// Sök fältet
const pop = document.getElementById('head');//Titel


//Läs i databas
const searchProducts = async searchText => {  
  const res = await  fetch ('./data.json');
  const products = await res.json();

  let matches = products.filter(product =>{
    const regex = new RegExp(`^${searchText}`, 'gi');
    return product.name.match(regex) || product.text.match(regex) || product.price.match(regex)||product.image.match(regex);
  });
  
  //Reset alt om fältet är tomt
  if (searchText.length === 0){
    matches = [];
    listproducts.innerHTML = `
    <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="bilder/levis.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">LEVIS Huvtröja</h5>
              <p class="card-text">Svart huvtröja från Levis</p>
              <p class="card-text">600kr</p>
              <a href="produkt1.html" class="btn">Läs mer om produkten</a>
              <button class="btn" onclick="addToBasket(this, '10','LEVIS Huvtröja', 400, 'bilder/levis.jpg')" id="4">Köp</button>
            </div>
        </div>    

        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="bilder/sailracing.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Sail Racing</h5>
              <p class="card-text">Vit Sail Racing huvtröja med dragkedja</p>
              <p class="card-text">750kr</p>
              <a href="produkt1.html" class="btn">Läs mer om produkten</a>
              <button class="btn" onclick="addToBasket(this, '1','Sail Racing Huvtröja', 750, 'bilder/sailracing.jpg')" id="1">Köp</button>
            </div>
          </div>                
             
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="bilder/gant.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">GANT</h5>
              <p class="card-text">Svart GANT huvtröja med en liten loga</p>
              <p class="card-text">550kr</p>
              <a href="produkt1.html" class="btn">Läs mer om produkten</a>
              <button class="btn" onclick="addToBasket(this, '3','GANT Huvtröja', 550, 'bilder/gant.jpg')" id="3">Köp</button>
            </div>
          </div>
        </div>`;
                
         
      pop.innerHTML = "Populärt Just Nu";
     
  
      


  outputHtml(matches);
  
};
 //Visa producter
  const outputHtml = matches => {
    if(matches.length > 0){
      const html = matches
      .map(
        match => 
           `
           <div class="card" style="width: 18rem;">
           <img class="card-img-top" src="${match.image}" alt="Card image cap">
           <div class="card-body">
             <h5 class="card-title">${match.name}</h5>
             <p class="card-text">${match.text}</p>
             <p class="card-text">${match.price}kr</p>
             <a href="${match.mer_link}" class="btn">Läs mer om produkten</a>
             <button class="btn" onclick="addToBasket(this, '${match.idn}','${match.name}', ${match.price}, '${match.image}')" id="${match.idn}">Köp</button>
           </div>
         </div>
      `
        )
      .join('');
      
       listproducts.innerHTML = html;
  

       pop.innerHTML = "Resultat"
       
    }
  }
// Checka om input i sök fälte
searchBar.addEventListener('input', () => searchProducts(searchBar.value));

