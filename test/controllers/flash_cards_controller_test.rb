require 'test_helper'

class FlashCardsControllerTest < ActionController::TestCase
  setup do
    @flash_card = flash_cards(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:flash_cards)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create flash_card" do
    assert_difference('FlashCard.count') do
      post :create, flash_card: { answer: @flash_card.answer, question: @flash_card.question, title: @flash_card.title }
    end

    assert_redirected_to flash_card_path(assigns(:flash_card))
  end

  test "should show flash_card" do
    get :show, id: @flash_card
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @flash_card
    assert_response :success
  end

  test "should update flash_card" do
    patch :update, id: @flash_card, flash_card: { answer: @flash_card.answer, question: @flash_card.question, title: @flash_card.title }
    assert_redirected_to flash_card_path(assigns(:flash_card))
  end

  test "should destroy flash_card" do
    assert_difference('FlashCard.count', -1) do
      delete :destroy, id: @flash_card
    end

    assert_redirected_to flash_cards_path
  end
end
