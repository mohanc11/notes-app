
const chalk = require('chalk')
const validator = require('validator')
const { demandOption, argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes')
// console.log(chalk.red.bgBlue.bold("Mohan"))
// console.log(validator.isEmail('mohan@mohn.com'))
// console.log(process.argv)

//yargs.version('1.1.1')
//console.log(yargs.argv)

//customize command line argument

//add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Notes body',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function(argv){
       notes.addNote(argv.title, argv.body)
    }
})

//remove command
yargs.command({
    command:'remove',
    describe: 'remove a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    // handler: function(){
    //     notes.removeNote(argv.title)
    handler(){
        notes.removeNote(argv.title)
    }
})

//read command
yargs.command({
    command:'read',
    describe: 'Read all notes',
    handler(){
        notes.getNotes()
    }
})

//list command
yargs.command({
    command:'list',
    describe: 'list a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(){
        notes.listNote(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)