class NewsReader::Article
    attr_accessor :title, :url, :text, :category, :tags, :author
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

    def self.all
        @@all
    end
end