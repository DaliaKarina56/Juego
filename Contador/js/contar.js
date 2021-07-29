// Autor Karina
simplyCountdown('#contador', {
    year: 2021,
            month: 09, 
            day: 15, 
            hours: 0, 
            minutes: 0, 
            seconds: 0,
            words: { //Variables para guardar el complemento Dia, hora, etc
                days: { singular: 'Día', plural: 'Dias' },
                hours: { singular: 'Hora', plural: 'Horas' },
                minutes: { singular: 'Minuto', plural: 'Minutos' },
                seconds: { singular: 'Segundo', plural: 'segundos' }
            },
            plural: true, //Para mostrar las palabras en plural
            inline: false, // Contador de tiempo despues de la fecha establecida (True para activar)
            inlineClass: 'simply-countdown-inline', //es una clase de JS 
            enableUtc: true, //Ajusta dependiendo de la zona horaria
            onEnd: function() { 
                return; 
            }, //accion de la función 
            refresh: 1000, 
            sectionClass: 'simply-section', //Clase con css
            amountClass: 'simply-amount', // Clase con css
            wordClass: 'simply-word', // Clase con css
            zeroPad: false,
            countUp: false
    });
