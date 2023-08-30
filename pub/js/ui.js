window.onload = function() {
    select();
    tabs();
    opnePop();  
    accordion();  
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
   
    
}

const tabs = function () {
	const tabsContainer = document.querySelector("[tab-list]");
    const tabTogglers = document.querySelectorAll("[tab-list] a");
    
    console.log(tabTogglers);
    tabTogglers.forEach(function(toggler) {
    toggler.addEventListener("click", function(e) {
        e.preventDefault();

        let tabName = this.getAttribute("href");
        let tabContents = document.querySelector("[tab-contents]");

        for (let i = 0; i < tabContents.children.length; i++) {   
                 
        tabTogglers[i].classList.remove("font-semibold","text-primary-dark", "border-b-2", "border-b-primary-dark");
        if (tabsContainer.classList.contains("blue-type")) {
            tabTogglers[i].classList.remove("text-primary-blue", "border-b-primary-blue"); 
        }
        tabContents.children[i].classList.remove("hidden");
        if ("#" + tabContents.children[i].id === tabName) {
            continue;
        }
        tabContents.children[i].classList.add("hidden");
        
        }
        e.target.classList.add("font-semibold", "text-primary-dark", "border-b-2", "border-b-primary-dark");
        if (tabsContainer.classList.contains("blue-type")) {
            e.target.classList.add("text-primary-blue", "border-b-primary-blue");
            e.target.classList.remove("text-primary-dark", "border-b-primary-dark");
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