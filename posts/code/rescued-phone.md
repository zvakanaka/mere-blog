# Rescued Phone
I went snowshoeing and lost my phone somewhere between the end of the hike and the parking lot. I retraced my steps, went home and used [find my device by Google](https://www.google.com/android/find) and located it at a Del Taco about 45 miles away. When I used "Play Sound", then called it, it turned off (or lost service). I thought it was stolen for sure.

I got a flip phone as a cheap replacement and then ordered a Google Pixel 5 on Amazon (~$320). I use my phone daily for church responsibilities, so it was nice to be able to switch to a flip phone in only a few hours. Then I got an email from a sherif - the phone was turned in to Search and Rescue, and then him. He dropped it off at my apartment! The top half of the screen was dark from sitting in the snow and maybe being smashed (explaining why it wasn't answered at the Del Taco), but my email address was on the bottom of the lock screen, which he saw and was able to communicate with me through that.

It made me really happy to know it wasn't stolen. I felt so grateful that someone turned it in, and that the sherif brought it back to me. I feel bad for thinking it was for a moment! Also, it was nice to go without a smartphone for a bit. Flip phones these days (with KaiOS) have Google Maps, YouTube, an E-Pub reader, conversation-view texting, and voice-to-text typing - a little clunky, but it's do-able!

![PXL_20220103_170143853](https://user-images.githubusercontent.com/8365885/152913229-997f0f69-44ba-4a2b-9b98-fe5d9245f522.jpg)

## Android Backup Tips

I used [scrcpy](https://github.com/Genymobile/scrcpy) to see the display and control the phone on my computer.

I used [SMS Backup & Restore](https://www.androidcentral.com/how-back-up-restore-text-messages-android) to back up my messages (SMS + MMS) and call log to files on the phone for later transfer.

I used [OpenSSH server on Termux](https://wiki.termux.com/wiki/Remote_Access#Using_the_SSH_server) to remotely copy files from my phone to Ubuntu computer using SFTP in the computer's file browser.

To get Google Authenticator QR-code for transferring to my new phone, I used split-screen mode with Google Authenticator on the bottom. The code was barely able to be scanned, but it worked!
