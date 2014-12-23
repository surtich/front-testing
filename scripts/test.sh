echo "************************"
echo "Starting static server..."
./node_modules/.bin/http-server client/ -p 8080 &
echo "************************"
echo "Testing API REST..."
echo "************************"
./node_modules/.bin/cucumber.js nock/test/features/api.register.feature
echo "************************"
echo "Testing FRONT-END info.html..."
echo "************************"
./node_modules/.bin/cucumber.js client/test/features/front.info.feature
echo "************************"
echo "Testing FRONT-END register.html..."
./node_modules/.bin/cucumber.js client/test/features/front.register.feature
echo "************************"
echo "Killing background processes..."
echo "************************"
jobs -p | xargs -I{} kill {}
