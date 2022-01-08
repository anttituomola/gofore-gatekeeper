README

This is an assignment for junior developer position at Gofore. The original assignment can be found here: https://gofore.com/junior-developer-assignment/
Please do not use this for your own application, as it probably will do you disservice.

It's a snake game with a few variations:
- there's only head of a snake (the robot)
- the canvas is not empty when started, but there are obstacles with similar rules to edge borders
- I must be able to copy-paste the canvas to a variable and convert it to the game canvas from there

LIVE DEMO
There's a live demo available at https://www.anttituomola.fi/gofore-assignment

RULES
- Count how many steps it takes to reach (E)
- Robot starts at character S
- Starting direction is always up
- When robot hits obstacle (#) it turns right (up, right, down, left, up, ...) and continues forward
- (S) character is treated as empty space
- (E) character is counted as step
- Make a note of the MAP_CODE in the first line, you'll need it in answer

EXAMPLE OF CANVAS DATA
##################################################
#...#..................................#.........#
#.......#.................................#......#
#...............................................E#
#..................#...........................#.#
#...........................................#....#
#..#...........................................S.#
#...............................................##
#................................................#
#.................#..............................#
#.....................................#..........#
#....#...........................................#
#......#.................................#.......#
#..........................................#.....#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
##################################################
