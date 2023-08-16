# [Kitty Terminal](https://sw.kovidgoyal.net/kitty/)
## Mac [Shortcuts](https://sw.kovidgoyal.net/kitty/overview/#tabs-and-windows)

Combo | Feature
-|-
`ctrl+shift+g` | open last command's output in less (/ for search)
`ctrl+shift+h` | open this terminal's content in less (/ for search)
`ctrl+shift+f/b` | switch this frame with other in window
`ctrl+shift+j/k` | scroll up/down one line in terminal
`ctrl+shift+l` | rotate through window layouts
`ctrl+shift+[/]` | cycle through windows
`ctrl+shift+n` | new window
`ctrl+shift+u` | emoji picker
`ctrl+shift+r` | resize window
`ctrl+shift+t` | new tab
`ctrl+shift+enter` | new window (split vertical)
`command+enter` | new window (split horizontal)
`command+t` | new tab
`ctrl+shift+left/right` | move left/right through tabs
`ctrl+tab` | cycle through tabs left to right
`ctrl+shift+tab` | cycle through tabs right to left

## `~/.config/kitty/kitty.conf`
```
font_family FuraMono Nerd Font Mono Regular
macos_option_as_alt yes
enabled_layouts horizontal,splits,fat,grid,vertical
map ctrl+shift_enter launch --cwd=current --location=vsplit
env VISUAL=lvim

allow_remote_control no
```
## [Fonts](https://www.nerdfonts.com/)
`kitty +list-fonts --psnames`
```
font_family FuraMono Nerd Font Mono Regular
```
`kitty --debug-font-fallback`

## Other
https://sw.kovidgoyal.net/kitty/remote-control/#kitty-get-text  
https://sw.kovidgoyal.net/kitty/conf/#tab-bar  
https://sw.kovidgoyal.net/kitty/conf/#os-specific-tweaks  
https://sw.kovidgoyal.net/kitty/conf/#keyboard-shortcuts  

