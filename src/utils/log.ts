export function warn(message: string) {
  console.warn(`来画平台 warn]:${message}`);
}

export function error(message: string) {
  throw new Error(`[来画平台 error]:${message}`);
}
