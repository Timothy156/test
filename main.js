console.log(12+12);
const a = document.createElement('div');
a.style.width = '100px';
a.style.height = '100px';
a.style.backgroundColor = 'blue';
const b = document.createElement('button');
b.textContent = 'Test';
a.appendChild(b);
document.body.appendChild(a);