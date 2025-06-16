
import { Table } from "@/components/ui";
export const TableDoc = {
  name: "Table",
  //description: "Tables display data in rows and columns.To display a collection of structured data.To sort, search, paginate, filter data.",
  description: "Tables display data in rows and columns, sort, search & filter data.",
  
  category: "General",
  preview: (
    <div className="flex gap-3">
      {<Table
        columns={[
            { dataIndex: "name", key: "name", title: "Name" },
            { dataIndex: "age", key: "age", title: "Age" },
            { dataIndex: "address", key: "address", title: "Address" },
        ]}
        dataSource={[
            { address: "10 Downing Street", age: 32, key: "1", name: "Mike" }
        ]}
    />}
    </div>
  ),
  examples: [    
    {
      title: "Default Header",
      description: `Use the "columns" prop to specify table headers and the "dataSource" prop to render table data`,
      code: `
     <Table
        columns={[
          { dataIndex: "name", key: "name", title: "Name" },
          { dataIndex: "age", key: "age", title: "Age" },
          { dataIndex: "address", key: "address", title: "Address" },
        ]}
        dataSource={[
          { address: "10 Downing Street", age: 32, key: "1", name: "Mike" },
          { address: "10 Downing Street", age: 42, key: "2", name: "John" },
        ]}
        onChange={() => {}}
        onHeaderRow={() => {}}
        onRow={() => {}}
        scroll={{
          x: 700,
        }}
        style={{
          width: "100%",
        }}
    />;
 `
    },
    {
      title: "Secondary Header",
      description: `Set "headerType" to "secondary" to change the fill of the table header to blue`,
      code: `
     <Table
        columns={[
          { dataIndex: "name", key: "name", title: "Name" },
          { dataIndex: "age", key: "age", title: "Age" },
          { dataIndex: "address", key: "address", title: "Address" },
        ]}
        dataSource={[
          { address: "10 Downing Street", age: 32, key: "1", name: "Mike" },
          { address: "10 Downing Street", age: 42, key: "2", name: "John" },
        ]}
        onChange={() => {}}
        onHeaderRow={() => {}}
        onRow={() => {}}
        scroll={{
          x: 700,
        }}
        headerType="secondary"  
        style={{
          width: "100%",
        }}
    />;
 `
    },
    {
      title: "Secondary Fill",
      description: `Set "fillType" to "secondary" to change the fill of the table data`,
      code: `
     <Table
        columns={[
          { dataIndex: "name", key: "name", title: "Name" },
          { dataIndex: "age", key: "age", title: "Age" },
          { dataIndex: "address", key: "address", title: "Address" },
        ]}
        dataSource={[
          { address: "10 Downing Street", age: 32, key: "1", name: "Mike" },
          { address: "10 Downing Street", age: 42, key: "2", name: "John" },
        ]}
        onChange={() => {}}
        onHeaderRow={() => {}}
        onRow={() => {}}
        scroll={{
          x: 700,
        }}
        fillType="secondary"  
        style={{
          width: "100%",
        }}
    />;
 `
    },
    {
       title:"Column Settings",
       description:`Use the "settings" prop (set to true or false) to display the column settings of the table, and the "defaultVisibleColumns" prop to specify which columns should be visible by default`,
       code: `
      <Table
        columns={[
            { dataIndex: "name", key: "name", title: "Name" },
            { dataIndex: "age", key: "age", title: "Age" },
            { dataIndex: "address", key: "address", title: "Address" },
        ]}
        dataSource={[
            { address: "10 Downing Street", age: 32, key: "1", name: "Mike" },
            { address: "10 Downing Street", age: 42, key: "2", name: "John" },
        ]}
        scroll={{ y: 460 }}
        tableLayout="fixed"
        style={{ width: "100%" }}
        virtual
        settings={true}
        bordered={true}
        defaultVisibleColumns={["name", "age", "address"]}
    />
`
    },
    {
       title:"Table Wild Card Search",
       description:`Set "search" to true to enable wildcard search. Use "searchDirections" to specify the search position: "start", "center", or "end". Set "searchPlaceholder" to customize the placeholder text.`,
       code: `
      <Table
        columns={[
            { dataIndex: "name", key: "name", title: "Name" },
            { dataIndex: "age", key: "age", title: "Age" },
            { dataIndex: "address", key: "address", title: "Address" },
        ]}
        dataSource={[
            { address: "10 Downing Street", age: 32, key: "1", name: "Mike" },
            { address: "10 Downing Street", age: 42, key: "2", name: "John" },
        ]}
        scroll={{ y: 460 }}
        tableLayout="fixed"
        style={{ width: "100%" }}
        virtual
        bordered={true}
        search={true}
        searchPlaceholder={"Search"}
        searchDirections={"end"}
    />
`
    },  
    {
      title:"Table Sorting",
      description: "For table, you can sort data by the following types: 'string', 'number', 'date', 'number_with_string', or 'boolean'. The default type is 'string'.",
      code: `
       <Table
        columns={[
          {
            dataIndex: "name",
            key: "name",
            title: "Name",
            sortDirections: ["descend", "ascend"],
            sorter: (rowA: DynamicObject, rowB: DynamicObject, sortOrder: string) =>
              sortDataByType(rowA, rowB, "name", "string"),
          },
          {
            dataIndex: "age",
            key: "age",
            title: "Age",
            sortDirections: ["descend", "ascend"],
            sorter: (rowA: DynamicObject, rowB: DynamicObject, sortOrder: string) =>
              sortDataByType(rowA, rowB, "age", "number"),
          },
          { dataIndex: "address", key: "address", title: "Address" },
        ]}
        dataSource={[
          { address: "10 Downing Street", age: 32, key: "1", name: "Mike" },
          { address: "10 Downing Street", age: 42, key: "2", name: "John" },
        ]}
        scroll={{ y: 460 }}
        tableLayout="fixed"
        style={{ width: "100%" }}
        virtual
        bordered={true}
   />;`
    },
    {
      title: "Column Editing",
      description: "Load components such as text fields, checkboxes, and date pickers to allow users to modify cell values in the table",
      code: `() => {
  const [datasource, setDataSource] = React.useState([
    {
      age: 32,
      key: "1",
      name: "Mike",
      dob:"12-03-94",
      is_active:false
    },
    {
      age: 42,
      key: "2",
      name: "John",
      dob:"01-09-84",
      is_active:true
    },
  ]);
  const handleSave = (row: any) => {
    const newData: any = [...datasource];
    const index = newData.findIndex((item: any) => row?.key == item?.key);
    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...row,
      });
      setDataSource(newData);
    }
  };
  const handleCheckboxChange = (row: any) => {
		const newData:any = [...dataSource];
		const updateData = newData.map((item: any) => {
			if(row?.key == item?.key) {
				return {...item, is_active: item?.is_active === true ? true : false };
			} else {
				return item
			}
		});
		setDataSource(updateData);
	}

  return (
    <Table
      columns={[
        {
          dataIndex: "name",
          key: "name",
          title: "Name",
          render: (text: any, record: any) => {
            return record.name !== "MFC" ? (
              <EditableInputCell
                value={text}
                onChange={(newValue: string | number) => {
                  const row = { ...record };
                  row.name = newValue;
                  handleSave(row);
                }}
                isEditable={true}
                fontColor={"font-blue"}
                fieldName={"name"}
              />
            ) : (
              record.name
            );
          },
        },
        {
          dataIndex: "age",
          key: "age",
          title: "Age",
        },
        {
          dataIndex: "dob",
          key: "dob",
          title: "DOB",
          render: (text: any, record: any) => {
					return (
						<EditableCellDatePicker
							handleSave={handleSave}
							record={record}
							columnKey={'dob'}
						/>
					);
				}
       },       
       {
          dataIndex: "is_active",
          key: "is_active",
          title: "Active",
          render: (text: any, record: any) => {
					return (
						<EditableCheckboxCell
							isChecked={record.is_active === true ? true : false}
							isCheckboxDisabled={record.type === ''}
							handleCheckboxChange={(newValue: string | number) => {
								const row = { ...record };
								row.is_active = newValue;
								handleSave(row);
							}}
						/>
					);
				}
       },
      ]}
      dataSource={datasource}
      scroll={{
        y: 460,
      }}
      tableLayout="fixed"
      style={{
        width: "100%",
      }}
      virtual
      onChange={() => {}}
      onHeaderRow={() => {}}
      onRow={() => {}}
      pagination={false}
      searchDirections={"end"}
      bordered={true}
    />
  );
};
`
    },
    {
      title: "Table Column Filter",
      description: `To configure column filtering in the table, set the props "filters", "filterSearch", and "onFilter" as needed`,
      code: `() => {
  const [datasource, setDataSource] = React.useState([
            { address: "10 Downing Street", age: 32, key: "1", name: "Mike" },
            { address: "10 Downing Street", age: 42, key: "2", name: "John" },
        ]);
  const filtersName = Array.from(new Set(datasource.map(item => item.name)))
    .map(value => ({
        text: value,
        value: value,
    })); 

  return (
   <Table
    columns={[
        { dataIndex: "name", key: "name", title: "Name" ,  
        filters: filtersName, 
        filterSearch: true,
        onFilter: (value:any, record:any) => record.name.startsWith(value as string)},
        { dataIndex: "age", key: "age", title: "Age" },
        { dataIndex: "address", key: "address", title: "Address" },
    ]}
    dataSource={datasource}
    scroll={{ y: 460 }}
    tableLayout="fixed"
    style={{ width: "100%" }}
    virtual
    bordered={true}
/>
  );
}
`
    }
  ],
  props: [
     {
      name: "headerType",
      type: '"secondary" | "default"',
      default: '"default"',
      description: `Sets the header type "default" "secondary"`,
    },
    {
      name: "fillType",
      type: '"secondary" | "default"',
      default: '"default"',
      description: `Sets the fill type of the table body cells "default" "secondary"`,
    },
    {
      name: "settings",
      type: '"true" | "false"',
      default: '"false"',
      description: `If the setting is 'true', it is visible. If it is 'false', it is not visible`,
    },
    {
      name: "defaultVisibleColumns",
      type: '"columnName"',
      default: '',
      description: 'to specify which columns should be visible by default.',
    },
    {
      name: "search",
      type: '"true" | "false"',
      default: '"false"',
      description: 'Set "search" to true to make the search visible . If set to false, the search will not be shown.',
    },
    {
      name: "searchPlaceholder",
      type: 'string',
      default: '',
      description: 'Change the name of the search using the "searchPlaceholder" property',
    },
    {
      name: "searchDirections",
      type: '"start" | "center" | "end"',
      default: 'end',
      description: 'Change the position of the search using the searchDirections prop. Available options are: "start", "center", and "end".',
    },
    {
      name: "sortDataByType",
      type: `'string', 'number', 'date', 'number_with_string', or 'boolean'`,
      default: '',
      description: `sortDataByType is a sorting function that sorts data based on type: 'string', 'number', 'date', 'number_with_string', or 'boolean'.`
    },
    {
      name: "filterSearch",
      type: `boolean | function(input, record):boolean`,
      default: 'false',
      description: `Whether to be searchable for filter menu`
    },
    {
      name: "filters",
      type: `object[]`,
      default: '',
      description: `Filter menu config`
    },
    {
      name: "onFilter",
      type: `function(value, record) => boolean`,
      default: '',
      description: `Function that determines if the row is displayed when filtered`
    }
  ],
};
