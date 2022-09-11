from selenium import webdriver
from email_data import EMAIL_LOGIN, EMAIL_PASSWORD
import time


class ChromeAuto:
    def __init__(self):
        self.driver = webdriver.Chrome('./chromedriver/chromedriver')

    def open_browser(self):
        self.driver.get('www.themoviedb.org/discover/movie?sort_by=popularity.desc')
        self.driver.maximize_window()

    def exit(self):
        time.sleep(1)
        self.driver.quit()



        