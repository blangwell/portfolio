const drawerTitle = document.querySelectorAll('.drawer__title');
const drawerControl = document.querySelectorAll('.drawer__control');

// drawerTitle.forEach(dt => {
//   dt.addEventListener('click', (e) => {
//     const content = dt.nextElementSibling;
//     console.log(content)
//     if (content.style.maxHeight) content.style.maxHeight = null;
//     else content.style.maxHeight = content.scrollHeight + "px";
//   });
// });

drawerControl.forEach(dc => {
  dc.addEventListener('click', () => {
    console.log(dc.children[1])
    const content = dc.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      dc.children[1].style.transform = 'rotate(180deg)';
    }
    else {
      dc.children[1].style.transform = 'none';
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});