from enum import StrEnum

# # - wall
# S - start
# E - end

class Tile(StrEnum):
    WALL = "#"
    START = "S"
    END = "E"
    SEEN = "X"


def find_start(maze: list[str]) -> tuple[int, int]:
    for i, line in enumerate(maze):
        for j, element in enumerate(line):
            if element == Tile.START:
                return (i, j)
    raise Exception("No starting point was found")

def solve(maze: list[str]) -> list[tuple[int, int]]:
    path: list[tuple[int, int]] = []
    start = find_start(maze)

    print(start)

    def maze_walker(i: int, j: int) -> bool:
        if i < 0 or j < 0 or i >= len(maze) or j >= len(maze[i]):
            return False

        current = maze[i][j]

        if current == Tile.WALL:
            return False

        if current == Tile.SEEN:
            return False

        if current == Tile.END:
            path.append((i, j))
            return True

        maze[i] = maze[i][:j] + Tile.SEEN + maze[i][j+1:]

        up = maze_walker(i-1, j)
        if up:
            path.append((i, j))
            return True

        right = maze_walker(i, j+1)
        if right:
            path.append((i, j))
            return True

        down = maze_walker(i+1, j)
        if down:
            path.append((i, j))
            return True

        left = maze_walker(i, j-1)
        if left:
            path.append((i, j))
            return True

        return False

    maze_walker(*start)
    return path


if __name__ == "__main__":
    print(solve([
        "#####E#",
        "#     #",
        "#S#####"
    ]))

    print(solve([
        "#####E#",
        "#  #  #",
        "# ## ##",
        "#     #",
        "#S#####"
    ]))
