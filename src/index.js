import "./styles.css";
import homeModule from "./home.js";
import menuModule from "./menu.js";
import contactModule from "./contact.js";

(function() {
    // cache DOM
    const $content = document.getElementById('content');
    const $homeBtn = document.getElementById('home-btn');
    const $menuBtn = document.getElementById('menu-btn');
    const $contactBtn = document.getElementById('contact-btn');
  
    // load home page
    homeModule.changeContent($content);

    // add event listeners
    $homeBtn.addEventListener('click', () => homeModule.changeContent($content));
    $menuBtn.addEventListener('click', () => menuModule.changeContent($content));
    $contactBtn.addEventListener('click', () => contactModule.changeContent($content));
})();