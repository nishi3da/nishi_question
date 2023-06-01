import { CONST } from "../constants";
import ParameterRenderer from "../components/ParameterRenderer";

export interface IRow {
  // 番号
  number: number;
  // 実行
  exec: BoolStr;
  // 変換タイプ
  exec_type: ExecType;
  // 処理対象
  target: TargetType;
  // ロックレイヤー・オブジェクトの検索
  search_lock_object: BoolStr;
  // ロックストーリの検索
  search_lock_story: BoolStr;
  // 非表示レイヤー・オブジェクトの検索
  search_hidden_object: BoolStr;
  // マスターページの検索
  search_master_page: BoolStr;
  // 脚注の検索
  search_footer: BoolStr;
  // カナ・かなの区別
  distinguish_kana: BoolStr;
  // 半角・全角の区別
  distinguish_half_full: BoolStr;
  // オーバーライド消去
  clear_orverride: BoolStr;

  // パラメーター設定
  // ExecType=正規表現検索→段落スタイル適用
  et_para_search_word: string;
  et_para_replace_word: string;
  et_para_parastyle: string;

  // ExecType=正規表現検索→文字スタイル適用
  et_char_search_word: string;
  et_char_replace_word: string;
  et_char_charstyle: string;

  // ExecType=正規表現検索→CIDコード文字置換
  et_cid_search_word: string;
  et_cid_number: number;
  et_cid_charstyle: string;

  // ExecType=正規表現検索→正規表現置換
  et_reg_search_word: string;
  et_reg_replace_word: string;

  // ExecType=正規表現検索→正規表現置換
  et_ruby_search_word: string;
  et_ruby_charstyle: string;

  // ExecType=正規表現検索→アンカーオブジェクト配置
  et_obj_search_word: string;
  et_obj_library_item: string;

  // ExecType=検索→アンカー配置→テキスト割付
  et_objtxt_start_word: string;
  et_objtxt_end_word: string;
  et_objtxt_library_item: string;

  // ExecType=クエリ実
  et_query_name: string;
}

export const ExecTypeList = [
  CONST.EXEC_TYPE_PARA,
  CONST.EXEC_TYPE_CHAR,
  CONST.EXEC_TYPE_CID,
  CONST.EXEC_TYPE_REG,
  CONST.EXEC_TYPE_RUBY,
  CONST.EXEC_TYPE_OBJ,
  CONST.EXEC_TYPE_OBJTXT,
  CONST.EXEC_TYPE_QUERY,
];
export type ExecType = (typeof ExecTypeList)[number];

export const BoolTypeList = [
  CONST.BOOL_TYPE_TRUE,
  CONST.BOOL_TYPE_FALSE,
] as const;
export type BoolStr = (typeof BoolTypeList)[number];

export const TargetTypeList = [
  CONST.TARGET_TYPE_SELECTION,
  CONST.TARGET_TYPE_DOCUMENT,
];
export type TargetType = (typeof TargetTypeList)[number];

