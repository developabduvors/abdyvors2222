async function renDerUser() {
  try {
    const res = await fetch("https://randomuser.me/api");
    const data = await res.json();

    document.body.innerHTML = ""; // eski contentni tozalash

    data.results.forEach(user => {
      const div = document.createElement("div");
      div.className =
"bg-white p-6 rounded-2xl shadow-lg text-center w-80 flex flex-col items-center justify-center"

      // tugma yaratamiz
      const btn = document.createElement("button");
      btn.className =
        "mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition";
      btn.textContent = "Change user";
      btn.addEventListener("click", renDerUser);

      div.innerHTML = `
        <img src="${user.picture.large}" alt="user picture" class="w-32 h-32 mx-auto rounded-full border-4 border-gray-200 mb-4 object-cover">
        <h2 class="text-xl font-semibold text-gray-800">${user.name.title} ${user.name.first} ${user.name.last}</h2>
        <span class="text-xl font-normal text-black">${user.location.street.name}</span>
        <p class="text-xl font-normal text-blue-600"> <span class="text-black">email:</span>  ${user.email}</p>
      `;

      div.appendChild(btn);
      document.body.appendChild(div);
    });

  } catch (error) {
    console.log("xatolik:", error);
  }
}

renDerUser();