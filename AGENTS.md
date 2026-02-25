# AGENTS.md - Development Guidelines for Portfolio

You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

---

## Build, Lint, and Test Commands

### Development
```bash
npm start                # Start dev server at http://localhost:4200
npm run watch           # Build with watch mode for development
```

### Building
```bash
npm run build           # Production build to dist/portfolio
npm run build -- --configuration=development  # Development build
```

### Testing
```bash
npm test                # Run all tests with Karma/Jasmine
npm test -- --watch    # Run tests in watch mode
npm test -- --browsers=ChromeHeadless  # Run tests in headless browser

# Run a single test file
npm test -- --include="**/project-name.spec.ts"

# Run tests with coverage
npm test -- --code-coverage
```

### Other Commands
```bash
npm run ng extract-i18n  # Extract i18n messages
```

---

## TypeScript Configuration

The project uses strict TypeScript settings in `tsconfig.json`:
- `strict: true` - Enable all strict type checking options
- `noImplicitOverride: true` - Require `override` keyword when overriding methods
- `noPropertyAccessFromIndexSignature: true` - Require dot notation for known properties
- `noImplicitReturns: true` - Ensure all code paths return a value
- `noFallthroughCasesInSwitch: true` - Prevent switch statement fallthrough
- `isolatedModules: true` - Treat each file as a separate module

### Best Practices
- Use strict type checking at all times
- Prefer type inference when the type is obvious (e.g., `const x = 5`)
- Avoid the `any` type; use `unknown` when type is uncertain
- Enable `strictTemplates` for template type checking

---

## Angular Best Practices

### Components
- Always use standalone components over NgModules
- Do NOT set `standalone: true` inside Angular decorators (default in Angular v20+)
- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components (under ~30 lines)
- When using external templates/styles, use paths relative to the component TS file

### Routing
- Implement lazy loading for feature routes using `loadComponent` or `loadChildren`
- Use the `inject()` function instead of constructor injection

### Images
- Use `NgOptimizedImage` for all static images
- Note: `NgOptimizedImage` does not work for inline base64 images

### Host Bindings
- Do NOT use `@HostBinding` and `@HostListener` decorators
- Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator

### Forms
- Prefer Reactive forms over Template-driven ones

---

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals; use `update` or `set` instead

---

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available in templates
- Do not write arrow functions in templates (they are not supported)
- Do NOT use `ngClass`; use `class` bindings instead
- Do NOT use `ngStyle`; use `style` bindings instead

---

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services

---

## Accessibility Requirements

- Must pass all AXE checks
- Must follow all WCAG AA minimums including:
  - Focus management
  - Color contrast
  - ARIA attributes

---

## Code Style Guidelines

### Naming Conventions
- **Files**: Use kebab-case (e.g., `my-component.ts`)
- **Components/Directives**: Use PascalCase (e.g., `MyComponent`)
- **Classes/Interfaces/Types**: Use PascalCase (e.g., `UserService`)
- **Methods/Properties**: Use camelCase (e.g., `getData()`)
- **Constants**: Use UPPER_SNAKE_CASE for enum values, camelCase for others
- **Prefixes**: Use feature-specific prefixes (e.g., `header-`, `project-`)

### Imports
- Use absolute imports with paths starting from `@app/` or `@core/`, `@shared/`, `@features/`
- Group imports in this order: Angular, External libraries, App imports
- Use explicit named exports over default exports

### Formatting
- Follow Prettier configuration in `package.json`:
  - Print width: 100
  - Single quotes: true
- Run `npx prettier --write` to format code

### Error Handling
- Use typed errors rather than generic `any` catch blocks
- Implement proper error boundaries in components
- Use RxJS error handling operators (`catchError`, `retry`, etc.)

### CSS/Tailwind
- Use Tailwind CSS v4 for styling
- Keep custom CSS minimal; prefer utility classes
- Use semantic class names when extending Tailwind

---

## Testing Guidelines

- Write unit tests using Jasmine/Karma (configured in `angular.json`)
- Test files follow naming convention: `*.spec.ts`
- Run single test: `npm test -- --include="**/filename.spec.ts"`
- Follow AAA pattern: Arrange, Act, Assert
- Test component public API (inputs, outputs, public methods)
- Mock dependencies using `jasmine.createSpyObj` or similar
