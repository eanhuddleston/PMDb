class AddTrailerColumn < ActiveRecord::Migration
  def change
    add_column :movies, :trailer, :string
  end
end
