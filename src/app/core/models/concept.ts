/**
 * Concept model represents a technical concept or topic.
 *
 * This extends TechItem since concepts are essentially tech-related
 * items with just a name (and optionally a description).
 */
export interface Concept {
  name: string;
  description?: string;
}
