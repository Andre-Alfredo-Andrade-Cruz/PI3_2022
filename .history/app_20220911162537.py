from selenium import webdriver
import time


class ChromeAuto:
    def __init__(self):
        self.driver = webdriver.Chrome('./chromedriver/chromedriver')

    def open_browser(self):
        self.driver.get('https://www.themoviedb.org/discover/movie?sort_by=popularity.desc')
        self.driver.maximize_window()

    def exit(self):
        time.sleep(1)
        self.driver.quit()



        