const totalProd = 100;
function fetchProducts(limit, page) {
    const url = `https://dummyjson.com/products/?skip=${(page - 1) * 10}&limit=${limit}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => data.products);
}

function renderProductCards(products) {
    const productListElement = document.getElementById('product-list');
    productListElement.innerHTML = '';

    products.forEach(product => {
        const card = `
            <div class="col-md-4">
                <div class="card" onclick="ProductDetail(${product.id})">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">Price: $${product.price}</p>
                        <p class="card-text">Rating: ${product.rating}</p>
                        <p class="card-text">Brand: ${product.brand}</p>
                    </div>
                </div>
            </div>
        `;

        productListElement.insertAdjacentHTML('beforeend', card);
    });
}
function ProductDetail(productId) {
    console.log(productId)
    fetch(`https://dummyjson.com/products/` + productId)
        .then(response => response.json())
        .then(product => {

            console.log(product)
            let modal = `
            <div class="modal fade" tabindex="-1" role="dialog" id="product-modal">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${product.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <img src="${product.images[0]}" class="img-fluid">
                                </div>
                                <div class="col-md-6">
                                    <p><strong>Brand:</strong> ${product.brand}</p>
                                    <p><strong>Price:</strong> $${product.price}</p>
                                    <p><strong>Rating:</strong> ${product.rating}</p>
                                    <p><strong>Description:</strong> ${product.description}</p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
            let current = document.getElementById('product-modal');
            if (current) {
                current.remove();
            }

            document.body.insertAdjacentHTML('beforeend', modal);
            $('#product-modal').modal('show');
        });
}



function renderPaginationLinks(currentPage, totalPages) {
    const paginationElement = document.querySelector('.pagination');
    paginationElement.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const liClass = i === currentPage ? 'page-item active' : 'page-item';
        const link = `<a class="page-link" href="#" data-page="${i}">${i}</a>`;
        const listItem = `<li class="${liClass}">${link}</li>`;
        paginationElement.insertAdjacentHTML('beforeend', listItem);
    }
}

document.getElementById('pagination-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const limit = document.getElementById('limit').value;
    loadProducts(1, limit);
});

document.querySelector('.pagination').addEventListener('click', function (e) {
    e.preventDefault();
    const page = parseInt(e.target.dataset.page);
    const limit = document.getElementById('limit').value;
    loadProducts(page, limit);
});

function loadProducts(page, limit) {
    fetchProducts(limit, page)
        .then(products => {
            renderProductCards(products);
            renderPaginationLinks(page, totalProd / limit);
        });
}

loadProducts(1, 10);