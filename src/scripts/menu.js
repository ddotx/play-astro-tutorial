document.querySelector('.hamburger').addEventListener('click', () => {
  console.log('clicked');
  document.querySelector('.nav-links').classList.toggle('expanded')
});