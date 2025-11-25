import "./styles.css";
import homeModule from "./home.js";
import menuModule from "./menu.js";
import contactModule from "./contact.js";

(function() {
    // cache DOM
    const $content = document.getElementById('content');
    const $homeBtn = document.getElementById('home-btn');
    const $menuBtn = document.getElementById('menuBtn');
    const $contactBtn = document.getElementById('contactBtn');
  
    // load home page
    homeModule.changeContent($content);

    // add event listeners
    $homeBtn.addEventListener('click', () => homeModule.changeContent($content));
    
    // UNCOMMENT AFTER FINISHING menu.js AND contact.js RESPECTIVELY
    //$menuBtn.addEventListener('click', () => menuModule.changeContent($content));
    //$contactBtn.addEventListener('click', () => contactModule.changeContent($content));
})();