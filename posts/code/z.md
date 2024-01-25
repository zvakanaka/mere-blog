# Z - Jump to Directories
`z` is an amazing shortcut command that lets you jump to a directory quickly.  

## Installing with [Oh My Zsh](https://ohmyz.sh/)
Add the [`zsh-z`](https://github.com/agkozak/zsh-z) [plugin](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins) into the `plugins` array of your `~/.zshrc`.  
E.g.:
```sh
plugins=(git gitfast last-working-dir zsh-syntax-highlighting zsh-z)
```

## Installing without [Oh My Zsh](https://ohmyz.sh/)
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
