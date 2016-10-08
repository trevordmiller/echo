import Raven from 'raven-js'

export default () => {
  Raven
    .config('https://bc98438d44bf4683916400feb2e05693@sentry.io/104379')
    .install()
}