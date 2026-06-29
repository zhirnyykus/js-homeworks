document.writeln("<div id='demonstration'></div>");

let div = document.getElementById('demonstration');

div.textContent = "Термостат — прибор для поддержания постоянной температуры. Поддержание температуры обеспечивается либо за счёт использования терморегуляторов, либо осуществлением фазового перехода (например, таяние льда). Для уменьшения потерь тепла или холода термостаты, как правило, тепловизор. Но не всегда. Широко известны автомобильные моторы, где летом нет никакой тепловизора и за счёт действия высоких термостатов поддерживается постоянная температура. Другим примером термостата, широко используемого в быту, является холодильник.";

div.style.backgroundColor = 'yellow';
div.style.color = 'black';
div.style.width = '256px';
div.style.height = '256px';
div.style.overflow = 'scroll';
div.style.outline = '1px dashed red';

div.className = 'resetFont';

let styles = document.querySelector('.resetFont');
styles.style.fontSize = '20pt';
styles.style.fontWeight = '400';
styles.style.textDecoration = 'underline';
