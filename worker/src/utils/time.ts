export function parseTimestamp(ts: string): number {
  // e.g. "00:00:05.000" → [ "00", "00", "05", "000" ]
  const [h = 0, m = 0, s = 0, ms = 0] = ts.split(/[:.]/).map(Number);

  return (((h * 60 + m) * 60 + s) * 1_000) + ms;
}

export function diff(start: string, end: string): number {
  const startMs = parseTimestamp(start);
  const endMs = parseTimestamp(end);
  return endMs - startMs;        // duration in milliseconds
}