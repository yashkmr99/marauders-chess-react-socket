/**
 * Contains the static variable with the inital props of all nodes
 * The variable contains a list of list for all nodes (dimension: 150 x 6)
 * The first 4 bool values correspond to isLeft, isRight, isBottom, isTop (wall position)
 * (Note that at most one of these must be true)
 * The last two values contain the information about player and piece
 * Player: 0, piece: ""
 * Player: 1/2, piece: "king", "rook", "knight", "bishop"
 */
class initial_nodes{
    static initial_nodes_border = [
        // row 1
[false, false, false, true, 1, "rook"],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, true, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 2, "king"],
// row 2
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
// row 3
[false, false, false, false, 1, "knight"],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 2, "bishop"],
// row 4
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
// row 5
[false, false, false, false, 1, "bishop"],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, true, false, false, 0, ""],
[false, false, false, false, 2, "knight"],
// row 6
[false, false, false, false, 1, "knight"],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[true, false, false, false, 0, ""],
[false, true, false, false, 0, ""],
[false, false, true, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, true, 0, ""],
[false, false, false, true, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 2, "bishop"],
// row 7
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
// row 8
[false, false, false, false, 1, "bishop"],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 2, "knight"],
// row 9
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
// row 10
[false, false, false, false, 1, "king"],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 0, ""],
[false, false, false, false, 2, "rook"]
]

    static get_initial_nodes(){
        return this.initial_nodes_border;
    }
}
export default initial_nodes;