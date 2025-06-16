// import React, { useState } from 'react';
// import { Checkbox } from 'antd';
// //import './index.scss';

// interface EditableCheckboxCellProps {
// 	value: boolean;
// 	onChange: (value: boolean) => void;
// 	isEditable: boolean;
// 	disabled?: boolean;
// 	fieldName?: string;
// }

// const EditableCheckboxCell: React.FC<EditableCheckboxCellProps> = ({
// 	value,
// 	onChange,
// 	isEditable,
// 	disabled = false,
// 	fieldName = ''
// }) => {
// 	const [editing, setEditing] = useState(false);
// 	const [tempValue, setTempValue] = useState(value);

// 	const toggleEdit = () => {
// 		if (!disabled && isEditable) {
// 			setEditing(!editing);
// 			setTempValue(value);
// 		}
// 	};

// 	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
// 		const newValue = e.target.checked;
// 		setTempValue(newValue);
// 		onChange(newValue);
// 		setEditing(false); // Exit editing after change
// 	};

// 	return (
// 		<div className="sp-editable-cell">
// 			{isEditable ? (
// 				<Checkbox
// 					checked={tempValue}
// 					onChange={handleCheckboxChange}
// 					disabled={disabled}
// 					//autoFocus
// 				/>
// 			) : (
// 				<div onClick={toggleEdit} className={disabled ? 'font-black' : ''}>
// 					<Checkbox checked={value} disabled />
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default EditableCheckboxCell;


import {Checkbox, Space } from 'antd';


interface ActionProps {
	isChecked?: boolean;
	isCheckboxDisabled?: boolean;
	showCheckbox?: boolean;
	handleCheckboxChange?: (data: any) => void;
}
const EditableCheckboxCell: React.FC<ActionProps> = ({
	isChecked,
	isCheckboxDisabled = false,
	showCheckbox = true,
	handleCheckboxChange,
}) => {
	// Handle checkbox change
	const checkboxChange = (val:boolean) => {
		if(handleCheckboxChange) { handleCheckboxChange(val); }
	};

	
		return (
			<Space size="middle">
				{(showCheckbox) ?
					<Checkbox
						disabled={isCheckboxDisabled}
						checked={isChecked}
						onChange={(e) => checkboxChange(e.target.checked)}
					/> : ''}
			</Space>
		);
	

};

export default EditableCheckboxCell;
