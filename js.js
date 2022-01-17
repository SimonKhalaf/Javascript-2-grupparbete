

//Script Search function
const listJackets = document.getElementById('jacketsList');
const searchBar = document.getElementById('searchBar');
let ProductList = [];

const loadProducts = 

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredProducts = ProductList.filter((product) => {
        return(
                product.name.toLowerCase().includes(searchString) || product.img_alt.toLowerCase().includes(searchString) || product.text.toLowerCase().includes(searchString)
        );
    
    });
    displayProducts(filteredProducts);
});

//Display function 
const displayProducts=(products) => {
    const htmlString = products
    .map((product) => {
        return`
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://ean-images.booztcdn.com/sail-racing/183x239/g/srg1911520_cwhite.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Sail Racing</h5>
          <p class="card-text">Vit Sail Racing huvtröja med dragkedja</p>
          <p class="card-text">750kr</p>
          <a href="produkt1.html" class="btn">Läs mer om produkten</a>
        </div>
      </div>
        `;
        })
        .join('');
        jacketsList.innerHTML = htmlString;
};
//Loads all jackets
displayJackets(allJackets);