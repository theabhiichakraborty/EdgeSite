//To hide and show sidebar on click

let letsTalk=document.querySelector('#LetsTalk');
function showSidebar()    //To show sidebar .Function called onclick
{
    let showSidebar=document.querySelector('.sidebar');
    letsTalk.style.display='none'
    showSidebar.style.display='flex';
}
function hideSidebar()   //To hide sidebar .Function called when tapped outide or clicked on button
{
    let hideSidebar=document.querySelector('.sidebar');
    hideSidebar.style.display='none';
    letsTalk.style.display='flex';
}

//Creating multiple grids for signin page
let grid=document.querySelector('#backgroundSpan')
for(let i=1;i<665;i++)
{
    let x=document.createElement("span");
    grid.appendChild(x);
}
