/*
const globalSettings = { language: 'en-US' };

const userSettings = { timezone: 'Berlin/Germany' };

const { language, timezone } = { ...globalSettings, ...userSettings };

console.log(language);

console.log(timezone);
*/

const globalSetting = { language: 'en-US' };
const userSetting = { timezone: 'Berlin/German' };
const { language, timezone } = { ... globalSetting, ...userSetting };

console.log(language);
console.log(timezone);