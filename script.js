$(document).ready(function() {
  const socket = io.connect('http://localhost:5000')
  socket.on('connect', function() {
    socket.send('User connected!')
  })

  socket.on('message', function(data) {
    $('#messages').append($('<p>').text(data))
  })

  $('#message-form').on('submit', function(e) {
    e.preventDefault()
    const username = $('#username').val()
    const message = $('#message').val()
    socket.send(`${username}: ${message}`)
    $('#message').val('')
    return false
  })

  $('#username-form').on('submit', function(e) {
    e.preventDefault()
    $('#username-container').toggleClass('d-none')
    $('#message-container').toggleClass('d-none')
  })
})