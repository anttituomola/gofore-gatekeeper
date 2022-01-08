readme.md

1051024
##################################################
#..............................#...#.............#
#.....................#...........#...........#..#
#........................................#.......#
#.................#..............................#
#..............................................#.#
#....................#...........................#
#.............................#...............#..#
#............................................#...#
#.....#.........................#................#
#.....................#.#.............#..........#
#.#........................#.....................#
#.............................................#..#
#...............##...............................#
#......................................#.....#...#
##.............................#..#..............#
#....................#...........#......#........#
#......................#.........................#
#...........#...............#.........#..........#
#.....................#.........#...........#....#
#..........#..............................#......#
#...................#..........#..............#..#
#........................................#...E...#
#..........................#.............#.......#
#....................................#.....#.....#
#....#...........................................#
#..................#......#..........#.......S...#
#....................#..................#........#
#................................................#
##################################################

It's a snake game with a few variations:
- there's only head of a snake (the robot)
- the canvas is not empty when started, but there are obstacles with similar rules to edge borders
- I must be able to copy-paste the canvas to a variable and convert it to the game canvas from there

RULES
- Count how many steps it takes to reach (E)
- Robot starts at character S
- Starting direction is always up
- When robot hits obstacle (#) it turns right (up, right, down, left, up, ...) and continues forward
- (S) character is treated as empty space
- (E) character is counted as step
- Make a note of the MAP_CODE in the first line, you'll need it in answer

EXAMPLE OF CANCAS DATA
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

- the canvas is always fixed in size: 50 X 30, so there's always 1500 pixels
