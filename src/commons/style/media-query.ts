import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH, PC_MAX_WIDTH } from '../const';

export const MediaQuery = {
  Mobile: `@media only screen and (max-width: ${MOBILE_MAX_WIDTH}px)`,
  Tablet: `@media only screen and (max-width: ${TABLET_MAX_WIDTH}px)`,
  PC: `@media only screen and (max-width: ${PC_MAX_WIDTH}px)`,
};
