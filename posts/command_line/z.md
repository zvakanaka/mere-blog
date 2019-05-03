# Z - Jump to Directories
Z is an amazing shortcut command that lets you jump to a directory quickly.  

1) Download z from [rupa's GitHub](https://github.com/rupa/z):  
`sudo curl https://raw.githubusercontent.com/rupa/z/master/z.sh -o /etc/profile.d/z.sh`  

2) Add the following line to your `~/.bashrc` or `~/.zshrc`:  
`source /etc/profile.d/z.sh`  

3) Try it out:
```sh
source /etc/profile.d/z.sh
touch ~/.z
cd  ~/Desktop
cd ~
z des
```
