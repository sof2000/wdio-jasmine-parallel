# wdio-jasmine-parallel

# execute script
./node_modules/.bin/wdio wdio.conf.js

# execute suites
./node_modules/.bin/wdio wdio.conf.js --suite dev

# execute in loop
for run in {1..5}; do ./node_modules/.bin/wdio wdio.conf.js --
suite dev; done