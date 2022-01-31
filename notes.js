const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    const notes = loadNotes()
    debugger
    console.log("TITLE \t\t" + "BODY\n")
    let i = 1
    notes.forEach(element => {
        console.log(i++ + "." + element.title + "\t\t" + element.body)

    });
}

const listNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.green.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse("Note NOT FOUND"))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    let bool = false
    for (let index = 0; index < notes.length; index++) {
        if (notes[index].title === title) {
            notes.splice(index, 1)
            saveNotes(notes)
            bool = true
            break;
        }
    }
    if (bool === true) {
        console.log(chalk.green.inverse("Notes removed successfullly"))
    }
    else
        console.log(chalk.red.inverse("Note Not found"))
}

const addNote = function (title, body) {

    const notes = loadNotes()
    const duplicateNotes = notes.filter((note => note.title === title))

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added successsfully')
    } else {
        console.log('Note Title already taken...Please add different title')
    }
}
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote

}