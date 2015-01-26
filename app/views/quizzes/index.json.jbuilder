json.array!(@quizzes) do |quiz|
  json.extract! quiz, :id, :score
  json.url quiz_url(quiz, format: :json)
end
