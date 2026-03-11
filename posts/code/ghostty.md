# Ghostty

 [Ghostty](https://ghostty.org) is ready now.

Ghostty's config is streamlined (not an overwhelming amount of options).

Here's my [config](https://gist.github.com/zvakanaka/884c65f5a9c62bf982f63bda9304d298), located at `~/.config/ghostty/config`.

To get familiar with available config options, run:
```sh
ghostty +show-config --default --docs | nvim
```

To see the available fonts, run:
```sh
ghostty +list-fonts
```

To set the font in the config file:
```toml
font-family = JetBrainsMonoNL Nerd Font Mono
font-size = 14
```

To see the available themes, run:
```sh
ghostty +list-themes
```

To set the theme in the config file:
```toml
theme = "GruvboxDark"
```


It's fast. Splits are click+dragable (both resizing and moving), which Kitty does not have (Kitty requires cmd+r to resize splits with the keyboard). Tabs are also click+dragable to reorder.

For SSH, [copy ghostty's terminfo to the remote machine](https://ghostty.org/docs/help/terminfo#copy-ghostty's-terminfo-to-a-remote-machine) (this avoids strange behavior).

## Features

- Alt+click (option+click on macOS) moves the cursor to the click location while at a prompt.
- Cmd+click (Cmd+shift+click in Neovim) to open a link under cursor.
- Click+drag resizing of splits.
- Focus follows mouse across splits (must be enabled with `focus-follows-mouse = true`).
- Cmd+ctrl+space works to open the MacOS emoji picker.
- Individual font size for each split/tab.
- ctrl+f/cmd+f for [find](https://github.com/ghostty-org/ghostty/issues/189)
- [Move/reorder splits](https://github.com/ghostty-org/ghostty/pull/10090) by clicking and dragging top of the split with the mouse.
- Support for [terminal bell](https://ghostty.org/docs/vt/control/bel) is customizable (I like my `alias ding=echo -e '\a'` alias)
- Make current split take up full window with [toggle_split_zoom](https://ghostty.org/docs/config/keybind/reference#toggle_split_zoom) (<kbd>cmd+shift+enter</kbd>)
- Rename tabs with [prompt_tab_title](https://github.com/ghostty-org/ghostty/discussions/11151) and [set color](https://github.com/ghostty-org/ghostty/issues/2509)

## Missing Features

- [ctrl+tab for most recent tab](https://github.com/ghostty-org/ghostty/discussions/2393)
- [Open file on a specific line with <filename>:<lineNo>](https://github.com/ghostty-org/ghostty/discussions/3892)
- [Multiple Actions in a Single Keybind](https://github.com/ghostty-org/ghostty/discussions/3175)
