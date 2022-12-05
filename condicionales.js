
let n1 =+prompt("Ingrese numero 1"), n2=+prompt("Ingrese numero 2")
if(n1>n2){
    alert(`${n2},${n1}`)
}else
    alert(`${n1},${n2}`)

let numero = parseInt(prompt("Ingrese numero entre 1 y 10"))
if(numero>0 && numero<11){
    switch(numero){
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
            alert(`impar`)
            break
        case 2:
        case 4:
        case 6:
        case 8:
        case 10:
            alert(`par`)
            break
    }
}else
    alert(`${numero} no se encuentra entre 1 y 10`)


let numero3 =parseInt(prompt("Ingrese un numero entre 1 y 10"))
if(numero3>0 && numero3<11){
    switch(numero3){
        case 1:
            alert(`${numero3} = uno`)
            break
        case 2:
            alert(`${numero3} = dos`)
            break
        case 3:
            alert(`${numero3} = tres`)
            break
        case 4:
            alert(`${numero3} = cuatro`)
            break
        case 5:
            alert(`${numero3} = cinco`)
            break
        case 6:
            alert(`${numero3} = seis`)
            break
        case 7:
            alert(`${numero3} = siete`)
            break
        case 8:
            alert(`${numero3} = ocho`)
            break
        case 9:
            alert(`${numero3} = nueve`)
            break
        case 10:
            alert(`${numero3} = diez`)
            break
    }
}else
    alert(`${numero3} no se encuentra entre 1 y 10`)





let duracion =+ Math.round(prompt("Duracion llamada en minutos")),coste = 0
if(duracion<=3){
    coste = 200
}else{
    coste = 200 +((duracion-3)*100)
}
alert(`Valor de la llamada: $${coste}`)





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




let precioFinal,nombreArticulo = prompt("Ingrese nombre del articulo"),clave =+prompt("Ingrese la clave (1) o (2)"), precioOriginal =+prompt("Ingrese precio original"),cantidad=+prompt("Ingrese la cantidad"),descuento=0
if(clave == 1)
{
    descuento = 0.1
}
else if(clave == 2)
{
    descuento = 0.2
}
else{
    alert(`La clave ingresada no existe. No se hará ningun descuento.`)
}
precioFinal = precioOriginal*cantidad*(1-descuento)
alert(`FACTURA\nArticulo: ${nombreArticulo}\nCantidad : ${cantidad} \nPrecio Unidad: $${precioOriginal}\nDescuento: ${descuento*100}%\nEl precio final es $${precioFinal}`)






let presupuestoAnual=+ prompt("Ingrese el presupuesto anual para el hospital"),psiquiatria =+prompt("Ingrese el porcentaje asgnado a Psiquiatría"),pediatria =+prompt("Ingrese el porcentaje asgnado a Pediatría"),traumatologia =+prompt("Ingrese el porcentaje asgnado a Traumatología")
if(psiquiatria+pediatria+traumatologia == 100)
{
    let pPsiquiatria = psiquiatria/100*presupuestoAnual
    let pPediatria = pediatria/100*presupuestoAnual
    let pTraumatologia = traumatologia/100*presupuestoAnual
    alert(`Porcentaje Psiquiatría: ${psiquiatria}%\nValor asignado: $${pPsiquiatria}\nPorcentaje Pediatría: ${pediatria}%\nValor asignado: $${pPediatria}\nPorcentaje Traumatología: ${traumatologia}%\nValor asignado: $${pTraumatologia}`)
}
else{
    alert(`Los porcentajes asignados no corresponden al 100%`)
}





let precioKM = 2.5, distancia =+prompt("Ingrese la distancia del viaje"),dias =+ prompt("Ingrese los dias de estancia"),precioTiquete = precioKM*distancia*2
if(dias>=7 && distancia >800){
precioTiquete *=0.7
}
alert(`El precio del tiquete de ida y vuelta es $${precioTiquete}`)
