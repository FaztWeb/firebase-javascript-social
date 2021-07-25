import { createUser } from "../services/auth";

export const register = () => {
  const registerHTML = document.createElement("div");

  registerHTML.innerHTML = `
	<div class="col-md-4 offset-md-4">
	<div class="card bg-dark text-white rounded-0 p-4">
	  <div class="card-body">
		<h1 class="h5">Signup</h1>
		<h3 class="h6">Create new Account</h3>

		<form id="register-form">
		  <div class="mb-2">
			<label for="email">Email:</label>
			<input
			  type="email"
			  name="email"
			  class="
				form-control
				rounded-0
				bg-dark
				border-secondary
				text-white
			  "
			  placeholder="email"
			  autofocus
			/>
		  </div>
		  <div class="mb-2">
			<label for="password">Password:</label>
			<input
			  type="password"
			  name="password"
			  class="
				form-control
				bg-dark
				rounded-0
				border-secondary
				text-white
			  "
			  placeholder="password"
			/>
		  </div>
		  <button class="btn btn-primary rounded-0">Register</button>
		</form>
	  </div>
	</div>
  </div>
`;

  const registerForm = registerHTML.querySelector("#register-form");

  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = registerForm["email"].value;
    const password = registerForm["password"].value;
    try {
      await createUser(email, password);
    } catch (error) {
      console.error(error);
    }

	window.location.href = "#/dashboard"

  });

  return registerHTML;
};
