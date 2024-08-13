function showSidebar()
{
    let showSidebar=document.querySelector('.sidebar');
    showSidebar.style.display='flex';
}
function hideSidebar()
{
    let hideSidebar=document.querySelector('.sidebar');
    hideSidebar.style.display='none'
}
let grid=document.querySelector('#backgroundSpan')
for(let i=1;i<365;i++)
{
    let x=document.createElement("span");
    grid.appendChild(x);
}
let