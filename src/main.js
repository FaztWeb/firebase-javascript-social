import { router } from "./lib/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";

window.addEventListener("hashchange", router);
