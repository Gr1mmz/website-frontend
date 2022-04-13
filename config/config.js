const production = process.env.NODE_ENV === "production";

export const url = production
  ? "https://www.yoursite.com"
  : "https://localhost:1337/api/";

export const getPostBaseUrl = "https://api.telegra.ph/getPage/";

export const botToken = "5226295842:AAFHD65KzujA9MTSPaakIf46tSO11DQcIKk";
export const getUpdatesFromBot = "https://api.telegram.org/bot5226295842:AAFHD65KzujA9MTSPaakIf46tSO11DQcIKk/getUpdates";
export const postsUrls = [
  `${getPostBaseUrl}Obo-mne-Kratkaya-predystoriya-i-zachem-vse-ehto-04-12?return_content=true`,
  `${getPostBaseUrl}Razvertyvanie-Strapi-CMS-na-herokucom-04-13?return_content=true`,
]
