class CreateFlashCards < ActiveRecord::Migration
  def change
    create_table :flash_cards do |t|
      t.text :title
      t.text :question
      t.text :answer

      t.timestamps
    end
  end
end
