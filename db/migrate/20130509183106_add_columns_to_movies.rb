class AddColumnsToMovies < ActiveRecord::Migration
  def change
    add_column :movies, :critics_score, :integer
    add_column :movies, :cast, :string
    add_column :movies, :runtime, :integer
    add_column :movies, :critics_consensus, :string
  end
end