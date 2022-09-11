from selenium import webdriver
from email_data import EMAIL_LOGIN, EMAIL_PASSWORD
import time


class ChromeAuto:
    def __init__(self):
        self.driver = webdriver.Chrome('./chromedriver/chromedriver')

    @property
    def email_login(self):
        return self._email_login

    @property
    def email_password(self):
        return self._email_password

    def open_browser(self):
        self.driver.get('https://outlook.live.com/owa/')
        self.driver.maximize_window()

    def exit(self):
        time.sleep(1)
        self.driver.quit()



        