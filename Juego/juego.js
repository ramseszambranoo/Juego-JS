class Personaje {
  constructor(nombre, vida, ataque, defensa, clase, habilidades, velocidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.clase = clase;
    this.habilidades = habilidades;
    this.velocidad = velocidad;
  }

  saludo() {
    console.log("");
    console.log(`${this.nombre} saluda y está listo para la batalla`);
    console.log("");
    console.log(`- Vida: ${this.vida}`);
    console.log(`- Ataque: ${this.ataque}`);
    console.log(`- Defensa: ${this.defensa}`);
    console.log(`- Velocidad: ${this.velocidad}`);
    console.log(`- Clase: ${this.clase}`);
    console.log("");
  }
// seleccion de habilidad
  habilidadAleatoria() {
    let habilidadSeleccionada = this.habilidades[Math.floor(Math.random() * this.habilidades.length)];
    console.log(`${this.nombre} tiene estas habilidades: ${this.habilidades}`);
    console.log(`${this.nombre} usara esta habilidad: ${habilidadSeleccionada.nombre} (Daño base: ${habilidadSeleccionada.daño})`);
  }
//defensa
  calcularDefensa() {
    return Math.floor(Math.random() * this.defensa);
  }
//calcular ataque
  calcularAtaque() {
    return Math.floor(Math.random() * this.ataque);
  }
//ataque
  atacar(objetivo) {
    if (objetivo.vida <= 0) return;

    console.log(`${this.nombre} ataca a ${objetivo.nombre}!`);

    let daño = Math.max(this.calcularAtaque() - objetivo.calcularDefensa(), 0);
    objetivo.vida -= daño;

    console.log(`${this.nombre} causa ${daño} de daño a ${objetivo.nombre}. Vida restante de ${objetivo.nombre}: ${objetivo.vida}`);

    if (objetivo.vida <= 0) {
      console.log(`${objetivo.nombre} ha muerto!`);
    }
  }
}

let personajes = [
  new Personaje("Dash", 100, 80, 60, "Mago", [{ nombre: "Bola de Fuego", daño: 40 }, { nombre: "Rayo", daño: 70 }], 70),
  new Personaje("Wavex", 100, 60, 40, "Mago", [{ nombre: "Ataque Sorpresa", daño: 50 }, { nombre: "Bola de Hielo", daño: 90 }], 70),
  new Personaje("Larry", 100, 80, 40, "Guerrero", [{ nombre: "Espada", daño: 20 }, { nombre: "Cuchillo", daño: 50 }], 70),
  new Personaje("Giganto", 100, 60, 30, "Guerrero", [{ nombre: "Golpe", daño: 30 }, { nombre: "Palo", daño: 40 }], 70),
  new Personaje("Selena", 100, 70, 50, "Arquera", [{ nombre: "Disparo Preciso", daño: 30 }, { nombre: "Lluvia de Flechas", daño: 50 }], 90)
];

// SIMULACIÓN DE BATALLA, IMPRIMIENDO ATAQUES UNO POR UNO
console.log("\n¡Comienza la batalla!");
personajes.forEach(p => p.saludo());

while (personajes.filter(p => p.vida > 0).length > 1) {
  personajes.sort((a, b) => Math.floor(Math.random() * a.velocidad) - Math.floor(Math.random() * b.velocidad));

  for (let atacante of personajes) {
    let enemigosVivos = personajes.filter(p => p !== atacante && p.vida > 0);
    if (enemigosVivos.length > 0) {
      let objetivo = enemigosVivos[Math.floor(Math.random() * enemigosVivos.length)];
      atacante.atacar(objetivo);
    }
  }
}

let ganador = personajes.find(p => p.vida > 0);
console.log(`${ganador.nombre} ha ganado la batalla`);


















