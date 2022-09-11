from app import ChromeAuto

chrome = ChromeAuto()

try:

    chrome.open_browser()


except Exception as e:
    print(e)
