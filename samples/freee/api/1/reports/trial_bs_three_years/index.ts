/* eslint-disable */
import { Types } from '../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の貸借対照表(３期間比較)を取得する</p>
   * 
   * <h2 id="_2">定義</h2>
   * 
   * <ul>
   * 
   * <li>
   * <p>created_at : 作成日時</p>
   * </li>
   * 
   * <li>
   * <p>account_item_name : 勘定科目名</p>
   * </li>
   * 
   * <li>
   * <p>hierarchy_level: 階層レベル</p>
   * </li>
   * 
   * <li>
   * <p>parent_account_category_name: 上位勘定科目カテゴリー名(上層が存在する場合含まれる)</p>
   * </li>
   * <li>
   * <p>two_years_before_closing_balance:  前々年度期末残高 </p>
   * </li>
   * <li>
   * <p>last_year_closing_balance:  前年度期末残高 </p>
   * </li>
   * <li>
   * <p>closing_balance : 期末残高 </p>
   * </li>
   * <li>
   * <p>year_on_year : 前年比</p>
   * </li>
   * <h2 id="_3">注意点</h2>
   * <ul> <li>会計年度が指定されない場合、現在の会計年度がデフォルトとなります。</li> <li>絞り込み条件の日付と、月または年度は同時に指定することはできません。</li> <li>up_to_dateがfalseの場合、残高の集計が完了していません。最新の集計結果を確認したい場合は、時間を空けて再度取得する必要があります。</li>  </ul>
   * <h2 id="_4">レスポンスの例</h2>
   * 
   * <blockquote>
   * <p>GET https://api.freee.co.jp/api/1/reports/trial_bs_three_years?company_id=1&amp;fiscal_year=2017</p>
   * </blockquote>
   * 
   * <pre><code>{
   *   &quot;trial_bs_three_years&quot; :
   *     {
   *       &quot;company_id&quot; : 1,
   *       &quot;fiscal_year&quot; : 2017,
   *       &quot;created_at&quot; : &quot;2018-05-01 12:00:50&quot
   *       &quot;balances&quot; : [{
   *         &quot;account_item_id&quot; : 1000,
   *         &quot;account_item_name&quot; : &quot;現金&quot;,
   *         &quot;hierarchy_level&quot; : 2,
   *         &quot;parent_account_category_id&quot; : 100;
   *         &quot;parent_account_category_name&quot; : &quot;流動資産&quot;,
   *         &quot;two_year_before_closing_balance&quot; : 50000,
   *         &quot;last_year_closing_balance&quot; : 25000,
   *         &quot;closing_balance&quot; : 100000,
   *         &quot;year_on_year&quot; : 0.85
   *       },
   *       ...
   *       ]
   *     }
   * }</code></pre>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
      /** 会計年度 */
      fiscal_year?: number | undefined
      /** 発生月で絞込：開始会計月(mm) */
      start_month?: number | undefined
      /** 発生月で絞込：終了会計月(mm) */
      end_month?: number | undefined
      /** 発生日で絞込：開始日(yyyy-mm-dd) */
      start_date?: string | undefined
      /** 発生日で絞込：終了日(yyyy-mm-dd) */
      end_date?: string | undefined
      /** 勘定科目の表示（勘定科目: account_item, 決算書表示:group） */
      account_item_display_type?: 'account_item' | 'group' | undefined
      /** 内訳の表示（取引先: partner, 品目: item, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます */
      breakdown_display_type?: 'partner' | 'item' | 'account_item' | undefined
      /** 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます） */
      partner_id?: number | undefined
      /** 取引先コードで絞込（事業所設定で取引先コードの利用を有効にしている場合のみ利用可能です） */
      partner_code?: string | undefined
      /** 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます） */
      item_id?: number | undefined
      /** 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without） */
      adjustment?: 'only' | 'without' | undefined
    }

    status: 200
    resBody: Types.TrialBsThreeYearsResponse
  }
}
