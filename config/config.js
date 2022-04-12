const production = process.env.NODE_ENV === "production";

export const url = production
  ? "https://www.yoursite.com"
  : "https://localhost:1337/api/";

export const botToken = "5226295842:AAFHD65KzujA9MTSPaakIf46tSO11DQcIKk";
export const getUpdatesFromBot = "https://api.telegram.org/bot5226295842:AAFHD65KzujA9MTSPaakIf46tSO11DQcIKk/getUpdates";
export const postsUrls = [
  {
    id: 1,
    url: "https://api.telegra.ph/getPage/Obo-mne-Kratkaya-predystoriya-i-zachem-vse-ehto-04-12?return_content=true",
  }
]
