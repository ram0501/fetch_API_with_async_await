const containerDiv = document.querySelector(".card-container");
async function getDetails(id) {
  try {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    if (!response.ok) {
      throw new Error(`No user found with this ${id}`);
    }
    const userData = await response.json();
    console.log(userData);
    displayUser(userData, "beforeend");
  } catch (err) {
    console.error(err);
  }
}
function displayUser(user, pos) {
  const card = `<div class="card " style="width: 20rem; margin-top: 10vh">
  <img src=${user.image} class="card-img-top" alt="profile image" />
  <div class="card-body">
  <h5 class="card-title">Id : ${user.id}</h5>
    <h5 class="card-title">Name : ${user.firstName} ${user.lastName}</h5>
    <h5 class="card-title">Email : ${user.email}</h5>
  </div>
</div>`;
  containerDiv.insertAdjacentHTML(pos, card);
}
getDetails(1);
getDetails(5);
getDetails(10);
