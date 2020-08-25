module.exports = (app) => {
  const notes = require('../controllers/note.controller.js')

  // Add a new note
  app.post('/notes', notes.create)

  // View all the existing notes
  app.get('/notes', notes.findAll)

  // Retrieve a single Note with noteId
  app.get('/notes/:noteId', notes.findOne)

  // Update a Note with noteId
  app.put('/notes/:noteId', notes.update)

  // Delete a Note with noteId
  app.delete('/notes/:noteId', notes.delete)
}
