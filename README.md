# Project X

This is a starter project utilizing Vite with React + MUI, leveraging TypeScript for enhanced development experience. It's designed to accelerate the creation of professional React applications, featuring a mix of [Vite](https://vitejs.dev/guide/) and [MUI](https://mui.com) with a collection of reusable components and utilities.

## Features

- **Prettier**: Ensures consistent code formatting.
- **Eslint**: Performs code linting for error checking.
- **Common Components**: Includes a set of common components, useful hooks, and essential utilities.
- **State Management**: Utilizes Context API for state management.
- **Public and Private Layouts**: Offers different and customized layouts for public and private sections.
- **Authentication**: Provides basic authentication hooks and events.
- **Dark and Light Mode**: Supports both dark and light mode with a switch.
- **PWA Support**: Includes FavIcon and Manifest for Progressive Web App functionality.

## Prerequisites

1. Node v20 and pnpm (installed via `corepack enable pnpm`)
2. Copy the `.env.example` file into `.env`.
3. Install deps (`pnpm install`)

## Folder Structure

```
├── assets                  # Static assets like images, fonts, etc.
│   ├── images              # Image assets
│   └── scss                # SCSS stylesheets
├── hooks                   # Custom React hooks
├── layout                  # Contains layout components
├── routes                  # Route configuration files
├── store                   # Store configuration files
├── theme                   # Theme configuration files
├── ui-component            # Reusable UI components
├── utils                   # Utility functions and helpers
└── views                   # View components for different pages
```

## Available Scripts

In the project directory, you can run:

- `pnpm dev`: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `pnpm lint`: Checks the code for errors and missing things.
- `pnpm format`: Formats the code according to the `.prettierrc.js` config.
- `pnpm test`: Launches the test runner in interactive watch mode.
- `pnpm build`: Builds the app for production or local development to the `dist` folder.

Feel free to reach out if you have any questions or need further assistance!