export const sampleData: IRow[] = [
  {
    number: 1,
    exec: CONST.BOOL_TYPE_TRUE,
    exec_type: CONST.EXEC_TYPE_PARA,
    target: CONST.TARGET_TYPE_SELECTION,
    search_lock_object: CONST.BOOL_TYPE_FALSE,
    search_lock_story: CONST.BOOL_TYPE_FALSE,
    search_hidden_object: CONST.BOOL_TYPE_FALSE,
    search_master_page: CONST.BOOL_TYPE_FALSE,
    search_footer: CONST.BOOL_TYPE_TRUE,
    distinguish_kana: CONST.BOOL_TYPE_TRUE,
    distinguish_half_full: CONST.BOOL_TYPE_TRUE,
    clear_orverride: CONST.BOOL_TYPE_TRUE,
    et_para_search_word: "",
    et_para_replace_word: "",
    et_para_parastyle: "[基本段落]",
    et_char_search_word: "",
    et_char_replace_word: "",
    et_char_charstyle: "[なし]",
    et_cid_search_word: "",
    et_cid_number: 1,
    et_cid_charstyle: "[なし]",
    et_reg_search_word: "",
    et_reg_replace_word: "",
    et_ruby_search_word: "(＜ルビ／)(.+?)(／)(.+?)(＞)",
    et_ruby_charstyle: "[なし]",
    et_obj_search_word: "",
    et_obj_library_item: "",
    et_objtxt_start_word: "",
    et_objtxt_end_word: "",
    et_objtxt_library_item: "",
    et_query_name: "",
  },
  {
    number: 2,
    exec: CONST.BOOL_TYPE_TRUE,
    exec_type: CONST.EXEC_TYPE_PARA,
    target: CONST.TARGET_TYPE_SELECTION,
    search_lock_object: CONST.BOOL_TYPE_FALSE,
    search_lock_story: CONST.BOOL_TYPE_FALSE,
    search_hidden_object: CONST.BOOL_TYPE_FALSE,
    search_master_page: CONST.BOOL_TYPE_FALSE,
    search_footer: CONST.BOOL_TYPE_TRUE,
    distinguish_kana: CONST.BOOL_TYPE_TRUE,
    distinguish_half_full: CONST.BOOL_TYPE_TRUE,
    clear_orverride: CONST.BOOL_TYPE_TRUE,
    et_para_search_word: "",
    et_para_replace_word: "",
    et_para_parastyle: "[基本段落]",
    et_char_search_word: "",
    et_char_replace_word: "",
    et_char_charstyle: "[なし]",
    et_cid_search_word: "",
    et_cid_number: 1,
    et_cid_charstyle: "[なし]",
    et_reg_search_word: "",
    et_reg_replace_word: "",
    et_ruby_search_word: "(＜ルビ／)(.+?)(／)(.+?)(＞)",
    et_ruby_charstyle: "[なし]",
    et_obj_search_word: "",
    et_obj_library_item: "",
    et_objtxt_start_word: "",
    et_objtxt_end_word: "",
    et_objtxt_library_item: "",
    et_query_name: "",
  },
  {
    number: 3,
    exec: CONST.BOOL_TYPE_TRUE,
    exec_type: CONST.EXEC_TYPE_PARA,
    target: CONST.TARGET_TYPE_SELECTION,
    search_lock_object: CONST.BOOL_TYPE_FALSE,
    search_lock_story: CONST.BOOL_TYPE_FALSE,
    search_hidden_object: CONST.BOOL_TYPE_FALSE,
    search_master_page: CONST.BOOL_TYPE_FALSE,
    search_footer: CONST.BOOL_TYPE_TRUE,
    distinguish_kana: CONST.BOOL_TYPE_TRUE,
    distinguish_half_full: CONST.BOOL_TYPE_TRUE,
    clear_orverride: CONST.BOOL_TYPE_TRUE,
    et_para_search_word: "",
    et_para_replace_word: "",
    et_para_parastyle: "[基本段落]",
    et_char_search_word: "",
    et_char_replace_word: "",
    et_char_charstyle: "[なし]",
    et_cid_search_word: "",
    et_cid_number: 1,
    et_cid_charstyle: "[なし]",
    et_reg_search_word: "",
    et_reg_replace_word: "",
    et_ruby_search_word: "(＜ルビ／)(.+?)(／)(.+?)(＞)",
    et_ruby_charstyle: "[なし]",
    et_obj_search_word: "",
    et_obj_library_item: "",
    et_objtxt_start_word: "",
    et_objtxt_end_word: "",
    et_objtxt_library_item: "",
    et_query_name: "",
  },
];

