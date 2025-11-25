const loading = document.getElementById("loading");
const userContainer = document.getElementById("user-container");

async function renderUser() {
  try {
    loading.classList.remove("hidden");
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];
    userContainer.innerHTML = "";
    const card = document.createElement("div");
    card.className = "card bg-base-100 w-96 shadow-2xl";

    card.innerHTML = `
      <figure class="px-10 pt-10">
        <img src="${user.picture.large}" 
             alt="Foydalanuvchi rasmi" 
             class="rounded-full w-32 h-32 object-cover border-4 border-primary" />
      </figure>

      <div class="card-body items-center text-center">
        <h2 class="card-title text-2xl">
          ${user.name.title} ${user.name.first} ${user.name.last}
        </h2>
        <p class="text-lg opacity-80">
          ${user.location.street.number} ${user.location.street.name}<br>
          ${user.location.city}, ${user.location.country}
        </p>
        <p class="mt-3">
          <span class="font-medium">Email:</span>
          <span class="text-primary">${user.email}</span>
        </p>

        <div class="card-actions mt-8">
          <button class="btn btn-primary btn-wide" onclick="renderUser()">
            Yangi foydalanuvchi
          </button>
        </div>
      </div>
    `;
    userContainer.appendChild(card);
  } catch (error) {
    userContainer.innerHTML = `
      <div class="alert alert-error shadow-lg max-w-md">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        <span>Xatolik: ${error.message}</span>
      </div>
    `;
    console.error("Xato:", error);
  } finally {
    loading.classList.add("hidden");
  }
}
renderUser();