// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    return cats.push("Ralph")
}

function destructivelyPrependCat() {
    return cats.unshift("Bob")
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function appendCat() {
    const newCats = [...cats, "Broom"]
    return newCats
}

function prependCat() {
    const newCats = ["Arnold", ...cats]
    return newCats;
}

function removeFirstCat() {
    const newCats = cats.slice(1)
    return newCats
}

function removeLastCat() {
    const newCats = cats.slice(0, -1)
    return newCats
}