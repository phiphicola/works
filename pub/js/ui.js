window.onload = function() {
    select();
    tabs();
    openPop();  
    accordion();  
    sideMenu();
    onOffToggle(); 
    dragList();
    clearInput();
}


const onOffToggle = function () {
    const toggleBody = document.querySelectorAll('.toggle-body');
    toggleBody.forEach(function(toggle) {
        const toggleBtn = toggle.querySelector('.open-extend');
        toggleBtn.addEventListener('click', function(e) {
            toggle.classList.toggle('open');
        });
    });
}

const select = function () {
    
    const parent = document.querySelectorAll('[selectbox]');
    parent.forEach(function(select) {
        const selectBox = select.querySelector('select');
        selectBox.addEventListener('click', function(e) {
            select.classList.toggle('focus');
        });

        selectBox.addEventListener('blur', function(e) {
            select.classList.remove('focus');
        });     
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


let getSiblings = function (e) {
    let siblings = [];

    if(!e.parentNode) {
        return siblings;
    }
    let sibling  = e.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};


const tabs = function () {
	const tabsContainer = document.querySelector("[tab-list]");
    const tabTogglers = document.querySelectorAll("[tab-list] li span");
    
    tabTogglers.forEach(function(toggler) {
    toggler.addEventListener("click", function(e) {
        e.preventDefault();

        let tabName = this.getAttribute("data-tab");

        let tabContents = document.querySelectorAll("[tab-contents] > div");

        let tabLinkSiblings = getSiblings(toggler.closest('li'));
        let togglerParent = toggler.closest('li');

        togglerParent.classList.add('on')
        tabLinkSiblings.forEach(function (_this) {
            _this.classList.remove('on');
        })

        tabContents.forEach(function (_this) {
            let tabId = `#${_this.id}`;
            if (tabName === tabId) {
                _this.classList.remove('hidden');
                let _thisSiblings = getSiblings(_this);
                // console.log(_thisSiblings)
                _thisSiblings.forEach(function (tabSiblings) {
                    tabSiblings.classList.add('hidden');
                })
            }
        });
    });
    });
};

const openPop = function () {
    const openPop = document.querySelectorAll("[data-pop]");

    openPop.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
        event.preventDefault();
        const pops = document.getElementById(trigger.dataset.pop);
        pops.classList.add("open");
        // pops.classList.remove("open");
        const exits = pops.querySelectorAll(".pops-exit");
        exits.forEach(function (exit) {
        exit.addEventListener("click", function (event) {
            event.preventDefault();
            pops.classList.remove("open");
            // pops.classList.add("invisible", "opacity-0");
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
const clearInput = function () {
    const btnClear = document.querySelectorAll('.btnClear');
        btnClear.forEach(function(btn){
            btn.addEventListener('click', function(){
                btn.parentNode.querySelector('input').value = "";
            })
        })
}
const sideMenu = function () {
    const arrow = document.querySelectorAll(".arr-btn");
    for (var i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", (e)=>{
            const accMenu = e.target.closest('li');
            if (accMenu.classList.contains('acc')) {
                const arrowPoint = e.target.parentElement;
                arrowPoint.classList.toggle("show-menu");
            }
        });
    }

    let sidebar = document.querySelector("nav");
    let sidebarBtn = document.querySelector(".bx-menu");
    console.log(sidebarBtn);
    sidebarBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
    });


    let menuTrigger = document.querySelectorAll(".nav-menu > li > a");

    menuTrigger.forEach((triggerLi) => {
        triggerLi.addEventListener("click", () => {
            if (triggerLi.classList.contains("on")) {
                triggerLi.classList.remove("on");
            } else {
                const menuTriggerOpen = document.querySelectorAll(".on");
                menuTriggerOpen.forEach((openMenu) => {
                    openMenu.classList.remove("on");
                });
                triggerLi.classList.add("on");
            }
        });
    });


    let subMenu = document.querySelectorAll(".sub-menu > li");

    subMenu.forEach((sub) => {
        sub.addEventListener("click", () => {
            if (sub.classList.contains("on-sub")) {
                sub.classList.remove("on-sub");
            } else {
                const subMenuOpen = document.querySelectorAll(".on-sub");
                subMenuOpen.forEach((subOpen) => {
                    subOpen.classList.remove("on-sub");
                });
                sub.classList.add("on-sub");
            }
        });
    });


}

const dragList = function () {
    
    const dragDrop = document.getElementById('dragList');
    let draggedItem = null;

    // Add event listeners for drag and drop events
    dragDrop.addEventListener('dragstart', handleDragStart);
    dragDrop.addEventListener('dragover', handleDragOver);
    dragDrop.addEventListener('drop', handleDrop);

    // Drag start event handler
    function handleDragStart(event) {
      draggedItem = event.target;
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/html', draggedItem.innerHTML);
      event.target.style.opacity = '0.5';
    }

    // Drag over event handler
    function handleDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      const targetItem = event.target;
      if (targetItem !== draggedItem && targetItem.classList.contains('drag-item')) {
        const boundingRect = targetItem.getBoundingClientRect();
        const offset = boundingRect.y + (boundingRect.height / 2);
        if (event.clientY - offset > 0) {
        //   targetItem.style.borderBottom = 'solid 2px #000';
          targetItem.style.borderTop = '';
          targetItem.getAttribute = 'disabled';
        } else {
        //   targetItem.style.borderTop = 'solid 2px #000';
          targetItem.style.borderBottom = '';
          targetItem.removeAttribute = 'disabled';
        }
      }
    }

    // Drop event handler
    function handleDrop(event) {
      event.preventDefault();
      const targetItem = event.target;
      if (targetItem !== draggedItem && targetItem.classList.contains('drag-item')) {
        if (event.clientY > targetItem.getBoundingClientRect().top + (targetItem.offsetHeight / 2)) {
          targetItem.parentNode.insertBefore(draggedItem, targetItem.nextSibling);
        } else {
          targetItem.parentNode.insertBefore(draggedItem, targetItem);
        }
      }
      targetItem.style.borderTop = '';
      targetItem.style.borderBottom = '';
      draggedItem.style.opacity = '';
      draggedItem = null;
    }

}

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