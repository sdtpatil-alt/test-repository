# Webhook Test Application

This application is designed to test GitHub webhook functionality with various file operations including modifications, additions, and deletions.

## Purpose

This repository serves as a testbed for webhook integration testing, specifically for the omnisync-service project. It demonstrates how webhooks handle different types of file changes.

## Test Scenarios

The application tests the following webhook scenarios:

1. **File Modifications** - Testing webhook triggers when existing files are updated
2. **File Additions** - Testing webhook triggers when new files are created
3. **File Deletions** - Testing webhook triggers when files are removed
4. **Mixed Operations** - Testing webhook handling of complex changes with multiple file operations

## Features

- Interactive counter component with increment, decrement, and reset functionality
- Real-time document title updates
- Enhanced error handling and performance monitoring
- Comprehensive test coverage
- Modern UI with responsive design

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Project Structure

```
test-repository/
├── public/              # Static assets
├── src/
│   ├── components/     # React components
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   ├── services/       # API services
│   ├── config/         # Configuration files
│   └── styles/         # Style configurations
└── package.json        # Project dependencies
```

## Testing Webhooks

To test webhook functionality:

1. Make changes to files (modify, add, or delete)
2. Commit changes to the main branch
3. Push to trigger the webhook
4. Monitor webhook responses in your omnisync-service logs

## Dependencies

- React 19.2.4
- React DOM 19.2.4
- Axios 1.6.0
- Testing Library utilities

## License

This project is for testing purposes only.
