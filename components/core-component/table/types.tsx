import { TableColumnType, ConfigProvider } from 'antd';

import {
  TableRowSelection,
  TablePaginationConfig,
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
  ColumnsType,
  TableLocale,
} from 'antd/es/table/interface';

import { TableProps as AntTableProps } from 'rc-table/lib/Table';
import {
  TableComponents,
  ExpandableConfig,
  PanelRender,
  GetComponentProps,
} from 'rc-table/lib/interface';

export type { ColumnsType } from 'antd/es/table/interface';

type dropDownPropsType = {
    name?:string;
    key?:string;
    dropDownData?:any;
    type?:string;
    style?:any;
}
export type AnyObject = Record<string, any>;
type SortOrder = 'descend' | 'ascend' | null;
export type TableProps<AnyObject> = {
  /** Enables all table borders */
  bordered?: boolean;
  /** Used to override default table elements */
  components?: TableComponents<AnyObject>;
  /** Object array to assign the columns and table header */
  columns?: ColumnsType<AnyObject>;
  /** Used to configure expandable content */
  expandable?: ExpandableConfig<AnyObject>;
  /** Renders a custom footer component */
  footer?: PanelRender<AnyObject>;
  /** Renders container dropdowns in table */
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  // TODO: need to add `Spin Props` when we add spinner
  /** Indicates a loading state. To be paired with AJAX calls */
  loading?: boolean;
  /** Set the i18n text including filter, sort, empty text, etc */
  locale?: TableLocale;
  // TODO: Needs to add AnyObject with Pagination Type when we get there
  /** Configures table pagination */
  pagination?: false | TablePaginationConfig | undefined;
  /** Accepts an object array to render table contents */
  dataSource?: AntTableProps<AnyObject>['data'];
  /** Apply custom class(es) to rows */
  rowClassName?:
    | string
    | ((record: AnyObject, index: number, indent: number) => string);
  /** Assign unique keys to each table row */
  rowKey?: string | ((record: AnyObject, index?: number) => React.Key);
  /** Defines row selection configurations */
  rowSelection?: TableRowSelection<AnyObject>;
  /** Determines if the table is scrollable and the scroll configuration. Set to x: "max-content" by default */
  scroll?: AntTableProps['scroll'];
  /** Displays the header of the table */
  showHeader?: boolean;
  /** Renders sort icon */
  showSorterTooltip?: boolean;
  /** Defines the sort direction of each column */
  sortDirections?: SortOrder[];
  /** Sets table size */
  size?: 'medium' | 'small';
  /** Defines child nodes to render Table Summary */
  summary?: (data: readonly AnyObject[]) => React.ReactNode;
  /** Sets table layout */
  tableLayout?: 'auto' | 'fixed';
  /** Renders a title for the table */
  title?: (data: readonly AnyObject[]) => React.ReactNode;
  /** Method to trigger functions when changes occur to the table */
  onChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<AnyObject> | SorterResult<AnyObject>[],
    extra: TableCurrentDataSource<AnyObject>,
  ) => void;
  /** Methods for actions/listeners that occur on the Header Row of the table */
  onHeaderRow?: GetComponentProps<readonly TableColumnType<AnyObject>[]>;
  /** Methods for actions/listeners that occur on the Table Row of the table */
  onRow?: GetComponentProps<AnyObject>;
  /** Enables virtual scrolling for efficient rendering */
  virtual?: boolean;

  // Custom props
  /** Sets the header type */
  headerType?: 'default' | 'secondary';
  /** Sets the fill type of the table body cells */
  fillType?: 'default' | 'secondary';
  /** Apply custom class(es) */
  className?: string;
  /** Custom inline CSS styling */
  style?: React.CSSProperties;
  /** Assign a unique identifier */
  id?: string;
  defaultVisibleColumns?:React.Key[];
  settings?:boolean;
  //onScroll?: GetComponentProps<AnyObject>;
  search?:boolean;
  searchDirections?: 'start' | 'center' | 'end';
  searchPlaceholder?:string;
  dropDownFilter?:boolean;
  dropDownProps?:dropDownPropsType;
  /** Enables use of React.Ref to access and interact with the underlying component. */
  // TODO: Figure out the difference between Ref<HTMLDivElement> and Ref<Reference>
  // forwardRef?: React.Ref<HTMLDivElement>;
};