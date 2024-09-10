const data = [
	{
			img: '/assets/img/html.jpg',
			info: 'HTML-верстальщик',
			id: '1',
	},
	{
			img: '/assets/img/front.avif',
			info: 'Frontend разработчик',
			id: '2',
	},
	{
			img: '/assets/img/back.jpg',
			info: 'Backend разработчик',
			id: '3',
	},
	{
			img: '/assets/img/full.jpg',
			info: 'Fullstack разработчик',
			id: '4',
	},
]


function initCart(arr) {
	
	
	const wrapWrit = document.querySelector('.wrapWhite');

	const wrapBlack = document.createElement('div');
	wrapBlack.classList.add('wrapBlack');

	const wrapImg = document.createElement('div');
	wrapImg.classList.add('wrapImg');


arr.forEach((el) => {
	const image = document.createElement('div');
	image.classList.add('image');

  const img = document.createElement('img');
	img.src = el.img;
	img.alt = 'фото программиста';

	image.append(img);
	wrapImg.append(image);
	})
	
wrapBlack.append(wrapImg);
	

	const infoInput = document.createElement('div');
	infoInput.classList.add('infoInput');

	const info = document.createElement('div');
	info.classList.add('info');

	const p = document.createElement('p');
	p.innerHTML = data[0].info;

	info.append(p);
	infoInput.append(info);


	const inputButtom = document.createElement('div');
	inputButtom.classList.add('inputButtom');

	const radio1 = document.createElement('input');
	radio1.classList.add('radio');
	radio1.type = 'radio';
	radio1.name = 'slider';
	radio1.id = '1';
	radio1.setAttribute('checked', '');

	const label1 = document.createElement('label');
	label1.setAttribute('for', '1');

	const radio2 = document.createElement('input');
	radio2.classList.add('radio');
	radio2.type = 'radio';
	radio2.name = 'slider';
	radio2.id = '2';

	const label2 = document.createElement('label');
	label2.setAttribute('for', '2');

	const radio3 = document.createElement('input');
	radio3.classList.add('radio');
	radio3.type = 'radio';
	radio3.name = 'slider';
	radio3.id = '3';

	const label3 = document.createElement('label');
	label3.setAttribute('for', '3');

	const radio4 = document.createElement('input');
	radio4.classList.add('radio');
	radio4.type = 'radio';
	radio4.name = 'slider';
	radio4.id = '4';

	const label4 = document.createElement('label');
	label4.setAttribute('for', '4');
	
	inputButtom.append(radio1);
	inputButtom.append(label1);
	inputButtom.append(radio2);
	inputButtom.append(label2);
	inputButtom.append(radio3);
	inputButtom.append(label3);
	inputButtom.append(radio4);
	inputButtom.append(label4);

	infoInput.append(inputButtom);
	
	wrapBlack.append(infoInput);
	wrapWrit.append(wrapBlack);
	console.log(wrapBlack)
}
initCart(data)


let one = document.querySelectorAll('.radio');
let infoInput = document.querySelector('.infoInput'); 

infoInput.addEventListener('click', function () {
	if(event.target.closest('.radio')) {
		let a = event.target.id;
		let image = document.querySelectorAll('.image');

		let i = 0;
		if(a == 1) {
			i = 0;
		} else if( a == 2) {
			i = 0 - 96;
		} else if( a == 3) {
			i = 0 - 96 * 2;
		} else if( a == 4) {
			i = 0 - 96 * 3;
		}

		image.forEach ((el) => {el.style.transform = `translate(${i}vw)`;})

		

		
		

		
		}
})
