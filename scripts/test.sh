echo "************************"
echo "Starting static server..."
./node_modules/.bin/http-server client/ -p 8080 &
echo "************************"
echo "Testing API REST..."
echo "************************"
./node_modules/.bin/cucumber.js nock/test/features/*
echo "************************"
echo "Testing FRONT-END..."
echo "************************"
./node_modules/.bin/cucumber.js client/test/features/front.duplicated.user.feature
echo "************************"
echo "Killing background processes..."
echo "************************"
jobs -p | xargs -I{} kill {}
