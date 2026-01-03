import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines CSS classes with Tailwind utilities using tailwind-merge
 * This prevents Tailwind class conflicts and ensures proper precedence
 *
 * @example
 * cn('px-4 py-2', 'px-8') // Result: 'py-2 px-8'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Creates a scoped className builder for CSS Modules
 * Allows mixing CSS Module classes with Tailwind utilities
 * Automatically handles hyphenated class names
 *
 * @example
 * const s = scopedStyles(styles);
 * <div className={s('container', isActive && 'active', 'flex gap-4')} />
 *
 * @param styles - CSS Module object (import styles from './component.module.css')
 * @returns Function that composes classes and returns className string
 */
export function scopedStyles(styles: Record<string, string>) {
  return (...args: (string | boolean | undefined)[]) => {
    return cn(
      args
        .filter((arg): arg is string => typeof arg === 'string')
        .map(arg => {
          // If class exists in CSS Module, use it; otherwise treat as Tailwind class
          return styles[arg] ?? arg;
        })
    );
  };
}

/**
 * Composes CSS Module classes with conditional logic
 * Useful for handling active states, themes, etc.
 *
 * @example
 * cx(styles, {
 *   'tab-content__item': true,
 *   'active': isActive,
 *   'disabled': !enabled
 * }, 'flex gap-4')
 *
 * @param styles - CSS Module object
 * @param classes - Object with class names as keys and boolean conditions as values
 * @param tailwind - Optional Tailwind utility classes
 * @returns Composed className string
 */
export function cx(
  styles: Record<string, string>,
  classes: Record<string, boolean> | string,
  tailwind?: string
): string {
  if (typeof classes === 'string') {
    return cn(styles[classes], tailwind);
  }

  const moduleClasses = Object.entries(classes)
    .filter(([_, condition]) => condition)
    .map(([className, _]) => styles[className])
    .filter(Boolean);

  return cn(...moduleClasses, tailwind);
}
