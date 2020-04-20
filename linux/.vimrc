set tabstop=4
set smartindent
set whichwrap+=<,>,[,]

if has("autocmd")
	au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif
	endif
