class Movie < ActiveRecord::Base
  attr_accessible :audience_score, :title, :year, :poster_url, 
      :trailer, :critics_score, :cast, :runtime, :critics_consensus

  validates :audience_score, :title, :year, :poster_url, 
      :presence => true

  belongs_to :user
end