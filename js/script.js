// 1)
// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається 
// за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, 
// який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. 
// Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

    const TEXT = document.querySelector('#text');
    const TEXT_AREA = document.createElement('textarea');
          TEXT_AREA.style.width = '100%'

    function changeText(event) {
        if (event.code == (event.ctrlKey && 'KeyE')) {
            event.preventDefault();
            TEXT_AREA.textContent = TEXT.textContent;
            TEXT.append(TEXT_AREA)
        } else if (event.code == (event.ctrlKey && 'KeyS')) {
            event.preventDefault();
            TEXT.innerHTML = TEXT_AREA.value;
        }
    }

    window.addEventListener('keydown', changeText)

// 2) 
//Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані 
//цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

    const TITLES = document.querySelectorAll('.titles');

    function sortTableOne(columnNumber) {
    
        let FIRST_COLUMN = document.querySelectorAll('.company')
        let FIRST_ARRAY = []

        FIRST_COLUMN.forEach(item => {
            FIRST_ARRAY.push(item.children[columnNumber].textContent)
        })

        FIRST_ARRAY.sort((a, b) => (+a) -(+b));

        FIRST_COLUMN.forEach((item, index) => {
            item.children[columnNumber].innerHTML = FIRST_ARRAY[index]
        })  
        
    }

    const clickForEach = (event) => {
        const id = event.target.id;
        sortTableOne(id)
    }

    TITLES.forEach(title => title.addEventListener('click', clickForEach))
    
// 3)
// Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо 
// затиснути мишку в правому нижньому кутку і тягнути її далі.


    const BLOCK = document.querySelector('#block');

    BLOCK.addEventListener('mousedown', changeBlockSize)

    function changeBlockSize() {
        document.addEventListener('mousemove', changingSize);

        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', changingSize);
        })

        function changingSize(event) {

            BLOCK.style.cursor = 'nwse-resize';

            BLOCK.style.width = `${event.pageX + BLOCK.offsetLeft}px`;
            
            BLOCK.style.height = `${event.pageY - BLOCK.offsetTop}px`;
            
          };
    }


    

    



    