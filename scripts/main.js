"use strict";

const optionDropdown = document.querySelector('#option-dropdown'),
		linkItems = document.querySelectorAll('#chooseItemWrapper .list__link');
// Burger variables
const burgerTrigger = document.querySelector('#burgerTrigger');
burgerTrigger.addEventListener('click', (e) => {
	e.preventDefault();
	burgerTrigger.classList.toggle('active');
	
		document.querySelector('#header').classList.add('active')
		document.querySelector('#black').style.visibility = 'visible';
		document.querySelector('#black').style.opacity = '0.5';
		document.body.style.overflow = 'hidden';
});
document.querySelector('#header-menu').addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('#header').classList.remove('active');
	document.querySelector('#black').style.visibility = 'hidden';
	document.querySelector('#black').style.opacity = '0';
	document.body.style.overflow = '';
	burgerTrigger.classList.remove('active');
});

// Function for dropdowns
const dropShow = (trigger, element, activeClass = 'active') => {

	trigger.addEventListener('click', () => {
		element.classList.toggle(activeClass);
	})
}

dropShow(optionDropdown, document.querySelector('#dropdown-list'));
// ****************************************************************
// Changing default name
linkItems.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		document.querySelector('#option-dropdown span').textContent = item.textContent;
	});
});
// **************************************************************************************
// Function for showing modal
const modal = (trigger, modalElement, active = 'active') => {
	trigger.addEventListener('click', (e) => {
		e.preventDefault();
		e.target.classList.toggle(active);
		modalElement.classList.add(active);
		document.querySelector('#black').classList.add(active);
	});
	}
modal(document.querySelector('#phone-modal'), document.querySelector('#phoneModalWrapper'));
// ******************************************************************************************
// Function for closing modal
const modalClose = (trigger, modalElement, active = 'active') => {
	trigger.addEventListener('click', (e) => {
		e.preventDefault();
		modalElement.classList.remove(active);
		document.querySelector('#black').classList.remove(active);
		document.querySelector('#black').style.visibility = 'hidden';
	    document.querySelector('#black').style.opacity = '0';
		document.body.style.overflow = '';
	});	
};
modalClose(document.querySelector('[data-close]'), document.querySelector('#phoneModalWrapper'));
// ***********************************************************************************************
// Function for copying email
const copyEmail = (trigger, active = 'active') => {
	trigger.addEventListener('click', (e) => {
		e.preventDefault();
		document.querySelector('#copyEmail').classList.toggle(active);
		e.target.classList.add(active);
	});
}
copyEmail(document.querySelector('#emailCopy'));
document.querySelector('#copyEmail').addEventListener('click', (e) => {
	e.preventDefault();
	e.target.classList.toggle(active);
});
// **************************************************************************
// Accordeon
const accordeonHeader = document.querySelectorAll('#accordeonHeader'),
		accordeonBody = document.querySelectorAll('#accordeonBody');


accordeonHeader.forEach( (item, index) => {
	item.addEventListener('click', () => {
		item.classList.toggle('active');
		if(item.classList.contains('active')){
			accordeonBody[index].style.maxHeight = accordeonBody[index].scrollHeight + 'px';
			accordeonBody[index].style.paddingTop = '20px';
		} else {
			accordeonBody[index].style.maxHeight = 0;
		}
	});
});
// *********************************************************************************
// Option
const trigger = document.querySelector('#equipment');

trigger.addEventListener('click', () => {
	trigger.classList.toggle('active');
	if(trigger.classList.contains('active')){
		document.querySelector('#category-list').style.maxHeight = document.querySelector('#category-list').scrollHeight + 'px';
	} else{
		document.querySelector('#category-list').style.maxHeight = 0;
	}
});
// ****************************************************************************************
// Mobile-search panel
const showBlock = (trigger, element, activeClass = 'active') => {
	trigger.addEventListener('click', e => {
		e.preventDefault();
		element.classList.add(activeClass);
		if(element.classList.contains(activeClass)){
		document.querySelector('.overlay').style.visibility = 'visible';
	    document.querySelector('.overlay').style.opacity = '0.8';
	    element.classList.add(activeClass);
	    document.body.style.overflow = 'hidden';
		}
		document.querySelector('.overlay').addEventListener('click', (e) => {
			if(e.target === document.querySelector('.overlay')){
				element.classList.remove(activeClass);
				e.target.style.visibility = 'hidden';
				e.target.style.opacity = '0';
				document.body.style.overflow = '';
			}
		});
	});
}

showBlock(document.querySelector('#mobile-btn'), document.querySelector('#searchPanel'));
// ***************************************************************************************
const mobileTrigger = document.querySelector('#mobile-trigger');
mobileTrigger.addEventListener('click', e => {
	e.preventDefault();
	document.querySelector('#phoneModalWrapper').classList.add('active');
	document.querySelector('#black').classList.add('active');
	document.querySelector('#black').style.visibility = 'visible';
	document.querySelector('#black').style.opacity = '0.5';
	document.body.style.overflow = 'hidden';
});