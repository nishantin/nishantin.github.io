import React, { ReactNode, CSSProperties } from 'react';
import { Input as AntInput, InputRef } from 'antd';
import { StatusIcon } from '../icon/svgs/status-icon';
//import { getClassName } from 'utils/get-class-name';

export type SearchProps = {
  /** Label content displayed before (on the left side of) the Input field */
  addonBefore?: ReactNode;
  /** Ability to remove content with a clear icon */
  allowClear?: boolean | { clearIcon?: ReactNode };
  /** Display element inline or as block (full width, new line before/after) */
  block?: boolean;
  /** Apply custom class(es) */
  className?: string;
  /** Sets the initial Input content */
  defaultValue?: string;
  /** Indicates Input is temporarily unavailable or inactive */
  disabled?: boolean;
  /** Show and customize an enter button after the Input */
  enterButton?: boolean | ReactNode;
  /** Adds a loading spinner when onSearch */
  loading?: boolean;
  /** Sets a maximum number of characters */
  maxLength?: number;
  /** Shows character count */
  showCount?:
    | boolean
    | {
        formatter: (info: {
          value: string;
          count: number;
          maxLength?: number;
        }) => ReactNode;
      };
  /** Sets validation status */
  status?: 'error' | 'warning';
  /** Custom inline CSS styling */
  style?: CSSProperties;
  /** Add prefix content to the Input box */
  prefixContent?: ReactNode;
  /** Add suffix content to the Input box */
  suffixContent?: ReactNode;
  /** Sets the value of the Input content */
  value?: string;
  /** Callback when user inputs information */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Callback functioned triggered when you click the search icon, clear icon, or press enter */
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>,
    info?: {
      source?: 'clear' | 'input';
    },
  ) => void;
  /** Greyed text that appears in an empty Input box */
  placeholder?: string;
  /** Assign a unique identifier */
  id?: string;
  /** Enables use of React.Ref to access and interact with the underlying component */
  forwardRef?: React.Ref<InputRef>;
};

/**
 * Search is a type of Input that can be used for querying and finding specific content or information within a system or application.
 
 * ## Usage Guidelines:
 * - Use sentence case capitalization for labels
 * - Use placeholder text only as secondary helper text
 */

export const Search = ({
  className,
  allowClear = true,
  status,
  prefixContent,
  suffixContent,
  forwardRef,
  block,
  style,
  ...rest
}: SearchProps) => {
  return (
    <AntInput.Search
      //className={getClassName(className)}
      allowClear={allowClear}
      status={status}
      prefix={prefixContent}
      suffix={
        <>
          {suffixContent}
          {status === 'error' && (
            <StatusIcon status={status} width={16} height={'100%'} />
          )}
          {status === 'warning' && (
            <StatusIcon status={status} width={16} height={'100%'} />
          )}
        </>
      }
      styles={{
        prefix: {
          columnGap: '8px',
          marginRight: prefixContent ? '8px' : '0px',
        },
        suffix: {
          columnGap: '8px',
          marginLeft: suffixContent || status ? '8px' : '0px',
        },
      }}
      style={{ ...style, width: block ? '100%' : 'auto' }}
      ref={forwardRef}
      {...rest}
    />
  );
};
