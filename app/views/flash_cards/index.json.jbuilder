json.array!(@flash_cards) do |flash_card|
  json.extract! flash_card, :id, :title, :question, :answer
  json.url flash_card_url(flash_card, format: :json)
end
