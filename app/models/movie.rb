class Movie < ActiveRecord::Base
  attr_accessible :audience_score, :title, :year

  validates :audience_score, :title, :year, :presence => true
end
