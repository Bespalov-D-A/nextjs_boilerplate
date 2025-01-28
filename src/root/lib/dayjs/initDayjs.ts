import 'dayjs/locale/ru';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isoWeek from 'dayjs/plugin/isoWeek';
import timezone from 'dayjs/plugin/timezone';

export const initDayJS = () => {
  dayjs.extend(isoWeek).locale('ru');
  dayjs.extend(customParseFormat);
  dayjs.extend(timezone);
  dayjs.tz.setDefault('Europe/Moscow');
};
