function calc_antig(basico){
    return (basico*0.190)
}

function calc_titulo(basico){
    return (basico*0.059)
}

function calc_hn(basico,horas){
    return(horas*(basico*0.0066))
}

function calc_falloc(basico){
    return(basico*0.20)
}

function calc_feriado(basico,horas){
    return(horas*(basico*0.00711))
}

function calc_jubi(basico,horasf,horasn){
    return(calcula_conaporte(basico,horasn,horasf)*0.11)
}

function calc_ley(basico,horasf,horasn){
return(calcula_conaporte(basico,horasn,horasf)*0.03)
}

function calc_os(basico,horasf,horasn){
    return(calcula_conaporte(basico,horasn,horasf)*0.03)
}

function calc_sindicato(basico,horasf,horasn){
    return(calcula_conaporte(basico,horasn,horasf)*0.02)
}

function calc_solid1(basico,horasf,horasn){
    return(calcula_conaporte(basico,horasn,horasf)*0.01)
}

function calc_solid2(basico,horasf,horasn){
    return(calcula_conaporte(basico,horasn,horasf)*0.011)
}

function calcula_conaporte(basico,horasn,horasf){
return(basico+calc_antig(basico)+calc_titulo(basico)+calc_hn(basico,horasn)+calc_feriado(basico,horasf))
}

function calcula_descuentos(basico,horasn,horasf){
return(calc_jubi(basico,horasn,horasf)+calc_ley(basico,horasn,horasf)+calc_os(basico,horasn,horasf)+calc_sindicato(basico,horasn,horasf)+calc_solid1(basico,horasn,horasf)+calc_solid2(basico,horasn,horasf))
}

function calcula_sueldo(basico,horasn,horasf,noremu){
return(calcula_conaporte(basico,horasn,horasf)+calc_falloc(basico)+noremu-calcula_descuentos(basico,horasn,horasf))
}


var sueldo=calcula_sueldo(214185,34.82,7.61,71000)
console.log('El sueldo es: ',sueldo)