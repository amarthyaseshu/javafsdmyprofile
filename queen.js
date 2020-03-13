var queen = {
    direction: 'S',
    position: {
        x: 4,
        y: 0

    },
    whereabouts: []
};
var inp_dir = prompt("Enter the direction,steps");

function changeDirection(steps, direction) {
    switch (directions) {
        case "S":
            queen.position.y = queen.position.y + steps;
            break;
        case "N":
            queen.position.y = queen.position.y - steps;
            break;
        case "E":
            queen.position.x = queen.position.x + steps;
            break;
        case "W":
            queen.position.x = queen.position.x - steps;
            break;
        case "NE":
            queen.position.x = queen.position.x + steps;
            queen.position.y = queen.position.y - steps;
            break;
        case "SE":
            queen.position.x = queen.position.x + steps;
            queen.position.y = queen.position.y + steps;
            break;
        case "NW":
            queen.position.x = queen.position.x - steps;
            queen.position.y = queen.position.y - steps;
            break;
        case "SW":
            queen.position.x = queen.position.x - steps;
            queen.position.y = queen.position.y + steps;
            break;
        default:
            console.log("give direction correctly");
    }
}
changeDirection();

function moveForward(direction) {
    switch (directions) {
        case "S":
            if (queen.position.y > 0 && queen.position.y < 8) {
                queen.position.y = queen.position.y + 1;
            } else {
                console.log("queen is moving out of board");
            }
            break;
        case "N":
            if (queen.position.y >= 0 && queen.position.y < 7) {
                queen.position.y = queen.position.y - 1;
            } else {
                console.log("queen is moving out of board");
            }
            break;
        case "E":
            if (queen.position.x > 0 && queen.position.x < 8) {
                queen.position.x = queen.position.x + 1;
            } else {
                console.log("queen is moving out of board");
            }
            break;
        case "W":
            if (queen.position.x >= 0 && queen.position.x < 7) {
                queen.position.x = queen.position.x - 1;
            } else {
                console.log("queen is moving out of board");
            }
            break;

        case "NE":
            if (queen.position.x > 0 && queen.position.x < 8 && queen.position.y < 7 && queen.position.y >= 0) {
                queen.position.x = queen.position.x + 1;
                queen.position.y = queen.position.y - 1;

            } else {
                console.log("queen is moving out of board");
            }
            break;
        case "SE":
            if (queen.position.x > 0 && queen.position.x < 8 && queen.position.y < 8 && queen.position.y > 0) {
                queen.position.x = queen.position.x + 1;
                queen.position.y = queen.position.y + 1;

            } else {
                console.log("queen is moving out of board");
            }
            break;
        case "NW":
            if (queen.position.x >= 0 && queen.position.x < 7 && queen.position.y < 7 && queen.position.y >= 0) {
                queen.position.x = queen.position.x - 1;
                queen.position.y = queen.position.y - 1;

            } else {
                console.log("queen is moving out of board");
            }
            break;
        case "SW":
            if (queen.position.x >= 0 && queen.position.x < 7 && queen.position.y < 8 && queen.position.y > 0) {
                queen.position.x = queen.position.x - 1;
                queen.position.y = queen.position.y + 1;

            } else {
                console.log("queen is moving out of board");
            }
            break;
        default:
            console.log("give direction correctly");
    }
}
moveForward();

function jumpMoveForward(steps, direction) {
    switch (directions) {
        case "S":
            var temp = queen.position.y + steps;
            if (temp < 8 && temp >= 0) {
                queen.position.y = queen.position.y + steps;
            } else {
                console.log("queen is moving out of board");
            }
            break;
        case "N":
            var temp = queen.position.y - steps;
            if (temp < 8 && temp >= 0) {
                queen.position.y = queen.position.y - steps;
            } else {
                console.log("queen is moving out of board");
            }
            break;
        case "E":
            var temp = queen.position.x + steps;
            if (temp < 8 && temp >= 0) {
                queen.position.x = queen.position.x + steps;
            } else {
                console.log("queen is moving out of board");
            }
            break;
        case "W":
            var temp = queen.position.x - steps;
            if (temp < 8 && temp >= 0) {
                queen.position.x = queen.position.x - steps;
            } else {
                console.log("queen is moving out of board");
            }
            break;
        case "NE":
            var temp = queen.position.x + steps;
            var temp1 = queen.position.y - steps;
            if (temp < 8 && temp >= 0 && temp1 < 8 && temp1 >= 0) {
                queen.position.x = queen.position.x + steps;
                queen.position.y = queen.position.y - steps;
            } else {
                console.log("queen is moving out of board");
            }
            break;
        case "SE":
            var temp = queen.position.x + steps;
            var temp1 = queen.position.y + steps;
            if (temp < 8 && temp >= 0 && temp1 < 8 && temp1 >= 0) {
                queen.position.x = queen.position.x + steps;
                queen.position.y = queen.position.y + steps;
            } else {
                console.log("queen is moving out of board");
            }
            break;
        case "NW":
            var temp = queen.position.x - steps;
            var temp1 = queen.position.y - steps;
            if (temp < 8 && temp >= 0 && temp1 < 8 && temp1 >= 0) {
                queen.position.x = queen.position.x - steps;
                queen.position.y = queen.position.y - steps;
            } else {
                console.log("queen is moving out of board");
            }
            break;
        case "SW":
            var temp = queen.position.x - steps;
            var temp1 = queen.position.y + steps;
            if (temp < 8 && temp >= 0 && temp1 < 8 && temp1 >= 0) {
                queen.position.x = queen.position.x - steps;
                queen.position.y = queen.position.y + steps;
            } else {
                console.log("queen is moving out of board");
            }
            break;

    }
}
jumpMoveForward();

function updatePosition(x, y) {
    x = queen.position.x;
    y = queen.position.y;

}
whereabouts.updatePosition();