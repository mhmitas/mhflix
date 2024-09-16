import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num) {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + 'B'; // Billions
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + 'M'; // Millions
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + 'K'; // Thousands
  } else {
    return num.toString(); // Less than 1,000
  }
}

export function generateUsername(name) {
  let username = name.toLowerCase().replace(/[^a-zA-Z]/g, '').trim();
  const randomNumber = Date.now()
  username += randomNumber;

  return username;
}