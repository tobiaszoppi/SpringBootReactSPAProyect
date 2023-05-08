import i18n from 'i18next'

import { StringsComuns } from './languages'

i18n
    .init({
        debug: false,
        defaultNS: ['components'],
        fallbackLng: 'es',
        ns: ['components'],
        resources: StringsComuns
    })

export { i18n }
