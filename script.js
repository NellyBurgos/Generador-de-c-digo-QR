$(document).ready(function() {  
    $('#generateBtn').on('click', function() {  
        const url = $('#urlInput').val();  
        if (url) {  
            $('#qrCode').empty(); // Limpiar el contenedor del QR  
            const qrcode = new QRCode(document.getElementById("qrCode"), {  
                text: url,  
                width: 128,  
                height: 128,  
                colorDark : "#000000",  
                colorLight : "#ffffff",  
                correctLevel: QRCode.CorrectLevel.H  
            });  

            $('#downloadBtn').show();  
            $('#shareBtn').show();  

            // Descargar Código QR  
            $('#downloadBtn').off('click').on('click', function() {  
                const canvas = $('#qrCode canvas')[0];  
                const link = document.createElement('a');  
                link.href = canvas.toDataURL('image/png');  
                link.download = 'codigo_qr.png';  
                link.click();  
            });  

            // Copiar Texto al Portapapeles  
            $('#shareBtn').off('click').on('click', function() {  
                navigator.clipboard.writeText(url).then(() => {  
                    alert('URL copiada al portapapeles!');  
                }).catch(err => {  
                    alert('Error al copiar: ' + err);  
                });  
            });  
        } else {  
            alert('Por favor, ingresa una URL válida.');  
        }  
    });  
});