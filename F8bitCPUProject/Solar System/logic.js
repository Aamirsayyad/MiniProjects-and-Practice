const sun = document.getElementById("sun");
const planets = document.querySelectorAll(".planet");

class Planet {

    constructor(ref, angle, speed, orbitRadius) {
        this.ref = ref;
        this.angle = angle;
        this.speed = speed;
        this.orbitRadius = orbitRadius;

        setTimeout(() => {
            this.animate();
        }, 0);
    }

    getSunCenter() {
        const rect = sun.getBoundingClientRect();

        return {
            cx: rect.left + rect.width / 2,
            cy: rect.top + rect.height / 2
        };
    }

    animate() {
        setInterval(() => {

            let speedMultiplier = (speedfactor.value / 50 )*5;

            this.angle += this.speed * speedMultiplier;

            const sunPos = this.getSunCenter();

            this.x = sunPos.cx + this.orbitRadius * Math.cos(this.angle);
            this.y = sunPos.cy + this.orbitRadius * Math.sin(this.angle);

            this.ref.style.left = this.x + "px";
            this.ref.style.top = this.y + "px";

        }, 16);
    }
}

let scalefactor = document.getElementById("scale-slider");
let speedfactor = document.getElementById("speed-slider");

let container = document.getElementById("container");

scalefactor.addEventListener("input", () => {
    container.style.transform = `scale(${2 * (scalefactor.value / 100)})`;
});

let SCALE = 0.24;

let p1 = new Planet(planets[0], 0,    0.01,   250 * SCALE);
let p2 = new Planet(planets[1], 1.2,  0.003,  400 * SCALE);
let p3 = new Planet(planets[2], 3,    0.002,  500 * SCALE);
let p4 = new Planet(planets[3], 0.4,  0.0024, 800 * SCALE);
let p5 = new Planet(planets[4], 2,    0.005,  1000 * SCALE);
let p6 = new Planet(planets[5], 7,    0.003,  1200 * SCALE);
let p7 = new Planet(planets[6], 10,   0.003,  1300 * SCALE);
let p8 = new Planet(planets[7], 13,   0.001,  1500 * SCALE);