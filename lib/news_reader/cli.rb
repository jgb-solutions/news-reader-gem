class NewsReader::CLI
    APP_NAME = "News Reader CLI"
    def self.start
        NewsReader::Scraper.fetch_articles

        puts "-----------------------------------"
        puts "Welcome to the News Reader CLI app!"
        puts "-----------------------------------"

        input = nil
        while input != "exit"
            menu
            input = gets.strip

            case input
                when 'list'
                    NewsReader::Article.list
                when 'read'
                    NewsReader::Article.read
                when 'about'
                    about
            end
        end

        puts "Thanks for using the #{APP_NAME} app!"
    end

    def self.menu
        puts "---------------"
        puts "Please choose an option from the menu below:"
        puts "   - Type `list` to list all the articles"
        puts "   - Type `read` to read an article"
        puts "   - Type `about` to know more about #{APP_NAME}"
        puts "---------------"
    end

    def self.about
        p "about info"
    end
end