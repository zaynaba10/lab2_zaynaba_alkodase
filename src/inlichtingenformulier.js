//  file upload
document.getElementById('uploadfileDach').addEventListener('click', function() {
    document.getElementById('fileup').click(); 
});
document.getElementById('fileup').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if(document.getElementById('imgPreview')){
        var imgPreview = document.getElementById('imgPreview');
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('imgPreview').src = e.target.result;
                console.log('Image displayed');
            };
            reader.readAsDataURL(file);
        } 
    }
    var  UploadfileNameS =document.getElementById('UploadfileNameS');
         fileNameU = document.getElementById('fileNameU');
         fileNameU.textContent = file.name;
         UploadfileNameS.classList.remove('Hidden-name-U');
    if (file) {
        console.log('File selected:', file.name);
    }
});

const ZieAllesButton = document.getElementById('Ziealles');
const MijnButton = document.getElementById('Mijn');
const Gedeelde = document.getElementById('Gedeelde');
const ZieAllesTable = document.getElementById('ZieAllesTable');
const MijnDocumentenTable = document.getElementById('MijnDocumentenTable');
const GedeeldeTable = document.getElementById('GedeeldeTable');
MijnDocumentenTable.style.display = 'none';
GedeeldeTable.style.display ='none';
ZieAllesButton.addEventListener('click', () => {
    ZieAllesTable.style.display = 'table';
    MijnDocumentenTable.style.display = 'none';
    GedeeldeTable.style.display ='none';
    ZieAllesButton.classList.add("filterbtn-click");
    MijnButton.classList.remove("filterbtn-click");
    Gedeelde.classList.remove("filterbtn-click");
});
MijnButton.addEventListener('click', () => {
    ZieAllesTable.style.display = 'none';
    GedeeldeTable.style.display ='none';
    MijnDocumentenTable.style.display = 'table';
    ZieAllesButton.classList.remove("filterbtn-click");
    Gedeelde.classList.remove("filterbtn-click");
    MijnButton.classList.add("filterbtn-click");
});
Gedeelde.addEventListener('click', () => {
    ZieAllesTable.style.display = 'none';
    MijnDocumentenTable.style.display ='none';
    GedeeldeTable.style.display = 'table';
    ZieAllesButton.classList.remove("filterbtn-click");
    MijnButton.classList.remove("filterbtn-click");
    Gedeelde.classList.add("filterbtn-click");
});
// Select all items
const items = document.querySelectorAll('.list-items div');
