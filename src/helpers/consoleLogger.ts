import { DEV_MODE } from '@/constants/config'
import { ELog } from '@/definitions/logger'

/**
 * Console logs a nice looking badge with whatever you want to return
 * @category ConsoleLoggerUtil
 */
class ConsoleLogger {
  canLog = () => {
    return DEV_MODE
  }

  /**
   * Gets the style of the badge with the specified colors
   * @param {string} type - type of the log layer
   */
  getBadgeStyle = (type: string) => {
    const toColor = (type: string) => {
      let color = '#FFFFFF' // white
      let bgColor = ''

      switch (type) {
        case ELog.CAMERA: // Data layer
          bgColor = '#ed8c15' // orange
          break
        case ELog.SCENE: // UI Logic
          bgColor = '#239823' // green
          break
        case ELog.CONTROL:
          bgColor = '#ff0aad' // pick
          break
        case ELog.OBJECT3D:
          bgColor = '#5bdcaf'
          break
      }

      color = bgColor ? `color: ${color}; ` : ''

      return `${color}background: ${bgColor};`
    }
    const colors = toColor(type)
    return `font-weight: bold; padding: 0 5px; ${colors} border-radius: 10px; `
  }

  /**
   * A simple log instance with minimal details to reduce noise on desired log instance.
   * ideally Use simple logs on Controllers, then FullAction log on Business Logic
   */
  log(type: ELog, message: string, data?: any) {
    if (this.canLog()) {
      console.log(
        `%c${type}%c ${message}`,
        `font-weight: bold; padding: 0 5px; ${this.getBadgeStyle(type)} border-radius: 10px; `,
        'font-weight: bold;',
        data ?? ''
      )
    }
  }
}

// Singleton
export const consoleLogger = new ConsoleLogger()
