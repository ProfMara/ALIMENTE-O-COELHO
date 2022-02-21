const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var solo;
var fruta, corda;
var con_fruta;

var cenario;
var frutaIMG;
var coelhoIMG;
var coelho;
var botao;

function preload() {

}

function setup() {
    createCanvas(500, 700);
    frameRate(80);
    engine = Engine.create();
    world = engine.world;
    solo = new Ground(200, 700, 600, 20);
    corda = new Rope(7, { x: 245, y: 30 });
    fruta = Bodies.circle(300, 300, 20);
    Composite.add(corda.body, fruta);

    con_fruta = new Link(corda, fruta);

    /*
        botao.position(220, 30);
    botao.size(50, 50);
    botao.mouseClicked(cortar)
*/
    rectMode(CENTER);
    ellipseMode(RADIUS);
    textSize(50)
    imageMode(CENTER);

}

function draw() {
    background(51);
    ellipse(fruta.position.x, fruta.position.y, 70, 70);
    corda.show();
    solo.show();
    Engine.update(engine);

}