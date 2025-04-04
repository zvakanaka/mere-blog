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


It's fast (piping/pasting megabytes of text doesn't take much time - I do this a lot when pasting cURL commands with large payloads to test things). Splits are click+dragable, which Kitty does not have (Kitty requires cmd+r to resize splits with the keyboard). Tabs are click+dragable to reorder.

For SSH, [copy ghostty's terminfo to the remote machine](https://ghostty.org/docs/help/terminfo#copy-ghostty's-terminfo-to-a-remote-machine) (this avoids strange behavior).

## Missing Features

- No support for terminal bell yet (I like my `alias ding=echo -e '\a'` alias) :( https://ghostty.org/docs/vt/control/bel
- ctrl+f/cmd+f for find: https://github.com/ghostty-org/ghostty/issues/189
- Support for ctrl+tab for most recent tab https://github.com/ghostty-org/ghostty/discussions/2393

## Features

- Alt+click (option+click on macOS) moves the cursor to the click location while at a prompt.
- Cmd+click (Cmd+shift+click in Neovim) to open a link under cursor.
- Click+drag resizing of splits.
- Focus follows mouse across splits (must be enabled with `focus-follows-mouse = true`).
- Cmd+ctrl+space works to open the MacOS emoji picker.

