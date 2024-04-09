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
            if (name === searchText) {
                window.location.href = '#' + name;
                break;
            }
    }

    for (var i = 1; i <= 999; i++) {
        var id = ('00' + i).slice(-3); // 1 ,01 ,001;
        var id1 = id; //3ตัว //000-999
        if (id1 === searchText) {
            window.location.href = '#' + id;
            break;
            }
        var id2 = id.slice(-2); //2ตัว //00-99
        if (id2 === searchText) {
            window.location.href = '#' + id;
            break;
            }
        var id3 = id.slice(-1); //1ตัว //0-9
        if (id3 === searchText) {
            window.location.href = '#' + id;
            break;
        }
        
    }
}
