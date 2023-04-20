const carList = document.getElementById("car-list");

document.getElementById("add-car").addEventListener("click", (e) => {
    e.preventDefault()

    const model = document.getElementById("model").value;
    const year = document.getElementById("year").value;
    const price = document.getElementById("price").value;
    const color = document.getElementById("color").value;
    const customs = document.getElementById("customs").checked ? "Yes" : "No";

    if (!model || !year || !price || !color || !customs) {
        alert("Please fill in all fields");
        return false;
      }

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
          <td>${model}</td>
          <td>${year}</td>
          <td>${price}</td>
          <td>${color}</td>
          <td>${customs}</td>
        `;

    carList.appendChild(newRow);

    document.getElementById("model").value = "";
    document.getElementById("year").value = "";
    document.getElementById("price").value = "";
    document.getElementById("color").value = "";
    document.getElementById("customs").checked = false;
});

document.getElementById('clear-cars').addEventListener('click',  (e) =>{
    e.preventDefault()
    while (carList.firstChild) {
        carList.removeChild(carList.firstChild);
      }
});

document.getElementById('search-button').addEventListener('click', function () {
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    
    for (let i = 0; i < carList.children.length; i++) {
        const carName = carList.children[i].querySelector('td:first-child').textContent.toLowerCase();
        if (carName.includes(searchValue)) {
            carList.children[i].style.display = 'table-row';
        } else {
            carList.children[i].style.display = 'none';
        }
    }
});