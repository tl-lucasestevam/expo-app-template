import 'styled-components'
import type { ITheme } from '~/interfaces/theme'

declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {}
}
