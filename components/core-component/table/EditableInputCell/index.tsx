import React, { useState } from 'react';
import { Input } from 'antd';
import './index.scss';

interface EditableInputCellProps {
	value: string;
	onChange: (value: string) => void;
	isEditable: boolean;
	fontColor?: string;
	disabled?: boolean;
	fieldName?: string;
}

const EditableInputCell: React.FC<EditableInputCellProps> = ({
	value,
	onChange,
	isEditable,
	fontColor,
	disabled=false,
	fieldName = ''
}) => {
	const [editing, setEditing] = useState(false);
	const [tempValue, setTempValue] = useState(value);

	const toggleEdit = () => {
		//return null; // todo
		if (!disabled) {
			setEditing(!editing);
		}
		// Reset tempValue to current value when switching modes
		setTempValue(value);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTempValue(e.target.value);
	};

	const handleInputBlur = () => {
		setEditing(false);
		// Save changes on blur and trim whitespace
		if (typeof tempValue === 'string') onChange(tempValue.trim());
	};

	const handleInputPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleInputBlur();
		}
	};
	return (
		<div className="sp-editable-cell">
			{editing && isEditable ? (
				<Input
					disabled={disabled} // todo
					value={tempValue}
					onChange={handleInputChange}
					onBlur={handleInputBlur}
					onPressEnter={handleInputPressEnter}
					autoFocus
					size="small"
				/>
			) : (
				<div onClick={toggleEdit} className={disabled ? 'font-black' : fontColor}>
					{Number(value) === 0 ? <div className='sp-empty-cell'></div> : value}
				</div> 
			)}
		</div>
	);
};

export default EditableInputCell;