export const initData: IRow[] = [
  {
    number: 3,
    exec: CONST.BOOL_TYPE_FALSE,
    exec_type: CONST.EXEC_TYPE_REG,
    target: CONST.TARGET_TYPE_SELECTION,
    search_lock_object: CONST.BOOL_TYPE_FALSE,
    search_lock_story: CONST.BOOL_TYPE_FALSE,
    search_hidden_object: CONST.BOOL_TYPE_FALSE,
    search_master_page: CONST.BOOL_TYPE_FALSE,
    search_footer: CONST.BOOL_TYPE_TRUE,
    distinguish_kana: CONST.BOOL_TYPE_TRUE,
    distinguish_half_full: CONST.BOOL_TYPE_TRUE,
    clear_orverride: CONST.BOOL_TYPE_TRUE,
    et_para_search_word: "",
    et_para_replace_word: "",
    et_para_parastyle: "[基本段落]",
    et_char_search_word: "",
    et_char_replace_word: "",
    et_char_charstyle: "[なし]",
    et_cid_search_word: "",
    et_cid_number: 1,
    et_cid_charstyle: "[なし]",
    et_reg_search_word: "",
    et_reg_replace_word: "",
    et_ruby_search_word: "(＜ルビ／)(.+?)(／)(.+?)(＞)",
    et_ruby_charstyle: "[なし]",
    et_obj_search_word: "",
    et_obj_library_item: "",
    et_objtxt_start_word: "",
    et_objtxt_end_word: "",
    et_objtxt_library_item: "",
    et_query_name: "",
  },
];

export const openHeaderData = [
  // 0
  {
    rowDrag: true,
    headerName: "番号",
    field: "number",
  },
  // 1
  {
    headerName: "実行",
    field: "exec",
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: BoolTypeList,
    },
  },
  // 2
  {
    headerName: "変換タイプ",
    field: "exec_type",
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: ExecTypeList,
    },
  },
  // 3
  {
    headerName: "処理対象",
    field: "target",
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: TargetTypeList,
    },
  },
  // 4
  {
    headerName: "ロックレイヤー・オブジェクトの検索",
    field: "search_lock_object",
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: BoolTypeList,
    },
  },
  // 5
  {
    headerName: "ロックストーリーの検索",
    field: "search_lock_story",
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: BoolTypeList,
    },
  },
  // 6
  {
    headerName: "非表示レイヤー・オブジェクトの検索",
    field: "search_hidden_object",
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: BoolTypeList,
    },
  },
  // 7
  {
    headerName: "マスターページの検索",
    field: "search_master_page",
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: BoolTypeList,
    },
  },
  // 8
  {
    headerName: "脚注の検索",
    field: "search_footer",
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: BoolTypeList,
    },
  },
  // 9
  {
    field: "distinguish_kana",
    headerName: "カナ・かなの区別",
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: BoolTypeList,
    },
  },
  // 10
  {
    field: "distinguish_half_full",
    headerName: "半角／全角の区別",
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: BoolTypeList,
    },
  },
  // 11
  {
    field: "clear_orverride",
    headerName: "オーバーライド消去",
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: BoolTypeList,
    },
  },
  {
    headerName: "パラメーター設定",
    cellRenderer: ParameterRenderer,
    editable: false,
    //cellRendererParams: {},
  },
  // // 12
  // {
  //   field: "search_word",
  //   headerName: "検索文字",
  // },
  // // 13
  // {
  //   field: "replace_word",
  //   headerName: "置換文字",
  // },
  // // 14
  // {
  //   field: "paragraph_style",
  //   headerName: "段落スタイル",
  // },
  // // 15
  // {
  //   field: "character_style",
  //   headerName: "文字スタイル",
  // },
  // // 16
  // {
  //   field: "cid",
  //   headerName: "CID",
  // },
  // // 17
  // {
  //   field: "library_item",
  //   headerName: "ライブラリアイテム名",
  // },
  // // 18
  // {
  //   field: "start_mark",
  //   headerName: "アイテム開始記号",
  // },
  // // 19
  // {
  //   field: "end_mark",
  //   headerName: "アイテム終了記号",
  // },
  // // 20
  // {
  //   field: "query_name",
  //   headerName: "クエリ名",
  // },
];

const temp = openHeaderData.slice();
temp.splice(3, 9);
export const closeHeaderData = temp;
