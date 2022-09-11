from app import ChromeAuto

chrome = ChromeAuto()

try:

    chrome.open_browser()
    chrome.signin()
    chrome.check_unread_msgs()
    chrome.exit()


except Exception as e:
    print(e)
