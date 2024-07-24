document.querySelector('.heart').addEventListener('click', function() {
    document.querySelector('button').style.display = 'block';
    document.querySelector('h1').innerText = 'Now click the button';
});

function showConfession() {
    document.getElementById('confession').style.display = 'block';
    document.querySelector('button').style.display = 'none';
}
