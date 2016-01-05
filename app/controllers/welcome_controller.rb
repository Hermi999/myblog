class WelcomeController < ApplicationController
  def index
    @images = ['1.JPG',
               '2.JPG',
               '3.JPG',
               '4.JPG',
               '5.JPG',
               '6.JPG',
               '7.JPG',
               '8.JPG',
               '9.JPG',
               '10.JPG',
               '11.JPG',
               '12.JPG']

    @image_title = []

    @images.each_with_index do |image, index|
      @image_title << t("welcome.aboutme.image#{index}.title")
    end
  end
end
