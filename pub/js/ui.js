window.onload = function() {
    tabs();
    modals();
    select();
}

const select = function () {
    const selectBox = document.querySelectorAll('select');
    
    selectBox.addEventListener('focus', function(e) {
        this.parent().classList.add("focus");
    });
    // selectBox.addEventListener('blur', (e) => {
    //     this.parent().classList.remove("focus");
    // });
    // selectBox.addEventListener('change', (e) => {
    //     this.parent().classList.remove("focus");
    // });
}

const tabs = function () {
	let tabsContainer = document.querySelector(".tabs");
    let tabTogglers = tabsContainer.querySelectorAll(".tabs a");
    console.log(tabTogglers);
    tabTogglers.forEach(function(toggler) {
    toggler.addEventListener("click", function(e) {
        e.preventDefault();

        let tabName = this.getAttribute("href");

        let tabContents = document.querySelector(".tab-contents");

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

const modals = function () {
    const modals = document.querySelectorAll("[data-modal]");

    modals.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
        event.preventDefault();
        const modal = document.getElementById(trigger.dataset.modal);
        modal.classList.add("open");
        const exits = modal.querySelectorAll(".modal-exit");
        exits.forEach(function (exit) {
        exit.addEventListener("click", function (event) {
            event.preventDefault();
            modal.classList.remove("open");
        });
        });
    });
    });
};
