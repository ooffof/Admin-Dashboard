call npm run build

call cd dist


call git init
call git add -A
call git commit -m 'deploy'


call git push -f git@github.com:ooffof/Admin-Dashboard.git master:gh-pages
