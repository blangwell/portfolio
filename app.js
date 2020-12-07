const drawerTitle = document.querySelectorAll('.drawer__title');

console.log(drawerTitle);

drawerTitle.forEach(dt => {
  dt.addEventListener('click', (e) => {
    const drawerClasses = dt.nextElementSibling.classList;
    if (drawerClasses.contains('closed-drawer')) {
      drawerClasses.remove('closed-drawer');
    } else {
      drawerClasses.add('closed-drawer');
    };
  });
});