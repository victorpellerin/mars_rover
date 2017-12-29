var x=6;
var y=0;
var d='N';
var movements=['r','f','f','f','f','f'];
var obstacle_1_position=[5,5];

console.log("Initial Rover position: [" + x + "," + y + "] heading " + d);

var myRover = {
  position: [x,y],
  direction: d
};

var obstacle_1= {
  position: obstacle_1_position,
  direction: null
};

function goForward(rover) {
  switch(myRover.direction) {
    case 'N':
        accelerate(myRover,1,true);
          if (myRover.position[1]>9) {
            move (1, 0);
          }
          else {}
      break;
    case 'E':
      accelerate(myRover,0,true);
        if (myRover.position[0]>9) {
          move (0, 0);
        }
        else {}
      break;
    case 'S':
      accelerate(myRover,1,false);
      if (myRover.position[1]<0) {
        move (1, 9);
      }
      else {}
      break;
    case 'W':
      accelerate(myRover,0,false);
        if (myRover.position[0]<0) {
          move (0, 9);
        }
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "] heading " + myRover.direction);
}


function goBackwards(rover) {
  switch(myRover.direction) {
    case 'N':
        accelerate(myRover,1,false);
          if (myRover.position[1]<0) {
            move (1, 9);
          }
          else {}
      break;
    case 'E':
      accelerate(myRover,0,false);
        if (myRover.position[0]<0) {
          move (0, 9);
        }
        else {}
      break;
    case 'S':
      accelerate(myRover,1,true);
      if (myRover.position[1]>9) {
        move (1, 0);
      }
      else {}
      break;
    case 'W':
      accelerate(myRover,0,true);
        if (myRover.position[0]>9) {
          move (0, 0);
        }
      break;
  }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "] heading " + myRover.direction);
}


function turnRight(rover) {
  switch(myRover.direction) {
    case 'N':
        myRover.direction = 'E';
      break;
    case 'E':
        myRover.direction = 'S';
      break;
    case 'S':
      myRover.direction = 'W';
      break;
    case 'W':
      myRover.direction = 'N';
      break;
  }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "] heading " + myRover.direction);
}


function turnLeft(rover) {
  switch(myRover.direction) {
    case 'N':
        myRover.direction = 'W';
      break;
    case 'E':
        myRover.direction = 'N';
      break;
    case 'S':
      myRover.direction = 'E';
      break;
    case 'W':
      myRover.direction = 'S';
      break;
  }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "] heading " + myRover.direction);
}


function isOverlapping (point1, point2){
  if (point1.position[0]===point2.position[0] && point1.position[1]===point2.position[1]) {
    return true;
  }
  return false;
}

function move (coord, val){
  myRover.position[coord]=val;
}

function accelerate (point, coord, positive){
  if (isOverlapping(point, obstacle_1)){
    console.log('I cannot move, there is an obstacle');
  }
  if (positive){
    point.position[coord]++;
  } else {
    point.position[coord]--;
  }
}

movements.forEach(function(movement){
    switch(movement) {
      case 'f':goForward(myRover); break;
      case 'b': goBackwards(myRover); break;
      case 'r': turnRight(myRover); break;
      case 'l': turnLeft(myRover); break;
    }
  }
);
