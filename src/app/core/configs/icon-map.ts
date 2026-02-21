export const ICON_MAP: Record<string, string> = {
  'c++': 'cpp',
  'java': 'java',
  'php': 'php',
  'sql': 'sql',
  'html': 'html',
  'css': 'css',
  'javascript': 'js',
  'dart': 'dart',
  'typescript': 'ts',
  'kotlin': 'kotlin',
  'flutter': 'flutter',
  'angular': 'angular',
  'laravel': 'laravel',
  'jetpack compose': 'compose',
  'tailwind': 'tailwind',
};

export function getIconName(name: string): string {
  const key = name.toLowerCase();
  return ICON_MAP[key] || key;
}
