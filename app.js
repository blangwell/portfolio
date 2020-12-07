const drawerTitle = document.querySelectorAll('.drawer__title');
const drawerControl = document.querySelectorAll('.drawer__control');

drawerTitle.forEach(dt => {
  dt.addEventListener('click', (e) => {
    const content = dt.nextElementSibling;
    console.log(content)
    if (content.style.maxHeight) content.style.maxHeight = null;
    else content.style.maxHeight = content.scrollHeight + "px";
  });
});

drawerControl.forEach(dt => {
  dt.addEventListener('click', (e) => {
    const content = dt.nextElementSibling;
    console.log(content)
    if (content.style.maxHeight) content.style.maxHeight = null;
    else content.style.maxHeight = content.scrollHeight + "px";
  });
});