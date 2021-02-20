//Control vertical amount of cells
const gridXCount = 100;

// Main functionbody
function paint() {
    
    const avalaibleColors = [
        'red',
        'green',
        'blue',
        'yellow',
        'black',
        'white',
        'purple'
    ];


    defaultColorIndex = 0;
    isContextMenuOpen = false;
    isMousePressed = false;
    paintOnDrag = true;

    // Select main or create one if unavailable
    const main = document.querySelector('main') ?? (function () { document.body.append(document.createElement('main')); return document.querySelector('main') })();
    main.addEventListener('mousedown', ({ target, buttons }) => { if (buttons === 2) return; isMousePressed = true; paintOnDrag  = target.hasAttribute('color') } );
    main.addEventListener('mouseup', () => { isMousePressed = false; paintOnDrag = false; });

    // Create styling
    const styling = document.createElement('style');
    styling.type = 'text/css';

    // Create contextmenu
    const menu = document.createElement('section');
    menu.classList.add('context-menu');
    menu.addEventListener('mouseleave', closeContextMenu);
    const menuItem = document.createElement('div');
    menuItem.classList.add('context-menu--item');

    // Create cell blueprint
    const cell = document.createElement('div');
    cell.classList.add('cell');
    
    // Calculate cellsizes en amounts 
    const cellSize = main.clientWidth / gridXCount;
    const gridYCount = Math.floor(main.clientHeight / cellSize);

    // Create color options and styling for it
    avalaibleColors.forEach((color) => {
        let nmi = menuItem.cloneNode();
        nmi.style.backgroundColor = color;
        menu.appendChild(nmi);
        nmi.addEventListener('click', (event) => { selectColor(color, event); closeContextMenu(event) }, {
            capture: false
        });
        addToStyling(`.cell[color="${color}"] { background-color: ${color}; border-color:${color}; }`);
    });

    // Create grid, add cells and activate their functionality
    for (let x = 0; x < gridXCount; x++) {
        for (let y = 0; y < gridYCount; y++) {
            let nc = cell.cloneNode();
            main.appendChild(nc);
            nc.addEventListener('click', ({ target }) => { console.log(target); colorCell.call(target, target.hasAttribute('color')) });
            nc.addEventListener('mouseenter', ({ target }) => {
                if (isMousePressed && !isContextMenuOpen) {
                    colorCell.call(target, paintOnDrag);
                }

            });
            nc.addEventListener('contextmenu', (event) => openContextMenu(event));
        }
    }

    // Add cell styling
    addToStyling(`.cell{ width:${cellSize / 10}rem;  }`);
    addToStyling(`.cell{ height:${cellSize / 10}rem;  }`);

    // Add styling and menu to the DOM
    document.head.insertAdjacentElement('beforeend', styling);
    document.body.insertAdjacentElement('beforeend', menu);

    // Helper
    function addToStyling(cssText) {
        styling.appendChild(document.createTextNode(cssText));
    }

    // Functionality
    function colorCell(hasColor = false) {
        // hasColor to prevent drag from flipping already colored tiles 
        if (hasColor && this.getAttribute('color') === avalaibleColors[defaultColorIndex]) {
            this.removeAttribute('color')
        }
        else {
            this.setAttribute('color', avalaibleColors[defaultColorIndex]);
        }
    }

    function selectColor(color, event) {
        const index = avalaibleColors.findIndex((c) => c === color);
        defaultColorIndex = index !== -1 ? index : 0;
        closeContextMenu(event);
    }

    function openContextMenu(event) {
        isContextMenuOpen = true;
        event.preventDefault();
        event.stopPropagation();
        menu.classList.add('active');
        menu.style.top = `${(event.clientY / 10) - 2}rem`;
        menu.style.left = `${(event.clientX / 10) - 2}rem`;
    }

    function closeContextMenu(event) {
        isContextMenuOpen = false;
        event.preventDefault();
        event.stopPropagation()
        menu.classList.remove('active');
        menu.removeAttribute('style');
        
    }
    
}

document.addEventListener('DOMContentLoaded', paint);