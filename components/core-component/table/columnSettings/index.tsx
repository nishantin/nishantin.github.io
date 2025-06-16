"use client"
import { TableOutlined, SettingOutlined } from '@ant-design/icons';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { TableProps, ColumnsType } from 'antd/es/table';
import { useMemo, useState, Fragment, useEffect } from 'react';
//import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { Col, Row, Space, Button, Divider, Popover, Checkbox } from 'antd';
import { validateColumnSettings } from '../validator';

export interface PropertyFilterProps {
    columns: ColumnsType<any>;
    onChange: (columns: ColumnsType<any>) => void;
    defaultVisibleColumns?:React.Key[];
}

const PropertyFilter = (props: PropertyFilterProps) => {
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false);
    //const [value, setValue] = useState<CheckboxValueType[]>([]);
    const [value, setValue] = useState<any[]>([]);

    const options = useMemo(() => {
        return (props.columns as any[]).map((column) => {
            return {
                value: column.key,
                label: column?.title,
            };
        });
    }, [props.columns]);
    
    useEffect(() => {
        const columns = (props.columns as any[]).filter((column) => {
            return value.includes(column.key);
        });

        props.onChange(columns);
    }, [value]);

    useEffect(() => {
        setChecked(true);
        setValue(options.map(({ value }) => value));
    }, []);

    const onChange = (event: CheckboxChangeEvent) => {
        const isValidate = validateColumnSettings(event.target.checked);
        if(isValidate){
          setIndeterminate(false);
          setChecked(event.target.checked);
          setValue(event.target.checked ? options.map(({ value }) => value) : []);
        }
    };

    // const onSelect = (selected: CheckboxValueType[]) => {
    //     const isValidate = validateColumnSettings(selected.length === 0 ? false : true);
    //     if (isValidate) {
    //         setValue(selected);
    //         setChecked(selected.length === options.length);
    //         setIndeterminate(!!selected.length && selected.length < options.length);
    //     }
    // };
    const onSelect = (selected: any[]) => {
        const isValidate = validateColumnSettings(selected.length === 0 ? false : true);
        if (isValidate) {
            setValue(selected);
            setChecked(selected.length === options.length);
            setIndeterminate(!!selected.length && selected.length < options.length);
        }
    };

    useEffect(() => {
    const defaultSelected = props.defaultVisibleColumns ?? options.map(({ value }) => value);
    setChecked(defaultSelected.length === options.length);
    setIndeterminate(!!defaultSelected.length && defaultSelected.length < options.length);
    setValue(defaultSelected);
}, [options, props.defaultVisibleColumns]);

    const content = (
        <Fragment>
            <Checkbox indeterminate={indeterminate} onChange={onChange} checked={checked}>
                ALL
            </Checkbox>
            <Divider />
            <Checkbox.Group value={value} onChange={onSelect}>
                <Space direction="vertical">
                    {options.map((option, index) => {
                        return (
                            <Checkbox key={`${option.value}#${index}`} value={option.value}>
                                {option.label}
                            </Checkbox>
                        );
                    })}
                </Space>
            </Checkbox.Group>
        </Fragment>
    );

    return (
        <Popover content={content} trigger="click" placement="bottomRight">
            {/* <Button type="primary" icon={<TableOutlined />}>
                COLUMNS
            </Button> */}
             <Button icon={<SettingOutlined />} type="text" />
        </Popover>
    );
};
interface ResourceProps extends TableProps<any> {
    defaultVisibleColumns?: React.Key[]; // Add this line
    newColumnSelection:any;
}

const ColumnSettings = ({ defaultVisibleColumns, ...props }: ResourceProps) => {
    const [columns, setColumns] = useState(props?.columns || []);
    const onColumnSelection = (columns:any) =>{
          setColumns(columns);
          props.newColumnSelection(columns);
    }

    return (
        // <Space size="large" direction="vertical" style={{ width: '100%' }}>
        //     <Row align="middle" justify="end">
        //         <Col>
                    <PropertyFilter
                        columns={props?.columns || []}
                        defaultVisibleColumns={defaultVisibleColumns}
                        onChange={(columns) => {
                            onColumnSelection(columns);
                        }}
                    />
        //         </Col>
        //     </Row>
        // </Space>
    );
};

export default ColumnSettings;