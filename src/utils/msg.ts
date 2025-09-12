export function generateWhatsappMessage(tel: string, message: string) {
  const url = "https://api.whatsapp.com/send";
  return `${url}?phone=${tel}&text=${encodeURIComponent(message)}`;
}
