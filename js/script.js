/**
*						
*
*/
'use strict;'

// window.onload = function()
// {
	// let button = document.querySelector('#ggg');
	// button.addEventListener('checked', function() {
	// alert('message');
// });

// button.addEventListener('mouseover', function() {
	// let clickEvent = new Event('checked'); // создаем событие
	// this.dispatchEvent(clickEvent); // имитируем клик на кнопку
// });
// }
 function toggle_visibility(class_name)
 {
		let elements = document.querySelectorAll(class_name);
		for (let elem of elements)
		{
			elem.classList.toggle('display_unit');
		}
		
 }