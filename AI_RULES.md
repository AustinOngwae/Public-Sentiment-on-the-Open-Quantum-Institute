# AI Rules and Tech Stack Guidelines

This document outlines the core technologies used in this application and provides guidelines for their usage.

## Tech Stack Description

*   **React**: The primary JavaScript library for building the user interface.
*   **TypeScript**: A superset of JavaScript that adds static typing, enhancing code quality and maintainability.
*   **Tailwind CSS**: A utility-first CSS framework used for all styling, enabling rapid and consistent UI development.
*   **Shadcn/ui**: A collection of beautifully designed, accessible, and customizable UI components built with Radix UI and Tailwind CSS.
*   **Radix UI**: A low-level UI component library providing unstyled, accessible primitives for building robust design systems.
*   **React Router**: The standard library for declarative routing in React applications, managing navigation between different views.
*   **Lucide-react**: An extensive icon library integrated for all graphical icon needs.
*   **Project Structure**: All source code resides in the `src` directory, with pages located in `src/pages/` and reusable components in `src/components/`.
*   **Main Entry Point**: The default application page is `src/pages/Index.tsx`.

## Library Usage Rules

*   **UI Components**:
    *   Always prioritize `shadcn/ui` components for building user interfaces.
    *   If a `shadcn/ui` component requires modification, create a new component that wraps or extends it, rather than directly editing the original `shadcn/ui` component files.
*   **Styling**:
    *   Use `Tailwind CSS` exclusively for all styling. Avoid writing custom CSS files or using other styling libraries.
    *   Ensure designs are responsive by utilizing Tailwind's responsive utility classes.
*   **Icons**:
    *   All icons should be sourced from the `lucide-react` library.
*   **Routing**:
    *   Implement all client-side navigation and routing using `React Router`.
    *   Define and manage application routes within the `src/App.tsx` file.
*   **Accessibility**:
    *   Leverage the accessible foundations provided by `Radix UI` primitives (which `shadcn/ui` components are built upon) to ensure high accessibility standards.
*   **New Components**:
    *   Create a new, dedicated file for every new component or hook, no matter how small. Avoid adding new components to existing files.
    *   Aim for components that are concise and focused, ideally under 100 lines of code.