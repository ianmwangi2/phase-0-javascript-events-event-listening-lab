function addingEventListener() {
    const input = document.getElementById('button');
    if (!input.addEventListener('click', function () {})) {
        input.addEventListener('click', function() {
            alert('I was clicked!');
        });
    }
}