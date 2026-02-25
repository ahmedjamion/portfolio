export const CONCEPT_COLORS: Record<string, string> = {
  oop: '#F28F16',
  mvc: '#6F77A6',
  mvvm: '#A4C639',
};

export function getConceptColor(name: string): string {
  const key = name.toLowerCase();
  return CONCEPT_COLORS[key] || '#888888';
}
