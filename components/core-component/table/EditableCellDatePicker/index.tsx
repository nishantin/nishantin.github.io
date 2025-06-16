import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

type PickerMode = 'date' | 'month' | 'week' | 'year' | 'quarter';
interface EditableCellDatePickerProps {
	record: any;
	columnKey: string;
	handleSave: (newRecord: any, columnKey: any) => void;
	minDate?: Dayjs;
	maxDate?: Dayjs;
	picker?: PickerMode;
	disabled?:boolean;
}
const EditableCellDatePicker: React.FC<EditableCellDatePickerProps> = ({
	record,
	handleSave,
	columnKey,
	minDate=dayjs("1940-01-01"),
	maxDate=dayjs("2050-01-01"),
	picker,
	disabled=false
}) => {
	const formattedDate =
		record[columnKey] === null
			? dayjs().add(5, 'year')
			: dayjs(record[columnKey]);

	const isPickerMode = (value: any): value is PickerMode => {
		return ['date', 'month', 'week', 'year', 'quarter'].includes(value);
	};
	
	const pickerProp: PickerMode | undefined = isPickerMode(picker) ? picker : 'date';

	return (
		<DatePicker
		className={disabled === true ? 'sp-date-font-disabled' :'sp-date-picker'}
			 disabled={disabled} // todo
			// value={record[columnKey] ? dayjs(record[columnKey]) : null}
			minDate={minDate}
			maxDate={maxDate}
			variant="borderless"
			// defaultValue={formattedDate}
			value={formattedDate}
			format="DD/MM/YYYY"
			picker={pickerProp}
			onChange={(date) => {
				const newRecord = {
					...record,
					[columnKey]:dayjs(date).format('YYYY-MM-DD'),
					//[columnKey]: dateTimeZoneConversion(dayjs(date).format('YYYY-MM-DD')),
				};
				handleSave(newRecord, columnKey);
			}}
 
		/>
	);
};

export default EditableCellDatePicker;
