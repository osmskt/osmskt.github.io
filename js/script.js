/**
*						
*
*/
'use strict;'
window.onload = function()
{
	document.querySelector(".showmenu").click(); //эмулируем клик по меню
}
 function toggle_visibility(class_name)
{
	let elements = document.querySelectorAll(class_name);
	for (let elem of elements)
	{
		elem.classList.toggle('display_unit');
	}
	
}