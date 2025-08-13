export function logEvent(event: string, data?: Record<string, unknown>) {
  // Fallback telemetry implementation using console.log
  // Replace with project-specific analytics if available
  if (data) {
    console.log(`[telemetry] ${event}`, data);
  } else {
    console.log(`[telemetry] ${event}`);
  }
}
