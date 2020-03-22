var isLoaded = false;

var btn = document.getElementById('btn-load');
btn.addEventListener('click', getResource);

function getResource() {
    var content = document.getElementById('json-content');
    
    if (!isLoaded){
        $.ajax({
            method: 'GET',
            url: "colors.json",
            dataType: "json",
            success: function(data){
                isLoaded = true;
                generateTags(data);
            }
        });
    }
    else {
        alert('Data is alredy loaded!');
    }
}

function generateTags(data){
    var container = document.getElementById('json-content');
    for (let i = 0; i < data.length; i++) {
        var name = document.createElement('div');
        var value = document.createElement('div');

        name.innerHTML = data[i].color;
        value.style.backgroundColor = data[i].value;
        value.style.width = '100px';
        value.style.padding = '7px'

        container.appendChild(name);
        container.appendChild(value);
    }
}