function handleKeyPress(event) {
    if (event.key === 'Enter') {
        search();
    }
}

function search() {
    var searchText = document.getElementById('searchInput').value;
    var names =  ['Compsognathus', 'Carcharodontosaurus', 'Carnotaurus', 'Giganotosaurus', 'Coelophysis', 'Ceratosaurus', 'Deinonychus', 
         'Dilophosaurus', 'Tarbosaurus', 'Troodon', 'Tyrannosaurus', 'Baryonyx', 'Velociraptor', 'Spinosaurus', 'Allosaurus', 'Herrerasaurus', 
         'Maiasaura', 'Saichania', 'Diplodocus', 'Saltasaurus', 'Triceratops', 'Gallimimus', 'Iguanodon', 'Diplodocus', 'Stegosaurus', 
         'Apatosaurus'];
    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var element = document.getElementById(name);
        if (element) {
            if (name === searchText) {
                window.location.href = '#' + name;
                break;
            }
        }
    }

    for (var i = 1; i <= 999; i++) {
        var id = ('00' + i).slice(-3);
        var element = document.getElementById(id);
        if (element) {
            ids = id;
            if (ids === searchText) {
                window.location.href = '#' + id;
                break;
            }
            id1 = id.slice(-1);
            if (id1 === searchText) {
                window.location.href = '#' + id;
                break;
            }
            id1 = id.slice(-2);
            if (id1 === searchText) {
                window.location.href = '#' + id;
                break;
            }
        }
        
    }
}

