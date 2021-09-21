let element = document.getElementById("div");
button = document.getElementById("playAgain");

// base example
let arrayGame = [".", ".", ".", "#", "#", "#", "#", ".", "."];

// random array
let newArrayGame = arrayGame.sort(function () {
  return 0.5 - Math.random();
});

// start to finish
newArrayGame[0] = ".";
newArrayGame[8] = ".";

// print html elements
function makeAGrid(arrayPrint) {
  for (let i = 0; i < arrayPrint.length; i++) {
    let span = document.createElement("span");
    let node = document.createTextNode(
      (arrayPrint[i] === "." ? arrayPrint[i] + " " : arrayPrint[i]) + " "
    );

    span.appendChild(node);
    element.appendChild(span);

    if (i % 3 == 2) {
      let br = document.createElement("br");
      element.appendChild(br);
    }
  }
}

// function for search #
function runGame(moves) {
  if (moves > 0) {
    element.children[3].classList.add("way");
    element.children[3].classList.add("wayStartFinish");
  }
  element.children[13].classList.add("wayStartFinish");
  // first move
  moves -= 1;
  if (newArrayGame[1] != "#" || (newArrayGame[3] != "#" && moves > 0)) {
    // second move
    moves -= 1;
    if (newArrayGame[1] != "#" && newArrayGame[3] != "#" && moves > 0) {
      element.children[4].classList.add("way");
      element.children[7].classList.add("way");
    } // end second move way first (1 && 3)
    else if (newArrayGame[1] != "#" && moves > 0) {
      element.children[4].classList.add("way");
    } // end second move way first (1)
    else if (newArrayGame[3] != "#" && moves > 0) {
      element.children[7].classList.add("way");
    } // end second move way first (1)

    if (newArrayGame[1] != "#" && newArrayGame[2] != "#" && moves > 0) {
      // third move
      moves -= 1;
      element.children[5].classList.add("way");

      if (newArrayGame[2] != "#" && newArrayGame[5] != "#" && moves > 0) {
        // fourth move
        moves -= 1;
        element.children[9].classList.add("way");

        if (newArrayGame[5] != "#" && newArrayGame[8] != "#" && moves > 0) {
          //   fifth move
          moves -= 1;

          if (moves >= 0) {
            element.children[13].classList.add("way");
            return true;
          } //end fifth  ( 8 )
        } // end fourth move ( 5 && 8)
      } // end third move ( 2 && 5)
      else if (newArrayGame[1] != "#" && newArrayGame[4] != "#" && moves > 0) {
        // moves += 1;
        element.children[9].classList.remove("way");

        element.children[8].classList.add("way");

        // third move ( 1 && 4)
        if (newArrayGame[4] != "#" && newArrayGame[5] != "#" && moves > 0) {
          moves -= 1;
          element.children[9].classList.add("way");

          // fourth move
          if (newArrayGame[5] != "#" && newArrayGame[8] != "#" && moves > 0) {
            moves -= 1;
            //   fifth move
            if (moves >= 0) {
              element.children[13].classList.add("way");

              return true;
            } //end fifth  ( 8 )
          } // end fourth move ( 5 && 8)
        } // end third move ( 4 && 5)
        else if (
          newArrayGame[4] != "#" &&
          newArrayGame[7] != "#" &&
          moves > 0
        ) {
          moves -= 1;
          element.children[12].classList.add("way");

          // fourth move (4 && 7)
          if (newArrayGame[7] != "#" && newArrayGame[8] != "#" && moves > 0) {
            moves -= 1;
            // fifth move
            if (moves >= 0) {
              element.children[13].classList.add("way");

              return true;
            } //end fifth move (8)
          } // end fourth move (4 && 7)
        } // end third move ( 4 && 7)
      } // end second move ( 1 && 4) ------- good
    } // end second move (1 && 2) -------- good
    else if (newArrayGame[1] != "#" && newArrayGame[4] != "#" && moves > 0) {
      moves -= 1;
      element.children[8].classList.add("way");

      // third move ( 1 && 4)
      if (newArrayGame[4] != "#" && newArrayGame[5] != "#" && moves > 0) {
        moves -= 1;
        element.children[9].classList.add("way");

        // fourth move
        if (newArrayGame[5] != "#" && newArrayGame[8] != "#" && moves > 0) {
          moves -= 1;
          //   fifth move
          if (moves >= 0) {
            element.children[13].classList.add("way");

            return true;
          } //end fifth  ( 8 )
        } // end fourth move ( 5 && 8)
      } // end third move ( 4 && 5)
      else if (newArrayGame[4] != "#" && newArrayGame[7] != "#" && moves > 0) {
        moves -= 1;
        element.children[12].classList.add("way");

        // fourth move (4 && 7)
        if (newArrayGame[7] != "#" && newArrayGame[8] != "#" && moves > 0) {
          moves -= 1;
          // fifth move
          if (moves >= 0) {
            element.children[13].classList.add("way");

            return true;
          } //end fifth move (8)
        } // end fourth move (4 && 7)
      } // end third move ( 4 && 7)
    } // end second move ( 1 && 4) ------- good
    else if (newArrayGame[3] != "#" && newArrayGame[4] != "#" && moves > 0) {
      moves -= 1;
      element.children[8].classList.add("way");
      // third move
      if (newArrayGame[4] != "#" && newArrayGame[5] != "#" && moves > 0) {
        moves -= 1;
        element.children[9].classList.add("way");

        // fourth move
        if (newArrayGame[5] != "#" && newArrayGame[8] != "#" && moves > 0) {
          moves -= 1;
          // fifth move
          if (moves >= 0) {
            element.children[13].classList.add("way");

            return true;
          } //end fifth move (8)
        } // end fourth move (5 && 8)
      } //end third move (4 && 5)
      else if (newArrayGame[4] != "#" && newArrayGame[7] != "#" && moves > 0) {
        moves -= 1;
        element.children[12].classList.add("way");

        // fourth move
        if (newArrayGame[7] != "#" && newArrayGame[8] != "#" && moves > 0) {
          moves -= 1;
          // fifth move
          if (moves >= 0) {
            element.children[13].classList.add("way");

            return true;
          } // end fifth move ( 8 )
        } //end fourth move (7 && 8)
      } // end third move (4 && 7)
    } //end second move (3 && 4)
    else if (newArrayGame[3] != "#" && newArrayGame[6] != "#" && moves > 0) {
      moves -= 1;
      element.children[11].classList.add("way");

      // third move
      if (newArrayGame[6] != "#" && newArrayGame[7] != "#" && moves > 0) {
        moves -= 1;
        element.children[12].classList.add("way");
        // fourth move
        if (newArrayGame[7] != "#" && newArrayGame[8] != "#" && moves > 0) {
          moves -= 1;
          // fifth move
          if (moves >= 0) {
            element.children[13].classList.add("way");

            return true;
          } //end fifth move (8)
        } // end fourth move (7 && 8)
      } // end third moves( 6 && 7)
    } //end second move (3 && 6)
  } // end first move ( 1 || 3)
  // re-color
  if (newArrayGame[5] == "#") {
    element.children[5].classList.remove("way");
  }

  if (newArrayGame[4] == "#" && newArrayGame[5] == "#") {
    element.children[5].classList.remove("way");
  }

  if (newArrayGame[6] == "#" && newArrayGame[7] == "#") {
    element.children[7].classList.remove("way");
  }

  return false;
}

