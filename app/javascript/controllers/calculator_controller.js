import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="calculator"
export default class extends Controller {
  static targets = ["total", "porcentaje", "capital", "entrada", "salida", "arriesgar", "position"];

  connect() {
    
  }

  calcularCapitalRiesgo() {
    const calculoRiesgo = (this.totalTarget.value * this.porcentajeTarget.value) / 100 ;
    this.capitalTarget.value = calculoRiesgo
  }

  calcularMontoRiesgo() {
    console.log("hola")
    const calculoMontoRiesgo = this.entradaTarget.value - this.salidaTarget.value
    console.log(calculoMontoRiesgo)
    this.arriesgarTarget.value = calculoMontoRiesgo
    this.positionTarget.innerHTML = `<bold>${this.capitalTarget.value / this.arriesgarTarget.value}</bold>`
  }
}

