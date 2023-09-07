window.onload = function() {
    select();
    tabs();
    opnePop();  
    accordion();  
    // sideMenu();
}

const select = function () {
    
    const parent = document.querySelectorAll('[selectbox]');
    parent.forEach(function(select) {
        const selectBox = select.querySelector('select');
        selectBox.addEventListener('click', function(e) {
            select.classList.toggle('focus');
            console.log("열림")
        });

        selectBox.addEventListener('blur', function(e) {
            select.classList.remove('focus');
            console.log("포커스아웃")
        });
        // selectBox.addEventListener('change', function(e) {
        //     select.classList.remove('focus');
        //     console.log("선택")
        // });      
    });
   
    const resizingSelect = document.querySelectorAll("[select-sizing]");
    
    resizingSelect.forEach(function (evt) {
        const helperElement = document.querySelector("[helper-element]");
        evt.addEventListener("change", function(e){
            helperElement.innerHTML = e.target.querySelector(
                "option:checked"
            ).innerText;
            resize(helperElement.offsetWidth);
        });
    });
    function resize(width) {
        const root = document.documentElement;
        root.style.setProperty("--dynamic-size", `${width}px`);
    }
}



const tabs = function () {
	const tabsContainer = document.querySelector("[tab-list]");
    const tabTogglers = document.querySelectorAll("[tab-list] li span");
    
    // console.log(tabTogglers);
    tabTogglers.forEach(function(toggler) {
    toggler.addEventListener("click", function(e) {
        e.preventDefault();

        let tabName = this.getAttribute("data-tab");
        let tabContents = document.querySelector("[tab-contents]");
         

        for (let i = 0; i < tabContents.children.length; i++) {   
                 
        
        tabTogglers[i].parentElement.classList.remove("on");
        
        if (tabsContainer.classList.contains("remove-type")) {
            tabTogglers[i].nextElementSibling.classList.add("hidden");
        }
        tabContents.children[i].classList.remove("hidden");
            if ("#" + tabContents.children[i].id === tabName) {
                continue;
        }
        
        tabContents.children[i].classList.add("hidden");
        
        }
        e.target.parentElement.classList.add("on");  
        if (tabsContainer.classList.contains("remove-type")) {
            e.target.nextElementSibling.classList.remove("hidden");
        }
    });
    });
};

const opnePop = function () {
    const opnePop = document.querySelectorAll("[data-pop]");

    opnePop.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
        event.preventDefault();
        const pops = document.getElementById(trigger.dataset.pop);
        pops.classList.add("visible", "opacity-100", "delay-0");
        pops.classList.remove("invisible", "opacity-0");
        const exits = pops.querySelectorAll(".pops-exit");
        exits.forEach(function (exit) {
        exit.addEventListener("click", function (event) {
            event.preventDefault();
            pops.classList.remove("visible", "opacity-100", "delay-0");
            pops.classList.add("invisible", "opacity-0");
        });
        });
    });
    });
};

const accordion = function () {
    const accTrigger = document.querySelectorAll("[acc-tit]");

    accTrigger.forEach((accTit) => {
        accTit.addEventListener("click", () => {
            if (accTit.classList.contains("is-open")) {
                accTit.classList.remove("is-open");
            } else {
                const accTriggerOpen = document.querySelectorAll(".is-open");
                accTriggerOpen.forEach((accOpen) => {
                    accOpen.classList.remove("is-open");
                });
                accTit.classList.add("is-open");
            }
        });
    });
}

// const sideMenu = function () {
//     const body = document.querySelector('body'),
//             sidebar = body.querySelector('nav'),
//             toggle = body.querySelector(".toggle");

//             sidebar.forEach((toggle) => {
//                 toggle.addEventListener("click" , () =>{
//                 sidebar.classList.toggle("close");
//         })
//     });

// }

// 퍼블 include
function includeHTML(){
    let z, elmnt, file, xhttp; 
    z = document.getElementsByTagName("*");
    
    for (let i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("data-include");
      
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            elmnt.removeAttribute("data-include");
            includeHTML();
          }
        }
 
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
}
window.addEventListener('DOMContentLoaded',()=>{
    includeHTML();
});