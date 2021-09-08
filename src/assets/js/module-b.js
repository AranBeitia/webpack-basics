import 'jquery'

$('#root').append('<button id="button">Click</button>')

const message = $('<p></p>')
$('#button').on('click', () => {
  message.text('hello jquery')
  $('#root').after(message)
})
