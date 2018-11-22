## .gitignore规则不生效的解决办法
	git rm -r --cached . （如果操作失误，该步骤撤回命令reset）
	git add .
	git commit -m 'update .gitignore'