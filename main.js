function countElements() {
    var tagName = document.getElementById('tagname').value;
    var className = document.getElementById('classname').value;
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;

    var countTagName = document.getElementsByTagName(tagName).length;
    var countClassName = document.getElementsByClassName(className).length;
    var countId = document.getElementById(id) ? 'True' : 'False';
    var countName = document.getElementsByName(name).length;
    var output = document.getElementById('output')
    output.innerHTML = `Number Of ${tagName}: ${countTagName} <br>
        Class ${className}: ${countClassName} <br>
        Id ${id}: ${countId} <br>
        Name ${name}: ${countName}`;
    output.classList.add('show')

}
function toggleDarkMode() {
    var body = document.body;
    var container = document.querySelector('.container');
    var inputs = document.querySelectorAll('input');
    var button = document.querySelector('button');
    var output = document.querySelector('.output');
    var toggleBtn = document.querySelector('.toggle-btn');

    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    inputs.forEach(input => input.classList.toggle('dark-mode'));
    button.classList.toggle('dark-mode');
    output.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleBtn.innerHTML = 'Switch to Light Mode';
        toggleBtn.style.backgroundColor='#ddd'
        toggleBtn.style.color='#444'
    } else {
        toggleBtn.innerHTML = 'Switch to Dark Mode';
        toggleBtn.style.backgroundColor='#444'
        toggleBtn.style.color='#fff'
    }

}