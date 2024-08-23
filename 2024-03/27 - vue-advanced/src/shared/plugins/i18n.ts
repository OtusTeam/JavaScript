import type { App } from 'vue'

export const i18n = {
  install (app: App, options: Record<string, string>) {
    app.config.globalProperties.$translate = (key: string): string => {
      return options[key] ?? key;
    }
  }
}