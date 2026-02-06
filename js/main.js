import { fetchRequest } from "./modules/fetch.js";
import { navbar_showhide } from "./modules/hamburger.js";
import { greensockAnim } from "./modules/greensock.js";
import { scrollTo } from "./modules/scrollTo.js";

scrollTo();
greensockAnim();
fetchRequest();
navbar_showhide();