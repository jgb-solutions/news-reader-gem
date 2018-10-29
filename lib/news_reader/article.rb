class NewsReader::Article
    attr_accessor :title, :date, :url, :text
    @@all = []

    def initialize article
        article.each do |key, value|
            self.send("#{key}=", value)
        end
        @@all << self
    end

    def add_attributes attributes
        attributes.each do |key, value|
            self.send("#{key}=", value)
        end
    end

    def self.import collection
        collection.each do |article|
            NewsReader::Article.new article
        end
    end

    def self.list
        puts "--------- Blog Articles ---------"
        @@all.each.with_index(1) do |article, index|
            puts "  - #{index}. #{article.title}"
        end
    end

    def self.read
        self.list
        self.menu
        input = nil
        while input != "menu"
            input = gets.strip

            index = input.to_i - 1
            if !index.between?(0, self.all.size - 1)
                puts "(-_-) You must choose an article that exists in our database"
            else
                article = self.all[index]
                puts "------ #{article.title} ------"
                puts "-- Date Published: #{article.date}"
                puts "-- Article Text: #{article.text}"
                puts "-- Ctr/Alt + click #{article.url} to go to the article page."
                puts "------ ------ ------ ------ ------"
                self.menu
            end
        end
    end

    def self.menu
        puts "Please choose an article from 1 to #{self.all.size} to read"
        puts "Type `menu` to go to the main menu"
    end
    def self.all
        @@all
    end
end