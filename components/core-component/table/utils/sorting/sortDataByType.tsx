const sortDataByType:any = (
	a: any,
	b: any,
	key: string,
	type:
		| 'string'
		| 'number'
		| 'date'
		| 'number_with_string'
		| 'boolean' = 'string',
	order: 'asc' | 'desc' = 'asc'
) => {
	try {
		const isFalsy = (value: any) =>
			value === null || value === undefined || value === '';

		const compareValues = (aValue: any, bValue: any) => {
			if (isFalsy(aValue) && isFalsy(bValue)) return 0;
			if (isFalsy(aValue)) return order === 'asc' ? -1 : 1;
			if (isFalsy(bValue)) return order === 'asc' ? 1 : -1;

			// Boolean sorting
			if (type === 'boolean') {
				// normalize to actual booleans
				const av = Boolean(aValue);
				const bv = Boolean(bValue);
				if (av === bv) return 0;
				// in ascending: false < true
				const result = av ? 1 : -1;
				return order === 'asc' ? result : -result;
			}

			if (key === 'risk_value') {
				// Custom logic for risk_value alphanumeric sorting
				const parseRiskValue = (value: string) => {
					// Regular expression to match a number followed by optional non-numeric text
					const regex = /^(\d+)([-\s]?\d*\s?)([A-Za-z\s]*)$/;
					const match = value.match(regex);

					if (match) {
						const numericPart = parseFloat(match[1]);
						const secondNumericPart = match[2] ? parseFloat(match[2].trim()) : 0;
						const stringPart = match[3].trim();

						return {
							numeric: numericPart,
							secondNumeric: secondNumericPart,
							string: stringPart,
						};
					}

					// Default fallback if no valid match
					return {
						numeric: 0,
						secondNumeric: 0,
						string: value,
					};
				};

				const aParsed = parseRiskValue(aValue);
				const bParsed = parseRiskValue(bValue);

				// First compare the main numeric parts
				if (aParsed.numeric !== bParsed.numeric) {
					return aParsed.numeric - bParsed.numeric;
				}

				// Then compare the second numeric part (e.g., "16" in "6-16 Weeks")
				if (aParsed.secondNumeric !== bParsed.secondNumeric) {
					return aParsed.secondNumeric - bParsed.secondNumeric;
				}

				// If numeric parts are the same, compare string parts lexicographically
				return aParsed.string.localeCompare(bParsed.string);
			}

			if (type === 'date') {
				// Date sorting logic
				const aDate = new Date(aValue);
				const bDate = new Date(bValue);

				// Handle invalid date values by converting them to NaN, which will result in invalid comparisons
				if (isNaN(aDate.getTime()) || isNaN(bDate.getTime())) {
					return 0; // Treat invalid dates as equal (you can modify this based on your requirements)
				}

				return aDate.getTime() - bDate.getTime();
			}

			// Default sorting for other columns (string or number)
			if (type === 'number') {
				return aValue - bValue;
			}

			if (type === 'number_with_string') {
				return (
					aValue.split(' ')[0].replace(/,/g, '') -
					bValue.split(' ')[0].replace(/,/g, '')
				); // Compare only the numeric part before any space
			}

			// Default string comparison
			return aValue?.localeCompare(bValue);
		};

		return compareValues(a[key], b[key]);
	} catch (error) {
		console.error(error);
	}
};

export default sortDataByType;
