

// let n1 =+prompt("Ingrese numero 1"), n2=+prompt("Ingrese numero 2")
// if(n1>n2){
//     alert(`${n2},${n1}`)
// }else
//     alert(`${n1},${n2}`)

// let numero = parseInt(prompt("Ingrese numero entre 1 y 10"))
// if(numero>0 && numero<11){
//     switch(numero){
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 9:
//             alert(`impar`)
//             break
//         case 2:
//         case 4:
//         case 6:
//         case 8:
//         case 10:
//             alert(`par`)
//             break
//     }
// }else
//     alert(`${numero} no se encuentra entre 1 y 10`)


// let numero3 =parseInt(prompt("Ingrese un numero entre 1 y 10"))
// if(numero3>0 && numero3<11){
//     switch(numero3){
//         case 1:
//             alert(`${numero3} = uno`)
//             break
//         case 2:
//             alert(`${numero3} = dos`)
//             break
//         case 3:
//             alert(`${numero3} = tres`)
//             break
//         case 4:
//             alert(`${numero3} = cuatro`)
//             break
//         case 5:
//             alert(`${numero3} = cinco`)
//             break
//         case 6:
//             alert(`${numero3} = seis`)
//             break
//         case 7:
//             alert(`${numero3} = siete`)
//             break
//         case 8:
//             alert(`${numero3} = ocho`)
//             break
//         case 9:
//             alert(`${numero3} = nueve`)
//             break
//         case 10:
//             alert(`${numero3} = diez`)
//             break
//     }
// }else
//     alert(`${numero3} no se encuentra entre 1 y 10`)





// let duracion =+ Math.round(prompt("Duracion llamada en minutos")),coste = 0
// if(duracion<=3){
//     coste = 200
// }else{
//     coste = 200 +((duracion-3)*100)
// }
// alert(`Valor de la llamada: $${coste}`)





let c1 =+ prompt("Cantidad conejos blancos"), c2 =+prompt("Cantidad conejos negros"), y=+prompt("Conejos blancos vendidos"), x=+prompt("Conejos negros vendidos")
let p1 =+ prompt("Precio venta conejos blancos "),p2=+ prompt("Precio venta conejos negros ")
if(y<=c1 && x<=c2){
    let totalVendidos = x+y
    let monto = y*p1 + x*p2
    alert(`Se vendieron ${totalVendidos} conejos`)
    alert(`El monto total de la venta es $${monto}`)
    if(x<y)
        alert("Se vendieron mas conejos blancos")
    else
        alert("Se vendieron mas conejos negros")    
}else
    alert(`NO hay suficientes conejos para hacer la venta.`)



let previo1,previo2,previo3,trabajo1,trabajo2,final,minima = 1,maxima=5
previo1 =+prompt("Ingrese la nota del previo 1")
previo2 =+prompt("Ingrese la nota del previo 2")
previo3 =+prompt("Ingrese la nota del previo 3")
trabajo1 =+prompt("Ingrese la nota del trabajo 1")
trabajo2 =+prompt("Ingrese la nota del trabajo 2")
if(previo1 >=minima && previo1 <=maxima &&previo2 >=minima && previo2 <=maxima &&previo3 >=minima && previo3 <=maxima &&trabajo1 >=minima && trabajo1 <=maxima &&trabajo2>=minima && trabajo2 <=maxima  ){
    let previos = (previo1 + previo2 + previo3)/3*0.6
    let trabajos = (trabajo1 + trabajo2 )/2*0.4
    final = previos + trabajos
    alert(`Nota final ${final}`)
}else
alert("Notas por fuera de rango")
