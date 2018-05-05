type Tree<'T> =
    | Leaf of 'T
    | Branch of Tree<'T> * Tree<'T>

let (|Branch|_|) node =
    match node with
    | Branch (l, r) -> Some (l, r)
    | _             -> None

let collect (|Pred|_|) root =
    let rec loop values node = 
        match node with
        | Pred (v, next) -> loop (v::values) next
        | _              -> List.rev values, root
    loop [] root

let (|Branches|) root =
    collect (|Branch|_|) root

let tree = Branch (Branch ((Leaf 1), (Leaf 2)), Branch ((Leaf 1), (Leaf 2)))

match tree with
    | Branches x -> printf "%A" x