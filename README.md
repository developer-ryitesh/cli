# Retork CLI

A command-line interface for bootstrapping and generating boilerplate code for Retork projects.

## Installation

Install the CLI globally using npm:

```bash
npm install -g @retork/cli
```

## Usage

```bash
retork [command] [options]
```

## Commands

### `create-app <name>`

Creates a new React application in a directory with the specified name.

```bash
retork create-app my-app
```

### `component <name>`

Generates a new React component.

```bash
retork g component my-component
```

This will create a new file `my-component.tsx` inside the `my-component` directory.

**Options:**

-  `-nf, --no-folder`: Create the component in the current directory.

### `controller <name>`

Generates a new controller.

```bash
retork g controller my-controller
```

This will create a new file `my-controller.controller.tsx` in the current directory.

### `page <name>`

Generates a new page component.

```bash
retork g page my-page
```

This will create a new file `my-page.page.tsx` inside the `my-page` directory.

**Options:**

-  `-nf, --no-folder`: Create the page in the current directory.

### `page-controller <name>`

Generates a new page with a controller.

```bash
retork g page-controller my-page
```

This will create a new directory `my-page` with `my-page.page.tsx` and `my-page.controller.ts` files.

### `service <name>`

Generates a new service file.

```bash
retork g service my-service
```


This will create a new file `my-service.service.ts` in the current directory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

ISC
