export default function createSRTContent(entries: Array<{
  start: string;
  end: string;
  text: string;
}>): string {
  return entries.map((entry, index) => {
    // Convert timestamps to SRT format (HH:MM:SS,mmm)
    const start = entry.start.replace('.', ',');
    const end = entry.end.replace('.', ',');

    return `${index + 1}\n` +
      `${start} --> ${end}\n` +
      `${entry.text.replace(/\n/g, '\n')}\n`;
  }).join('\n');
}