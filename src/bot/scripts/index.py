from gi.repository import GLib, Notify

import webbrowser
import os


class App:
    def __init__(self):
        self.last_notification = None
        Notify.init("The-Trickster ready open dashboard?")
        self.check()
        print("__init__")

    def check(self):
        print("check")
        self.last_notification = Notify.Notification.new(
            "The-Trickster ready open dashboard?"
        )
        self.last_notification.add_action(
            "clicked", "Open dashboard", self.notification_callback, None
        )

        self.last_notification.show()
        GLib.timeout_add_seconds(4294967295, self.check)

    def notification_callback(self, notification, action_name, data):
        os.system("python3 processes.py > stats.txt")
        webbrowser.open(
            "file://"
            + "/home/tricked/Documents/javascript/trickedbot/src/bot/scripts/index.html"
        )
        exit()


app = App()
GLib.MainLoop().run()