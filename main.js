const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drap events
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

// Drag Functions
function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0); // .fill이 .invisible로 바뀜. 왜 .empty가 아니고 .fill일까?
}

function dragEnd() {
    this.className ='fill';
}

function dragOver (e) {
    e.preventDefault();
}
function dragEnter (e) {
    e.preventDefault();
    this.className += ' hovered';
}
function dragLeave () {
    this.className = 'empty';
}
function dragDrop () {
    this.className = 'empty';
    this.append(fill);
}