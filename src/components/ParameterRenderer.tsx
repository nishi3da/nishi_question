import { CONST } from "../constants";

import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";

import {
  ColDef,
  ColumnResizedEvent,
  CellValueChangedEvent,
  ComponentStateChangedEvent,
} from "ag-grid-community";

import { ICellRendererComp, ICellRendererParams } from "ag-grid-community";
import { IRow } from "../initial_datas/sheet_datas";

export default (props: ICellRendererParams) => {
  console.log("-----");
  console.log(props);
  const rowData: IRow = props.data;
  const execType: string = rowData.exec_type;
  console.log(rowData);

  switch (execType) {
    case CONST.EXEC_TYPE_PARA:
      return (
        <div>
          <span>検索文字列：</span>
          <input type="text" value={rowData.et_para_search_word} />
          　　
          <span>置換文字列：</span>
          <input type="text" value={rowData.et_para_replace_word} />
          　　
          <span>段落スタイル：</span>
          <input type="text" value={rowData.et_para_parastyle} />
        </div>
      );
    case CONST.EXEC_TYPE_CHAR:
      return (
        <div>
          <span>検索文字列：</span>
          <input type="text" value={rowData.et_char_search_word} />
          　　
          <span>置換文字列：</span>
          <input type="text" value={rowData.et_char_replace_word} />
          　　
          <span>文字スタイル：</span>
          <input type="text" value={rowData.et_char_charstyle} />
        </div>
      );
    case CONST.EXEC_TYPE_CID:
      return (
        <div>
          <span>検索文字列：</span>
          <input type="text" value={rowData.et_cid_search_word} />
          　　
          <span>CID：</span>
          <input type="text" value={rowData.et_cid_number} />
          　　
          <span>文字スタイル：</span>
          <input type="text" value={rowData.et_cid_charstyle} />
        </div>
      );
    case CONST.EXEC_TYPE_REG:
      return (
        <div>
          <span>検索文字列：</span>
          <input type="text" value={rowData.et_reg_search_word} />
          　　
          <span>置換文字列：</span>
          <input type="text" value={rowData.et_reg_replace_word} />
        </div>
      );
    case CONST.EXEC_TYPE_RUBY:
      return (
        <div>
          <span>検索文字列：</span>
          <input type="text" value={rowData.et_ruby_search_word} />
          　　
          <span>文字スタイル：</span>
          <input type="text" value={rowData.et_ruby_charstyle} />
        </div>
      );
    case CONST.EXEC_TYPE_OBJ:
      return (
        <div>
          <span>検索文字列：</span>
          <input type="text" value={rowData.et_obj_search_word} />
          　　
          <span>ライブラリアイテム名：</span>
          <input type="text" value={rowData.et_obj_library_item} />
        </div>
      );
    case CONST.EXEC_TYPE_OBJTXT:
      return (
        <div>
          <span>開始記号：</span>
          <input type="text" value={rowData.et_objtxt_start_word} />
          　　
          <span>終了記号：</span>
          <input type="text" value={rowData.et_objtxt_end_word} />
          　　
          <span>ライブラリアイテム名：</span>
          <input type="text" value={rowData.et_objtxt_library_item} />
        </div>
      );
    case CONST.EXEC_TYPE_QUERY:
      return (
        <div>
          <span>クエリ：</span>
          <input type="text" value={rowData.et_query_name} />
          <input type="radio" name="test" value="a" />
          <input type="radio" name="test" value="b" />
          <input type="radio" name="test" value="c" />
          <select name="test" id="test">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
          </select>
        </div>
      );
  }
};
