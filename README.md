# Micro-Frontends Demo

## Tech/Tool Stack
- Single-SPA 6.x: A framework for building microfrontends.
- pnpm Workspace: A fast, disk space-efficient package manager that supports monorepos.
- Webpack/Rollup: Bundlers for efficiently building JavaScript applications.

## Microfrontend Applications
- Header: Built with React 18.
- Navigation (Sidebar): Built with Vue 3.
- Main Content: Built with Angular 18.
- Footer: Built with Svelte 4.

## Prerequisites
- Node.js >= 20.16.0: Ensure you have the required Node.js version installed. You can download it [here](https://nodejs.org/).
- Git: Make sure Git is installed. Download it [here](https://git-scm.com/).
- pnpm: Follow the instructions to install pnpm [here](https://pnpm.io/installation).

## Basic Usage
### 1. Clone this Repository
```bash
# Clone via SSH
git clone git@github.com:physicsSorcererKing/micro-frontends-demo.git

# Or clone via HTTPS
git clone https://github.com/physicsSorcererKing/micro-frontends-demo.git
```
### 2. Install Dependencies
Navigate to the cloned directory and install all package dependencies using pnpm:
```bash
cd micro-frontends-demo
pnpm install
```
### 3. Build All Packages
Microfrontend apps will be built in standalone mode:
```bash
pnpm build:all
```
### 4. Serve All Applications
```bash
pnpm serve:all
```

### 5. Access the Application
Open your browser and go to: http://localhost:9000/