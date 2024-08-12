export const i18n = {
    defaultLocale: '',
    locales: ['en', 'de', 'cs'],
} as const;

export type Locale = typeof i18n['locales'][number];