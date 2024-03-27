import { format as formatDateFn} from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDate(date: Date, format: string = 'DD/MM/YYYY') {
    return formatDateFn(date, format, { locale: ptBR });
}