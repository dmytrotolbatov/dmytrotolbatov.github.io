function Tamagochi(name) {
    this.name = name;
    this.health = 100;
    this.happiness = 100;
    this.hunger = 100;
    this.eat = function () {
        this.hunger = this.hunger + 15;
        this.happiness = this.happiness - 15;
        if (this.hunger > 100){
            this.hunger = 100
        }
        console.log("їжа:" + this.hunger);
        console.log("щастя:" + this.happiness);
        if (this.happiness <= 0){
            /*alert("Він з'їв забагато цього разу!");*/
            $('#text').text("Він з'їв забагато цього разу!");
        }
    };
    this.drink = function () {
        this.happiness = this.happiness + 15;
        this.health = this.health - 15;
        if (this.happiness > 100){
            this.happiness = 100
        }
        console.log("щастя:" + this.happiness);
        console.log("здоров'я:" + this.health);
        if (this.health <= 0){
            /*alert ('Він помер від алкоголю!');*/
            $('#text').text("Він помер від алкоголю!");
        }
    };
    this.sport = function () {
        this.health = this.health + 15;
        this.hunger = this.hunger - 15;
        if (this.health > 100){
            this.health = 100
        }
        console.log("здоров'я:" + this.health);
        console.log("їжа:" + this.hunger);
        if (this.hunger <= 0){
            /*alert('Він помер від спорту!');*/
            $('#text').text("Він помер від спорту!");
        }
    };
    this.sleep = function () {
        this.health = this.health + 15;
        this.hunger = this.hunger - 15;
        if (this.health > 100){
            this.health = 100
        }
        console.log("здоров'я:" + this.health);
        console.log("їжа:" + this.hunger);
        if (this.hunger <= 0){
            /*alert('Він занадто довго спав!');*/
            $('#text').text("Він занадто довго спав!");
        }
    };
    this.fight = function () {
        this.happiness = this.happiness + 15;
        this.health = this.health - 15;
        if (this.happiness > 100){
            this.happiness = 100
        }
        console.log("щастя:" + this.happiness);
        console.log("здоров'я:" + this.health);
        if (this.health <= 0){
            /*alert ('Він помер у битві!');*/
            $('#text').text("Він помер у битві!");
        }
    }
}

var happy = $('#happy');
var sad = $('#sad');
var dead = $('#dead');

function picture() {
    if(pet1.health <= 50 && pet1.health >= 0 || pet1.happiness <= 50 && pet1.happiness >= 0 || pet1.hunger <= 50 && pet1.hunger >= 0){
        happy.hide();
        dead.hide();
        sad.show();
    }else if(pet1.health <= 0 || pet1.happiness <= 0 || pet1.hunger <= 0){
        dead.show();
        happy.hide();
        sad.hide();
    }else {
        dead.hide();
        happy.show();
        sad.hide();
    }
}

var pet1 = new Tamagochi('pet');



$('#eat').on('click', function () {
    pet1.eat();
    $("#status3").text("Їжа: " + pet1.hunger);
    $('#status2').text("Щастя: " + pet1.happiness);
    picture();
});

$('#drink').on('click', function () {
    pet1.drink();
    $("#status2").text("Щастя: " + pet1.happiness);
    $('#status1').text("Здоров'я: " + pet1.health);
    picture();
});

$('#sport').on('click', function () {
    pet1.sport();
    $("#status1").text("Здоров'я: " + pet1.health);
    $('#status3').text("Їжа: " + pet1.hunger);
    picture();
});

$('#sleep').on('click', function () {
    pet1.sleep();
    $("#status1").text("Здоров'я: " + pet1.health);
    $('#status3').text("Їжа: " + pet1.hunger);
    picture();
});

$('#fight').on('click', function () {
    pet1.fight();
    $("#status2").text("Щастя: " + pet1.happiness);
    $('#status1').text("Здоров'я: " + pet1.health);
    picture();
});

$(document).ready(function() {
    picture();
});