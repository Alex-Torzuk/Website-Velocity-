const tabsBtns = document.querySelectorAll('.tabs__nav button')
// console.log(tabsBtns)

const tabsItems = document.querySelectorAll('.tabs__item')
// console.log(tabsItems)

// Ф-я скрывает табы и убирает active у кнопки

function hideTabs() {
    tabsItems.forEach(item => item.classList.add('hide'))
    tabsBtns.forEach(item => item.classList.remove('active'))
    }

    // Ф-я показывает переданный номер таба и делает соответствующую
    //ему кнопку активной.

    function showTab(index){
        tabsItems[index].classList.remove('hide')
        tabsBtns[index].classList.add('active')
    }

    hideTabs()
    showTab(0)

    tabsBtns.forEach((btn, index) => btn.addEventListener('click', () => {
        hideTabs()
        showTab(index)
    }))

    //Anchors

    const anchors = document.querySelectorAll('.header__nav a')
    anchors.forEach(anc => {
        anc.addEventListener('click', function(event){
            event.preventDefault()

            const id = anc.getAttribute('href')
            const elem = document.querySelector(id)

            // console.log(elem.offsetTop)
            window.scroll({
                top: elem.offsetTop - 85,
                behavior: 'smooth'
            })
        })
    })