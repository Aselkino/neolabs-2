// BOM 

//location
    // console.log(location.href);
    // location.href = "https://www.freecodecamp.org/learn/"

// alert('Hello');

// confirm('');
    // const confirmResult = confirm('Do you want to learn develop?')
    // console.log(confirmResult)

// prompt();
    // const promptResult = prompt("Are you Devepoler")
    // console.log(promptResult)


//DOM ==============

// const htmlElement = document.documentElement;
// console.log(htmlElement);

// const headElement = document.head;
// console.log(headElement)

// const bodyElement = document.body;
// console.log(bodyElement)


// const bodyElement = document.body;
// console.log(bodyElement)

// const firstChildNodes = bodyElement.childNodes;
// console.log(firstChildNodes);

// const lastChilNodes = bodyElement.lastChild;
// console.log(lastChilNodes);

// for (let node of firstChildNodes) {
//     console.log(node);
// }

// const previousSiblingNode = bodyElement.previousElementSibling;
// console.log(previousSiblingNode);

// const nextSublingNode = bodyElement.nextElementSibling;
// console.log(nextSublingNode);

// const parentNode = bodyElement.parentNode;
// console.log(parentNode);

// const childNodes = bodyElement.childNodes;
// console.log(childNodes);

// const bodyChildren = bodyElement.children;
// console.log(bodyChildren);


// const elementOne = 
//     document.querySelectorAll('.lesson__list');
// console.log(elementOne);

// const elementTwo = 
//     document.querySelectorAll('li');
// console.log(elementTwo);

// const elementThree = 
//     document.querySelectorAll('li.lesson__item-list');
// console.log(elementThree);

// const elementFour = 
//     document.querySelectorAll('.lesson__list>li')
// console.log(elementFour);

// const elementFive = 
//     document.querySelectorAll('.lesson__list, .lesson_text');
// console.log(elementFive);

// const elementSix = 
//     document.querySelectorAll('.lesson__item-sub-list');
// console.log(elementSix);

// const elementSeven = 
//     document.querySelectorAll('.lesson__item-list');
// console.log(elementSeven);



// const element = 
//     document.querySelectorAll('li')
// console.log(element[3]);

// for ( const item of element) {
//     console.log(item)
// };

// element.forEach(item => {
//     console.log(item)
// });

// const subList = document.querySelectorAll('.lesson__sub-list');
// const subItems = subList[0].querySelectorAll('li');
// console.log(subItems);

// const subList =
// 	document.querySelectorAll('.lesson__sub-list');
// const listItems =
// 	subList[0].querySelectorAll('.lesson__list .lesson__item-sub-list');
// console.log(listItems);

// const element = document.getElementById('list-item')
// console.log(element);

// const element = document.getElementsByTagName('li');
// console.log(element);

// const element = document.getElementsByName('list');
// console.log(element);

// const listStatic = document.querySelectorAll('.lesson__item-list');
// console.log(listStatic);

// const listLive = document.getElementsByClassName('lesson__item-list');
// console.log(listLive);

// const lessonList = document.querySelector('.lesson__list');
// lessonList.insertAdjacentHTML(
// 	"beforeend",
// 	'<li class="lesson__item-list">Новый пункт</li>'
// );
// console.log(lessonList);

// const element = document.querySelectorAll('.class');
// console.log(element);

// const elem = document.querySelector('.lesson__item-sub-list');
// const parentList = elem.closest('.lesson__list');
// console.log(parentList);

// const elems = document.querySelectorAll('.lesson__item-list');
// for (let elem of elems) {
// 	if (elem.matches('[class$="lesson__item-list_red"]')) {
// 		console.log('Крассный');
// 	} else if (elem.matches('[class$="lesson__item-list_blue"]')) {
// 		console.log('Синий');
// 	}
// }

// const text = document.querySelector('.lesson');
// const list = text.nextElementSibling;
// console.log(list);

// const textElement = document.querySelector('.lesson__text');

// const textElementContent = textElement.innerHTML;
// console.log(textElementContent);

// textElement.innerHTML = `Живи, а работай в свободное время!`;

// textElement.innerHTML =
// 	`<p>${textElementContent}</p> <p>Живи, а работай в
// 	<span class="yellow">свободное</span> время!</p>`;

// console.log(textElement.innerHTML);

// const textElement = document.querySelector('.lesson__text');

// const textElementContent = textElement.outerHTML;
// console.log(textElementContent);

// textElement.outerHTML = `<p>Живи, а работай в
// 	<span class="yellow">свободное</span> время!</p>`;
// console.log(textElement.outerHTML);

// const textElement = document.querySelector('.lesson__text');

// const textElementContent = textElement.textContent;
// console.log(textElementContent);

// textElement.textContent = `<p>Живи, а работай в
// 	<span class="yellow">свободное</span> время!</p>`;

// console.log(textElement.textContent);


// // data
// const textElement = document.querySelector('.lesson__text');
// const getComment = textElement.nextSibling;

// console.log(getComment);
// console.log(getComment.data);

// getComment.data = 'Привет';
// console.log(getComment.data);

// const newElement = document.createElement('div');

// newElement.innerHTML = `Живи, а работай в
// 	<span class="yellow">свободное</span> время!`;
// console.log(newElement);

// const newText = document.createTextNode('Привет!');
// console.log(newText);

// const textElement = document.querySelector('.lesson__text');
// const newElement = document.createElement('div');

// newElement.innerHTML = `Живи, а работай в
// 	<span class="yellow">свободное</span> время!`;

// textElement.before(newElement);
// textElement.after(newElement);
// textElement.prepend(newElement);
// textElement.append(newElement);
// textElement.append(newElement, "Привет!");

// textElement.append(`Живи, а работай в
// 	<span class="yellow">свободное</span> время!`);

const textElement = document.querySelector('.lesson__text');

textElement.insertAdjacentHTML(
	'afterend',
	`<p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`
);

// "beforebegin" – вставить html непосредственно перед textElement,
// "afterbegin" – вставить html в начало textElement,
// "beforeend" – вставить html в конец textElement,
// "afterend" – вставить html непосредственно после textElement.

