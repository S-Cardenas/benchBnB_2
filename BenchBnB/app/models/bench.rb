class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(lat_i, lat_j, lng_i, lng_j)
    lat_i, lat_j = [lat_i, lat_j].sort
    lng_i, lng_j = [lng_i, lng_j].sort
    Bench
      .where( "lat BETWEEN ? AND ?", lat_i, lat_j)
      .where( "lng BETWEEN ? AND ?", lng_i, lng_j)

  end
end
