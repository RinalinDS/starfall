import 'styled-components';
import { ThemeType } from './src/hooks/usePallete';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