// function input moves and draw game
function play() {
  let nmoves = prompt("Ingrese el numero de movimientos", "0");
  if (nmoves != 0 || nmoves != null) {
    makeAGrid(newArrayGame);
    runGame(nmoves)
      ? (console.log("YES 😃"), alert("YES 😃"))
      : (console.log("NO 😃"), alert("NO 😃"));
  }
}

// start game
play();

button.addEventListener("click", function () {
  location.reload();
});

/*
0 1 2
3 4 5 
6 7 8

every result it's 5

some possible options...
-----------------------------------
error 
. # .
# . .
# . .
-----------------------------------

  1             2             3
. . #     |   . # #     |   . . #
# # #     |   . # #     |   . # # 
# # .     |   # # .     |   # # .
-----------------------------------
 
  1.1           1.2         1.3       
. . .     |   . . #     |  . . .   |   
# # #     |   # . #     |  # . #   |   
# # .     |   # # .     |  # # .   |   

  2.1          2.2         2.3
. # #    |   . # #   |   . # #
. . #    |   . # #   |   . . # 
# # .    |   . # .   |   . # .

-----------------------------------
 
  1.1           1.2.1       1.2.2     1.3.1       1.3.2       
. . .     |   . . #    |   . . #   |  . . .  | . . .   |   
# # .     |   # . .    |   # . #   |  # . #  |  # . .  |   
# # .     |   # # .    |   # . .   |  # # .  |  # # .  |   

  2.1          2.2         2.3.1     2.3.3
. # #    |   . # #   |   . # #   |   . # #
. . .    |   . # #   |   . . .   |   . . # 
# # .    |   . . .   |   . # .   |   . . .

*/
