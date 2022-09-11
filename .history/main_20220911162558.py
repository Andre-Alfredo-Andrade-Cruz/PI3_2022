from app import ChromeAuto

chrome = ChromeAuto()

try:

    chrome.open_browser()
    # chrome.exit()


except Exception as e:
    print(e)
