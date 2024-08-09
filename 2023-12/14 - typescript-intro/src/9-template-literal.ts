type World = 'world'

type Greeting = `hello ${World}`

type EmailLocaleIDs = 'welcome_email' | 'email_heading'
type FooterLocaleIDs = 'footer_title' | 'footer_sendoff'

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`
