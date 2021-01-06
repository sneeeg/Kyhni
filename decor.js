let tab = function () {
    let tabNav = document.querySelectorAll('.decor_switch'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('decor_switch_active');
        });
        this.classList.add('decor_switch_active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is_active') : item.classList.remove('is_active');
        })
    }

};


tab();

let coll = document.getElementsByClassName('collapse')
for (let i=0; i<coll.length; i++) {
    coll[i].addEventListener('click', function () {
        this.classList.toggle('active')
        let content = this.nextElementSibling
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
}