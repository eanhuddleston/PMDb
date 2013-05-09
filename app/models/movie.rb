class Movie < ActiveRecord::Base
  attr_accessible :audience_score, :title, :year, :poster_url, :trailer

  validates :audience_score, :title, :year, :poster_url, :presence => true
end
