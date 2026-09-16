# Tic-Tac-Toe AI — Project Requirements

## 1. Project Overview

Build a web-based Tic-Tac-Toe game featuring an **unbeatable AI opponent** using the **Minimax algorithm**.

The project will serve as:
- AI Lab mini-project
- TE 5th Semester working project
- Web development portfolio project

The AI must use **basic Minimax with a maximum search depth of 9**.

---

# 2. Core Requirements

## 2.1 Tic-Tac-Toe Game

The application must provide a functional 3×3 Tic-Tac-Toe board.

### The game must support:

- 3×3 board
- Two players: `X` and `O`
- Valid move detection
- Preventing moves on occupied cells
- Turn management
- Win detection
- Draw detection
- Game reset/restart

---

# 3. AI Requirements

## 3.1 Minimax Algorithm

The computer opponent must use the **Minimax algorithm** to determine its moves.

The AI should:

1. Generate all available moves.
2. Simulate each possible move.
3. Recursively simulate the opponent's responses.
4. Continue searching until:
   - A terminal game state is reached, or
   - Search depth reaches 9.
5. Evaluate the resulting position.
6. Select the move with the best guaranteed outcome.

### Evaluation

Suggested scoring:

- AI win → `+10`
- Draw → `0`
- AI loss → `-10`

The AI should prioritize:

```text
Win > Draw > Loss