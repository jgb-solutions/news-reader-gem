require 'open-uri'
require 'nokogiri'
# require 'pry'

class NewsReader::Scraper
    def self.fetch_articles
        doc = Nokogiri::HTML(open("./fixtures/blog/index.html"))
        doc.css(".blog-post").map do |post|
            {
                title: post.css("h2").text,
                date: post.css(".post-details").text.split("|")[0].split(":")[1].strip,
                url: post.css("h2 a").attribute("href").value,
                text: post.css("p").text
            }
        end
    end
end