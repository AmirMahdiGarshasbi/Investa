const menuEls = document.querySelectorAll('.menu-item');

menuEls.forEach(menuEl => {
    menuEl.addEventListener('click', () => {
        document.querySelector('.menu-active')?.classList.remove('menu-active');
        menuEl.classList.add('menu-active');
    })
})

const portfolioEls = document.querySelectorAll('.port-link');

portfolioEls.forEach(portEl => {
    portEl.addEventListener('click', () => {
        document.querySelector('.port-active')?.classList.remove('port-active');
        portEl.classList.add('port-active');
    })
})

function dropDownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}



const switchEls = document.querySelectorAll('.switch-item');

switchEls.forEach(switchEl => {
    switchEl.addEventListener('click', () => {
        document.querySelector('.switch-active')?.classList.remove('switch-active');
        switchEl.classList.add('switch-active');
    })
})

const switchTheme = () => {
  const rootEl = document.documentElement
  let dataTheme = rootEl.getAttribute('data-theme'),
      newTheme

  newTheme = (dataTheme === 'light') ? 'dark' : 'light'

  rootEl.setAttribute('data-theme', newTheme)
}

document.querySelector('#theme-switcher').addEventListener('click', switchTheme)




const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Dec 2', 'Dec 4', 'Dec 6', 'Dec 8', 'Dec 10', 'Dec 12'],
    datasets: [{
    label: '',
    data: [3, 4, 4, 4.5, 5, 5.5],
    borderWidth: 1
    }]
  },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
    }
  }
});

const hamMenu = document.querySelector('.ham-menu')

const offScreenMenu = document.querySelector('.off-screen-menu')

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active')
    offScreenMenu.classList.toggle('active')
})