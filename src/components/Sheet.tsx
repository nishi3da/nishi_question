import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import {
  ColDef,
  GridReadyEvent,
  ColumnResizedEvent,
  CellValueChangedEvent,
  ComponentStateChangedEvent,
} from "ag-grid-community";

import {
  initData,
  IRow,
  sampleData,
  openHeaderData,
  closeHeaderData,
  BoolTypeList,
  ExecTypeList,
  TargetTypeList,
} from "../initial_datas/sheet_datas";

const Sheet = (): JSX.Element => {
  // Gridのイベント捕捉用変数
  const gridRef = useRef<AgGridReact<IRow>>(null);
  // Gridのデータ用変数
  const [rowData, setRowData] = useState<IRow[]>();
  // オプションの展開・非表示ボタンのラベル用変数
  const [optionLable, setOptionLabel] =
    useState<string>("検索・動作オプション非表示");

  // 共通の設定
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      // 編集可能
      editable: true,
      // リサイズ時の余白設定
      autoSizePadding: 5,
      // 行の高さの自動調整
      autoHeight: true,
    };
  }, []);

  // ヘッダーと各列の設定
  const [columnDefs, setColumnDefs] = useState<ColDef[]>(openHeaderData);

  // Gridの準備ができた際（イベント）に起動する関数、データ初期化処理
  // 現在は、サンプルデータを読み込ませている
  const onGridReady = useCallback((params: CellValueChangedEvent) => {
    console.log("onGridReady", params);
    setRowData(sampleData);
    autoSizeAll();
  }, []);

  // onGridReady では 最初期画面の列幅が調整されないので
  // componetStateChangedに設定してみる
  const onComponentStateChangedEvent = useCallback(
    (event: ComponentStateChangedEvent) => {
      autoSizeAll();
    },
    []
  );

  // 列幅を自動で変更する関数
  const autoSizeAll = () => {
    console.log(gridRef.current);
    const allColumnIds: string[] = [];
    gridRef.current!.columnApi.getColumns()!.forEach((column) => {
      allColumnIds.push(column.getId());
    });
    gridRef.current!.columnApi.autoSizeColumns(allColumnIds, false);
  };

  // セルの値が変更された時時に実行する関数
  const onCellValueChanged = useCallback(() => {
    autoSizeAll();
  }, []);

  // 列幅が変更された際に実行される関数
  const onColumnResized = useCallback((params: ColumnResizedEvent) => {
    console.log("onColumnRisezed", params);
  }, []);

  // ResizeObserver loop limit exceeded Error対策
  useEffect(() => {
    window.addEventListener("error", (e) => {
      if (
        e.message === "ResizeObserver loop limit exceeded" ||
        e.message === "Script error."
      ) {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);

  // button
  const optionToggle = () => {
    console.log(columnDefs);
    if (columnDefs.length == openHeaderData.length) {
      setColumnDefs(closeHeaderData);
      setOptionLabel("検索・動作オプション表示");
    } else {
      setColumnDefs(openHeaderData);
      setOptionLabel("検索・動作オプション非表示");
    }
    autoSizeAll();
  };

  return (
    <div>
      <div
        style={{
          textAlign: "left",
          padding: "5px",
        }}
      >
        <button onClick={() => optionToggle()}>{optionLable}</button>
      </div>
      <div className="ag-theme-alpine" style={{ height: 800, width: 2000 }}>
        <AgGridReact
          rowData={rowData}
          ref={gridRef}
          rowMultiSelectWithClick={true}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowDragManaged={true}
          onGridReady={onGridReady}
          onColumnResized={onColumnResized}
          onCellValueChanged={onCellValueChanged}
          onComponentStateChanged={onComponentStateChangedEvent}
        />
      </div>
    </div>
  );
};

export default Sheet;
