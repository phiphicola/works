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
            select.classList.add('focus');
        });

        selectBox.addEventListener('blur', function(e) {
            select.classList.remove('focus');
            
        });
        selectBox.addEventListener('change', function(e) {
            select.classList.remove('focus');
            
        });        

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
        
        tabTogglers[i].classList.remove("text-primary-dark", "border-b-2", "border-b-primary-dark");
        tabContents.children[i].classList.remove("hidden");
        if ("#" + tabContents.children[i].id === tabName) {
            continue;
        }
        tabContents.children[i].classList.add("hidden");
        
        }
        e.target.classList.add("text-primary-dark", "border-b-2", "border-b-primary-dark");
    });
    });
};

const opnePop = function () {
    const opnePop = document.querySelectorAll("[data-pop]");

    opnePop.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
        event.preventDefault();
        const pops = document.getElementById(trigger.dataset.pop);
        pops.classList.add("open");
        const exits = pops.querySelectorAll(".pops-exit");
        exits.forEach(function (exit) {
        exit.addEventListener("click", function (event) {
            event.preventDefault();
            pops.classList.remove("open");
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