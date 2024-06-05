all: install start

install:
	@echo "Installing dependencies..."
	@npm install

start:
	@echo "Starting the project..."
	@npm run start