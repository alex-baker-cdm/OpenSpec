/**
 * Devin Desktop Command Adapter
 *
 * Formats commands for Devin Desktop following its SKILL.md specification.
 * Devin uses SKILL.md files with YAML frontmatter (name, description) inside
 * named directories under .devin/skills/.
 */

import path from 'path';
import type { CommandContent, ToolCommandAdapter } from '../types.js';
import { escapeYamlValue } from '../yaml.js';

/**
 * Devin Desktop adapter for command generation.
 * File path: .devin/skills/opsx-<id>/SKILL.md
 * Frontmatter: name, description
 */
export const devinAdapter: ToolCommandAdapter = {
  toolId: 'devin',

  getFilePath(commandId: string): string {
    return path.join('.devin', 'skills', `opsx-${commandId}`, 'SKILL.md');
  },

  formatFile(content: CommandContent): string {
    return `---
name: ${escapeYamlValue(content.name)}
description: ${escapeYamlValue(content.description)}
---

${content.body}
`;
  },
};
