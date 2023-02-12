document.querySelectorAll('.schedule-dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.schedule-dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.schedule-dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.schedule-dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.schedule-dropdown__input-hidden');

	dropDownBtn.addEventListener('click', function (e) {
		if (this.classList.contains('schedule-dropdown__button--active')) {
			this.classList.remove('schedule-dropdown__button--active');
			dropDownList.classList.remove('schedule-dropdown__list--visible');
		} else {
		dropDownList.classList.toggle('schedule-dropdown__list--visible');
        this.classList.add('schedule-dropdown__button--active');	
		}
	});
	
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('schedule-dropdown__list--visible');
			dropDownBtn.classList.remove('schedule-dropdown__button--active');
		});
	});

	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('schedule-dropdown__button--active');
			dropDownList.classList.remove('schedule-dropdown__list--visible');
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('schedule-dropdown__button--active');
			dropDownList.classList.remove('schedule-dropdown__list--visible');
		}
	});
});


// burger dropdown

const hideDropdownBtn = document.querySelector('.schedule__dropdown-btn-close');
const showDropdownBtn = document.querySelector('.schedule__dropdown-btn-open');
const formWrapper = document.querySelector('.schedule__form-wrapper')

showDropdownBtn.addEventListener('click', () => {
	formWrapper.classList.add('schedule__dropdown--active');
});

hideDropdownBtn.addEventListener('click', () => {
	formWrapper.classList.remove('schedule__dropdown--active');
});