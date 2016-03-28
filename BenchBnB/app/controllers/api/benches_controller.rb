class Api::BenchesController < ApplicationController

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def index
    ne_lat = params[:ne_lat].to_f
    ne_lng = params[:ne_lng].to_f
    sw_lat = params[:sw_lat].to_f
    sw_lng = params[:sw_lng].to_f
    @benches = Bench.in_bounds(ne_lat, sw_lat, ne_lng, sw_lng)
    render :index
  end


  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end

end
