const store = require('./../store')

const createPromptSuccess = function (response) {
  $('#prompt-message').text('Prompt created.')
  response.prompt = store.prompt
  console.log(store.prompt)
}

const createPromptFailure = function (response) {
  $('#prompt-message').text('Prompt creation failed.')
}


const viewPromptsSuccess = function (response) {
  store.prompt = response.prompt
  const userPrompts = store.prompt
  const promptString = JSON.stringify(userPrompts)
  $('#prompt-message').html(promptString)
  console.log(store.prompt)
}

const viewPromptsFailure = function (response) {
  $('#prompt-message').text('Cannot view prompts.')
}

const viewAllPromptsSuccess = function (response) {
  store.prompt = response.prompt
  const userPrompts = store.prompt
  console.log(userPrompts)
}

const viewAllPromptsFailure = function (response) {
  $('#prompt-message').text('Cannot view prompts.')
}

const updatePromptSuccess = function (response) {
    store.prompt = response.prompt
    const updatedPrompt = store.prompt
    const promptString = JSON.stringify(updatedPrompt)
    $('#prompt-message').html(promptString)
    $('form').trigger('reset')
}

const updatePromptFailure = function (response) {
  $('#prompt-message').text('Cannot update prompt. Please check if ID is correct.')
}

const deletePromptSuccess = function (response) {
  $('#prompt-message').text('Prompt deleted successfully.')
  $('form').trigger('reset')
}

const deletePromptFailure = function (response) {
  $('#prompt-message').text('Could not delete prompt. Try again with correct ID.')
}

module.exports = {
  createPromptSuccess,
  createPromptFailure,
  viewPromptsSuccess,
  viewPromptsFailure,
  viewAllPromptsSuccess,
  viewAllPromptsFailure,
  updatePromptSuccess,
  updatePromptFailure,
  deletePromptSuccess,
  deletePromptFailure
}