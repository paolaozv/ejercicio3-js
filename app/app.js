var horasTrabajadas = prompt("Ingrese horas trabajadas en la semana");
    horasTrabajadas = parseInt(horasTrabajadas);
var pagoPorHora = prompt("Ingrese pago por hora en s/.");
    pagoPorHora = parseInt(pagoPorHora);
var sueldoSemanal = horasTrabajadas*pagoPorHora;

   document.write("Su sueldo semanal es: s/.");
   document.write(sueldoSemanal);