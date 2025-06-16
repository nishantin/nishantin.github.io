

import CommonDropdownContainer from './CommonDropdownContainer';
const DropDownWrapper: React.FC<any> = ({
	name,
	key,
	dropDownData,
	type,
	style
}) => {
	const allDropDownData = [];

	// Logic to conditionally add dropdown data based on props

	/**
	 * All dropdown data object.
	 * @param {string} name - Dropdown display name.
	 * @param {string} key - Unique key for the dropdown.
	 * @param {Array<any>} data - Dropdown data items.
	 * @param {string} type - Dropdown type (e.g., 'multiple').
	 * @param {Object} style - Dropdown styles.
	 * @param {boolean} verticalGrid - Flag for vertical grid alignment.
	 */

		allDropDownData.push({
			name: name,
			key: key,
			data: dropDownData,
			type: type,
			style: style,
			verticalGrid: false,
		});

	

	

	// Reset all dropdowns function
	const handleResetAll = () => {
		// Logic to reset all dropdowns can be added here
	};

	/**
	 * Callback function to handle dropdown value change.
	 * @param {number} index - Index of the dropdown whose value changed.
	 * @param {string | string[]} value - Selected value(s) of the dropdown.
	 */
	const handleDropdownValueChange = (
		index: number,
		value: string | string[]
	) => {
		// Handle the dropdown value change here
	};

	return (
		<>
			{/* Render CommonDropdownContainer with allDropDownData */}
			<CommonDropdownContainer
				dropdowns={allDropDownData}
				resetAll={handleResetAll}
				onDropdownValueChange={handleDropdownValueChange}
				showResetAllButton={true} // Always show the reset all button
				showRangeDatePicker={false}
			/>
		</>
	);
};

export default DropDownWrapper;
