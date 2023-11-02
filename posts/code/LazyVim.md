# LazyVim (Neovim)
"[LazyVim](https://www.lazyvim.org/) is a [Neovim](https://neovim.io/) setup powered by [💤 lazy.nvim](https://github.com/folke/lazy.nvim) to make it easy to customize and extend your config."  

[Vim key notations](https://vimdoc.sourceforge.net/htmldoc/intro.html#keycodes) 

`vimtutor` is a command to learn Vim.  

## Set up [ESLint](https://eslint.org/)
1) Open Mason (`<Space>cm`), search for `eslint-lsp` and press `i` to install.
2) Enable extras with `:LazyExtras` (this automatically adds the [config for ESLint](https://www.lazyvim.org/extras/linting/eslint) that runs `EslintFixAll` on save and I believe reads ESLint configs).
3) Restart editor

## Key Maps
LazyVim has a way to [search available keymaps](https://github.com/LazyVim/LazyVim/discussions/690): `<Space>sk`.

## Handy Shortcuts
Feature | Keys
-|-
Find files | `<Space><Space>`
Grep all files | `<Space>/`
Switch to the last buffer | `<Space>bb`
Switch to Left Buffer | `H`
Switch to Right Buffer | `L`
Toggle terminal | `<C-/>`
Go to file under cursor | `gf`
Telescope preview scroll down | `<C-d>`
Telescope preview scroll up | `<C-u>`
## [Plugins](https://github.com/folke/lazy.nvim#-structuring-your-plugins)
Edit `~/.config/nvim/lua/plugins/init.lua` - example:
```lua
return {
  "f-person/git-blame.nvim",
}

