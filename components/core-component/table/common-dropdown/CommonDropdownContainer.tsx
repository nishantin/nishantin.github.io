"use client"
import React, { useState } from 'react';
import { Select, Button, DatePicker } from 'antd';
import './../common-dropdown/index.scss';
import dayjs, { Dayjs } from 'dayjs';
export type DropdownItem = {
	value: string;
	label: string;
};
export interface CommonDropdownProps {
	name: string;
	key: string;
	data: DropdownItem[]; // Data for the dropdown
	type: string;
	style?: React.CSSProperties;
	onReset?: () => void; // Function to reset the dropdown
	resetDropdown?: () => void; // Function to reset the dropdown
	verticalGrid?: boolean;
	// Props for handling selected value and value change
	selectedValue?: string | string[];
	onValueChange?: (value: string | string[]) => void;
}
// import { RangePicker } from '@gitlab-pddsc/cct-ui-component-library';
const { RangePicker } = DatePicker;

const { Option } = Select;



/**
 * CommonDropdown component
 * @param {CommonDropdownProps} props - Props for the CommonDropdown component
 */
//const defaultValue = [minMonth, maxMonth];
//const defaultValue: [Dayjs | null, Dayjs | null] = [minMonth, maxMonth];
const CommonDropdown: React.FC<CommonDropdownProps> = ({
	name,
	key,
	data,
	type,
	style,
	onReset,
	resetDropdown,
	verticalGrid,
	selectedValue,
	onValueChange,
}) => {
	// Function to handle dropdown value change
	const handleChange = (value: string | string[]) => {
		if (onValueChange) {
			onValueChange(value);
		}
	};

	// Function to handle dropdown reset
	const handleReset = () => {
		if (onReset) {
			onReset();
		}
		if (resetDropdown) {
			resetDropdown();
		}
	};

	return (
		<div className="sp-dropdown-wrapper">
			<span className="dropdown-label" ><b>{name} </b></span>
			{/* Select dropdown component */} 
			<Select
				key={key}
				mode={type === 'multiple' ? 'multiple' : undefined}
				style={style}
				onChange={handleChange}
				placeholder={`Select`}
				value={selectedValue} // Set the selected value
				className={verticalGrid ? 'vertical-grid' : 'cp-select'}
				maxTagCount={type === 'multiple' ? 'responsive' : undefined}
			>
				{/* Render default Option if type is single */}
				{type === 'single' ? <Option value="Select">Select</Option> : ''}
				{/* Render Options for each item in the dropdown data */}
				{data?.map((item:any,inx:any) => (
					<Option key={inx} value={item.value} label={item.label}>
						{item.label}
					</Option>
				))}
			</Select>
			{/* Render Reset button if onReset prop is provided */}
			{onReset && (
				<Button type="link" onClick={handleReset}>
					Reset
				</Button>
			)}
		</div>
	);
};

/**
 * CommonDropdownContainer component
 * @param {CommonDropdownContainerProps} props - Props for the CommonDropdownContainer component
 */
const CommonDropdownContainer: React.FC<any> = ({
	dropdowns,
	resetAll,
	onDropdownValueChange,
	showResetAllButton,
	showRangeDatePicker,
	onDateRangeChange,
	dropdownSelectedValue,
	minDate,
	minMonthYear,
	maxMonthYear


}) => {
	// State to track selected values for each dropdown
	const dropDownVal = (!dropdownSelectedValue) ? {} :dropdownSelectedValue;

	const [selectedValues, setSelectedValues] = useState<
		Record<string, string | string[]>
	>(dropDownVal);
	// State to manage the selected date range
	// Get the current month and year

	let currentMonth:any, minMonth:any, maxMonth:any;
    
	if (showRangeDatePicker && minMonthYear!='' && maxMonthYear !='') {
		minMonth = dayjs(minMonthYear).startOf('month');
		maxMonth =  dayjs(maxMonthYear).startOf('month');
		maxMonth = maxMonth.add(7, 'year');
	} else if(showRangeDatePicker){
		currentMonth = dayjs(minDate).startOf('month');
		minMonth = currentMonth;
		maxMonth = currentMonth.add(7, 'year');
	}
	/*const currentMonth = dayjs(minDate).startOf('month');
	const minMonth = currentMonth;
	const maxMonth = currentMonth.add(5, 'year');
	if(showRangeDatePicker){
        console.log("i am here","minMonthYear",minMonthYear, "maxMonthYear",maxMonthYear);
	}
		*/
	
	const isMonthDisabled = (current: Dayjs) => {
		// Check if the current date is within the range of minMonth and maxMonth
		return current && (current.isBefore(minMonth, 'month') || current.isAfter(maxMonth, 'month'));
	};
	const [selectedRange, setSelectedRange] = useState<[Dayjs, Dayjs] | null>([minMonth, maxMonth]);

	// Function to handle date change
	const onDateChange = (dates: [Dayjs | null, Dayjs | null] | null) => {
		if (dates && dates[0] && dates[1]) {
			setSelectedRange(dates as [Dayjs, Dayjs]);
			if (onDateRangeChange) {
				
				onDateRangeChange(dates as [Dayjs, Dayjs]);
			}
		} else {
			setSelectedRange(null);
		}
	};

	// Function to handle reset all dropdowns
	const handleResetAll = () => {
		setSelectedValues({}); // Reset all selected values
		setSelectedRange([minMonth, maxMonth]);

		if (resetAll) {
			resetAll();
		}
	};

	// Function to handle reset a specific dropdown
	const handleResetDropdown = (index: number, name:string) => {
		setSelectedValues((prevSelectedValues) => {
			// Reset the selected value for the specified dropdown
			const updatedSelectedValues = { ...prevSelectedValues };
			updatedSelectedValues[name] =
				dropdowns[name].type === 'multiple' ? [] : '';
			return updatedSelectedValues;
		});
	};

	// Function to handle dropdown value change
	const handleDropdownValueChange = (
		index: number,
		name: string,
		value: string | string[]
	) => {
		setSelectedValues((prevSelectedValues) => ({
			...prevSelectedValues,
			[name]: value,
		}));
		// Call the callback function to pass the updated value to the parent
		if (onDropdownValueChange) {
			onDropdownValueChange(index, name, value);
		}

	};

	return (
		<div>
			{/* Render each CommonDropdown component */}
			{dropdowns?.map((dropdownProps: any, index: any) => (
				<CommonDropdown
					{...dropdownProps}
					key={index.toString()}
					selectedValue={selectedValues[dropdownProps.key]}
					onValueChange={(value) =>
						handleDropdownValueChange(index, dropdownProps.key, value)
					}
					resetDropdown={() => handleResetDropdown(index, dropdownProps.key)}
					minDate={minDate}
				/>
			))}
			{showRangeDatePicker ? <RangePicker
				value={selectedRange}
				onChange={onDateChange} picker="month" disabledDate={isMonthDisabled}
			/> : ''}
			{/* Render Reset All button based on showResetAllButton prop */}
			{showResetAllButton && resetAll && (
				<Button type="link" onClick={handleResetAll} className="reset-all sp-tab-reset-all">
					RESET ALL
				</Button>
			)}
		</div>
	);
};

export default CommonDropdownContainer;
