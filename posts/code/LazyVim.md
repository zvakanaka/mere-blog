"[LazyVim](https://www.lazyvim.org/) is a [Neovim](https://neovim.io/) setup powered by [💤 lazy.nvim](https://github.com/folke/lazy.nvim) to make it easy to customize and extend your config."  

[Vim key notations](https://vimdoc.sourceforge.net/htmldoc/intro.html#keycodes) 

`vimtutor` is a command to learn Vim.  

## Set up ESLint
1) Open Mason (`<Space>cm`), search for `eslint-lsp` and press `i` to install.  
2) Enable extras with `:LazyExtras` (this automatically adds the [config for ESLint](https://www.lazyvim.org/extras/linting/eslint) that runs `EslintFixAll` on save and I believe reads ESLint configs).  
3) Restart editor. 
If a problem arises with the LSP, running `:LspRestart` might fix it.

## Code Folding
Press `z` and multiple folding suggestions appear ([source](https://github.com/LazyVim/LazyVim/issues/1319#issuecomment-1674464664)).
`zi` toggles folding.
`za` collapses/expands scope under cursor.

## Marks
[Add](https://vim.fandom.com/wiki/Using_marks#Using_marks) a mark named 'a': `ma`.
Jump to a mark named 'a': `'a`.

Vim has [special marks](https://vim.fandom.com/wiki/Using_marks#Special_marks) that it automatically sets.

[Delete](https://vim.fandom.com/wiki/Using_marks#Deleting_marks) mark 'a' with: `:delmarks a`.
## Case
`vU` turns a character uppercase, and `vu` lowercase. `u` and `U` can also be used on a selection.
https://stackoverflow.com/a/41647348/4151489

## [flash.nvim](https://www.lazyvim.org/keymaps#flashnvim)
* In Normal mode, `/` or `s` initiates a search.
* As you type, matches will have a red (ultra-highlighted) character (or two) to the right of each match.
* I believe there will never be a red character that would be also part of a match (e.g. searching for 'retur' would never have a red character of `n` to the right of it - otherwise that would clash with your search).
* Typing the red character jumps your cursor to that match.

In Normal mode, `S` does a "select all within scope" feature, where you then type a character seen in red to visually select up to that scope.

## [mini.surround](https://github.com/echasnovski/mini.surround.git)
There is a maximum amount of lines surround can work with (see [readme - n_lines](https://github.com/echasnovski/mini.surround#default-config)).

Combined with the `S` key to select scope, this works great to add/replace a surrounds.
## Key Maps
LazyVim has a way to [search available keymaps](https://github.com/LazyVim/LazyVim/discussions/690): `<Space>sk`.
## Handy Shortcuts
Feature | Keys
-|-
Find files (root) | `<Space><Space>`
Find files (cwd) | `<Space>fF` 
Grep all files | `<Space>/`
Switch to the last buffer | `<Space>bb`
Switch to Left Buffer | `H`
Switch to Right Buffer | `L`
Toggle terminal | `<C-/>`
Go to file under cursor | `gf`
Telescope preview scroll down | `<C-d>`
Telescope preview scroll up | `<C-u>`
Dashboard | `:Dashboard`

## [Plugins](https://github.com/folke/lazy.nvim#-structuring-your-plugins)
Edit `~/.config/nvim/lua/plugins/init.lua` - example:
```lua
return {
  "f-person/git-blame.nvim",
  {
    -- use <leader>gy to copy the GitHub link to the line (or range if in visual mode) I'm on:
    "ruifm/gitlinker.nvim",
    -- seems like the normal version has all the functionality I need anyway so I don't use this fork:
    -- 'linrongbin16/gitlinker.nvim',
    config = function()
      require("gitlinker").setup()
    end,
  },
  {
    "akinsho/toggleterm.nvim",
    version = "*",
    config = true,
    keys = {
      {
        [[<C-\>]],
        "<cmd>ToggleTerm size=10 direction=horizontal<cr>",
        desc = "Open a horizontal terminal at the Desktop directory",
      },
    },
  },
  {
    "levouh/tint.nvim",
    config = function()
      require("tint").setup()
    end,
  },
  {
    "norcalli/nvim-colorizer.lua",
    config = function()
      require("colorizer").setup()
    end,
  },
}
```
OR add a file for a plugin. - example for [Spectre](https://github.com/nvim-pack/nvim-spectre) - Spectre comes with LazyVim, but adding a custom config for it like this replaces the default LazyVim config:
```lua
return {
  "nvim-pack/nvim-spectre",
  build = false,
  cmd = "Spectre",
  opts = { open_cmd = "noswapfile vnew" },
  -- stylua: ignore
  keys = {
    { "<leader>sr", function() require("spectre").open() end, desc = "Replace in files (Spectre)" },
    { "<leader>sp", function() require("spectre").open_file_search({select_word=true}) end, desc = "Replace in current file (Spectre)" },
  },
}
```

## [LazyExtras](https://www.lazyvim.org/extras)
Toggle in `:LazyExtras` with the `x` key.

Name | Notes
-|-
[nvim-navic](https://www.lazyvim.org/extras/editor/navic)| Show where in the code structure you are.
[nvim-spectre](https://github.com/nvim-pack/nvim-spectre) | Global/file-specific search and replace with regex.

## [Colorscheme](https://www.lazyvim.org/plugins/colorscheme) and Theme
`<Space>uC` for the telescope "Colorscheme with preview" picker (live update).

LazyVim sets up [Tokyo Night](https://github.com/folke/tokyonight.nvim) and [Habamax](https://github.com/ntk148v/habamax.nvim) in `lua/config/lazy.lua`. If you want to use another theme, you will need to comment out those colorschemes.

## Custom Terminal Title (shows file name)
`~/.config/nvim/init.lua`:
```lua
-- https://medium.com/usevim/changing-vims-title-713001d4049c
-- https://www.imaginaryrobots.net/posts/2021-04-17-converting-vimrc-to-lua/
-- search glyphs here and use `echo -e '<UTF_HERE>'` to test them:
--   https://www.nerdfonts.com/cheat-sheet
vim.opt.title = true
vim.opt.titlestring = " %-25.55F %a%r%m" -- or 
vim.opt.titlelen = 70
```
