const searchBar = document.getElementById('search-bar');
  const productList = document.getElementById('product-list').children;

  searchBar.addEventListener('input', function() {
    const searchText = searchBar.value.toLowerCase();
    for (let i = 0; i < productList.length; i++) {
      const product = productList[i];
      const productName = product.querySelector('h2').innerText.toLowerCase();
      if (productName.startsWith(searchText)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    }
  });