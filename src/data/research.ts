// Research card data.
// TODO: replace these placeholder entries with real published threads /
// articles from the A* Audit team.

export type DefiSystem = 'AMM' | 'LENDING' | 'CDP' | 'GENERAL';
export type ContentType =
  | 'BUG BREAKDOWN'
  | 'CONCEPT EXPLAINER'
  | 'POST-MORTEM'
  | 'CHALLENGE';

export interface ResearchItem {
  /** DeFi system the piece concerns. */
  tag: DefiSystem;
  /** Kind of writing. */
  type: ContentType;
  /** Human-readable date, e.g. "May 2026". */
  date: string;
  /** Display title. */
  title: string;
  /** One-line summary shown on the card. */
  summary: string;
  /** Outbound link (thread, article, blog post). */
  url: string;
}

export const research: ResearchItem[] = [
  {
    tag: 'LENDING',
    type: 'BUG BREAKDOWN',
    date: 'May 2026',
    title: 'Liquidation swaps the borrower',
    summary: 'A repay transaction lands after a liquidator reassigns the position — and pays a stranger\'s loan.',
    url: 'https://x.com/Astaraudit/status/2051095133857440221',
  },
  {
    tag: 'LENDING',
    type: 'BUG BREAKDOWN',
    date: 'May 2026',
    title: 'Normal borrowing blocks the liquidation',
    summary: "ZeroLend stripped Aave's aToken fallback from liquidation, so normal borrowing can drain the collateral reserve and permanently block liquidators from seizing anything.",
    url: 'https://x.com/Astaraudit/status/2052184437547475029',
  },
  {
    tag: 'LENDING',
    type: 'BUG BREAKDOWN',
    date: 'May 2026',
    title: 'Early settlement breaks the batch',
    summary: "Wildcat's batched withdrawal lets lenders settle before the batch is fully populated, so early executors take more than their share and the last lender's funds get permanently stuck.",
    url: 'https://x.com/Astaraudit/status/2053262243916382226',
  },
];
