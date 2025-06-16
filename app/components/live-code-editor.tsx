"use client";

import { useState } from "react";
import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Copy, RotateCcw } from "lucide-react";
import { Card } from "antd";
import { Button } from "@/components/core-component/button/button";
import { Drawer } from "@/components/core-component/drawer/index";
import { Radio, Space } from "antd";
import { Table } from "@/components/core-component/table/index";
import EditableInputCell from "@/components/core-component/table/EditableInputCell";
import sortDataByType from "@/components/core-component/table/utils/sorting/sortDataByType";
import EditableCellDatePicker from "@/components/core-component/table/EditableCellDatePicker";
import EditableCheckboxCell from "@/components/core-component/table/EditableCheckboxCell";
import DropDownWrapper from "@/components/core-component/table/common-dropdown/DropdownWrapper";

interface LiveCodeEditorProps {
  code: string;
  title?: string;
  description?: string;
  scope?: Record<string, any>;
}

export function LiveCodeEditor({
  code,
  title = "Live Example",
  description,
  scope = {},
}: LiveCodeEditorProps) {
  const [currentCode, setCurrentCode] = useState(code);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(currentCode);
  };

  const resetCode = () => {
    setCurrentCode(code);
  };

  const liveScope = {
    Button,
    Drawer,
    Radio,
    Space,
    Table,
    EditableInputCell,
    EditableCellDatePicker,
    EditableCheckboxCell,
    DropDownWrapper,
    React,
    sortDataByType,
    ...scope,
  };
  return (
    <Card className="w-full">
      <Card title={title} extra={
        <div className="flex gap-2">
          <Button
        variant="outlined"
        size="small"
        onClick={resetCode}
        className="gap-2"
          >
        <RotateCcw className="w-4 h-4" />
        Reset
          </Button>
          <Button
        variant="outlined"
        size="small"
        onClick={copyToClipboard}
        className="gap-2"
          >
        <Copy className="w-4 h-4" />
        Copy
          </Button>
        </div>
      }>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">
        {description}
          </p>
        )}

        <LiveProvider code={currentCode} scope={liveScope} noInline={false}>
          {/* Live Preview Section */}
          <div className="space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground">
          Preview
        </h4>
        <div className="border rounded-md p-6 bg-background min-h-[120px] flex items-center justify-center">
          <LivePreview />
        </div>
        <LiveError className="p-2 bg-destructive/10 text-destructive text-sm rounded" />
          </div>

          {/* Live Code Editor Section */}
          <div className="space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground">Code</h4>
        <div className="border rounded-md overflow-hidden">
          <LiveEditor
            onChange={setCurrentCode}
            style={{
          fontFamily:
            'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
          fontSize: "14px",
          backgroundColor: "hsl(var(--muted))",
          minHeight: "200px",
          padding: "16px",
            }}
          />
        </div>
          </div>
        </LiveProvider>
      </Card>
    </Card>
  );
}
