let filter = document.getElementById("input");
let result = document.getElementById("result");
const listItem = [];

async function chatlist() {
  const res = await fetch("https://randomuser.me/api?results=50");

 

  const { results } = await res.json();

  // Clear result
  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    listItem.push(li);

    li.innerHTML = `
          <img src="${user.picture.large}" alt="${user.name.first}">
          <div class="user-info">
              <h4>${user.name.first} ${user.name.last}</h4>
              <p>${user.location.city}, ${user.location.country}</p>
          </div>
      `;

    result.appendChild(li);
  });
}
chatlist();

filter.addEventListener("input", (e) => filterData(e.target.value));
function filterData(searchTerm) {
  listItem.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
