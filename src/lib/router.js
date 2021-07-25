import { register } from "../components/register";
import { dashboard } from "../components/dashboard";

export const router = () => {
  const root = document.getElementById("root");
  root.innerHTML = "";

  switch (window.location.hash) {
    case "#/":
      return (root.innerHTML = `<h1 class="text-white">root</h1>`);
    case "#/register":
      return root.append(register());
    case "#/dashboard":
      return root.append(dashboard());
  }
};
