class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :media_link
      t.string :bullet_one
      t.string :bullet_two
      t.string :bullet_three
      t.references :topic, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
