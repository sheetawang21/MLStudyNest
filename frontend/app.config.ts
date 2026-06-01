export default defineAppConfig({
    ui: {
        colors: {
            primary: 'blush',
            neutral: 'stone'
        },
        button: {
            slots: {
                base: 'rounded-xl font-semibold transition-transform duration-150'
            }
        },
        card: {
            slots: {
                root: 'rounded-3xl overflow-hidden',
                header: 'border-b border-[var(--mlsn-line)]',
                footer: 'border-t border-[var(--mlsn-line)]'
            }
        },
        input: {
            slots: {
                root: 'rounded-xl'
            }
        },
        textarea: {
            slots: {
                root: 'rounded-xl'
            }
        }
    }
})
