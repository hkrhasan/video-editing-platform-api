"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTimestamp = parseTimestamp;
exports.diff = diff;
function parseTimestamp(ts) {
    // e.g. "00:00:05.000" → [ "00", "00", "05", "000" ]
    const [h = 0, m = 0, s = 0, ms = 0] = ts.split(/[:.]/).map(Number);
    return (((h * 60 + m) * 60 + s) * 1000) + ms;
}
function diff(start, end) {
    const startMs = parseTimestamp(start);
    const endMs = parseTimestamp(end);
    return endMs - startMs; // duration in milliseconds
}
