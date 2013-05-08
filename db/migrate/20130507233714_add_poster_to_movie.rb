class AddPosterToMovie < ActiveRecord::Migration
  def up
    add_column :movies, :filepicker_url, :string
  end

  def down
    remove_column :movies, :filepicker_url
  end
end
