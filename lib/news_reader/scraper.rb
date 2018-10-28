require 'open-uri'
require 'nokogiri'
require 'pry'

class NewsReader::Scraper
    def self.fetch_articles
        doc = Nokogiri::HTML(open("./fixtures/article-site/index.html"))
        binding.pry
    end
end