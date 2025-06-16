import { TableProps, AnyObject } from './types';
import React, { memo, useContext } from 'react';
import { Table as AntTable, TableColumnType, ConfigProvider, Space, Row, Col } from 'antd';
import ColumnSettings from './columnSettings';
import { Search } from '../input';
import useDebouncedValue from '../../../hooks/useDebouncedValue';
const { ColumnGroup, Column } = AntTable;
import colors from 'theme/colors';
import DropDownWrapper from './common-dropdown/DropdownWrapper';


const TableComponent = <RecordType extends AnyObject>({
  className,
  bordered = true,
  pagination = false,
  size = 'medium',
  headerType = 'default',
  fillType = 'default',
  scroll = { x: 'max-content' },
  // forwardRef,
  ...rest
}: TableProps<RecordType>) => {

  const [columnsVisible, setColumnsVisible] = React.useState(rest?.columns || []);
  const [data, setData] = React.useState(rest?.dataSource || []);
  const newColumnSelection = (newCol: any) => {
    setColumnsVisible(newCol);
  }

  const {
    tableHeaderBg,
    tableHeaderBgSecondary,
    tableCellBg,
    tableCellBgSecondary,
  } = colors;

  const headerBg =
    headerType === 'secondary' ? tableHeaderBgSecondary : tableHeaderBg;
  const colorBgContainer =
    fillType === 'secondary' ? tableCellBgSecondary : tableCellBg;


  const theme = {
    components: {
      Table: {
        colorBgContainer,
        headerBg,
      },
    },
  };


  //console.log("final data",data);
  const [searchTerm, setSearchTerm] = React.useState('');
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 300); // debounce only value
  React.useEffect(() => {
    const term = debouncedSearchTerm.toString().toLowerCase();
    const result = data?.filter((row) =>
      Object.values(row).some((field) => {
        if (field == null) return false;
        return field.toString().toLowerCase().includes(term);
      })
    );
    if (searchTerm === '') {
      const newData: any = rest?.dataSource;
      setData(newData);
    } else {
      setData(result);
    }
  }, [debouncedSearchTerm]);

  React.useEffect(() => {
    setData(rest?.dataSource || []);
    console.count("render")
  }, [rest?.dataSource]);




  return (
    <>
      {/* <Space size="small" direction="vertical" style={{ width: '100%', marginBottom: 10 }}>
        <Row align="middle" justify="center">
          <Col>
            {rest?.search &&
              <Search
                placeholder={'Search'}
                onChange={(e) => setSearchTerm(e?.target?.value)}
                className="max-height"
              />}
          </Col>
        </Row>  
        <Row align="middle" justify="end">
          <Col>
            {rest?.settings && <ColumnSettings {...rest} newColumnSelection={newColumnSelection} />}
          </Col>
          </Row>
      </Space> */}
      <Row align="middle" justify="space-between" style={{ width: '100%', paddingBottom: 10 }}>
        <Col style={{ display: 'flex', justifyContent: `${rest?.searchDirections || 'end'}`, flex: 1 }}>
          {rest?.search && (
              <Search
                placeholder={rest?.searchPlaceholder ? rest?.searchPlaceholder : 'Search'}
                onChange={(e) => setSearchTerm(e?.target?.value)}
                className="max-height"
              />
          )}
        </Col>
        {rest?.dropDownFilter && (
          <Col>
            <DropDownWrapper
              name={rest?.dropDownProps?.name}
              key={rest?.dropDownProps?.key}
              dropDownData={rest?.dropDownProps?.dropDownData}
              type={rest?.dropDownProps?.type}
              style={rest?.dropDownProps?.style}
            />
          </Col>)}
        <Col>
          {rest?.settings && <ColumnSettings {...rest} newColumnSelection={newColumnSelection} />}
        </Col>
      </Row>

      <ConfigProvider theme={theme}>
        <AntTable
          //className={''}
          bordered={bordered}
          pagination={pagination}
          // size={tshirtSize}
          scroll={scroll}
          // ref={forwardRef as React.Ref<HTMLDivElement>}
          {...rest}
          columns={columnsVisible}
          dataSource={data}
        />
      </ConfigProvider>
    </>
  );
}

// Dot Notation Export
TableComponent.ColumnGroup = ColumnGroup;
TableComponent.Column = Column;

/**
 * Tables display data in rows and columns, allowing users to scan and compare information. They can function as a read-only table, or have actions tied to each row item. They also support additional optional actions such as sorting and can be paired with other components such as pagination.

 * ## Usage Guidelines:
 * - Only display essential columns to avoid clutter
 * - Sort the most important column in ascending order by default
 * - Indicate sort order and allow toggling sort direction
 * - Provide search functionality for tables with large amounts of data
 * - Allow horizontal scrolling if the table width exceeds the viewport
 
 * ## Known Pitfalls:
 * The row functions and change events methods inherited from the Ant Design library are affected by type issues. These methods will trigger linter errors:
 * - `onChange`
 * - `onCell`
 * - `rowSelection.onChange`
 * - `rowSelection.getCheckboxProps`table

 * When type errors occur with the above methods, the `columns` prop may also render errors.
 * <span style="color: #e01029; font-size: 14px;">_*Please update this list if you encounter additional methods with errors_</span>
 */

export const Table = TableComponent;
