import { type ColumnInfo } from '../types'

interface Props {
  rows: Record<string, unknown>[]
  columns: ColumnInfo[] | string[]
  compact?: boolean
}

function getColumns(columns: ColumnInfo[] | string[]): string[] {
  if (columns.length === 0) return []
  if (typeof columns[0] === 'string') return columns as string[]
  return (columns as ColumnInfo[]).map(c => c.name)
}

function getColumnMeta(columns: ColumnInfo[] | string[], name: string): ColumnInfo | null {
  if (columns.length === 0 || typeof columns[0] === 'string') return null
  return (columns as ColumnInfo[]).find(c => c.name === name) || null
}

function formatValue(val: unknown): string {
  if (val === null || val === undefined) return 'NULL'
  if (typeof val === 'object') return JSON.stringify(val)
  return String(val)
}

export default function DataTable({ rows, columns, compact = false }: Props) {
  const colNames = getColumns(columns)

  if (rows.length === 0) {
    return (
      <div className="text-center py-12 text-neutral-400 text-sm">
        No rows to display
      </div>
    )
  }

  return (
    <div className="overflow-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-neutral-200 bg-neutral-50">
            {colNames.map(col => {
              const meta = getColumnMeta(columns, col)
              return (
                <th
                  key={col}
                  className={`text-left font-medium text-neutral-500 whitespace-nowrap ${
                    compact ? 'px-3 py-2' : 'px-4 py-3'
                  }`}
                >
                  <span>{col}</span>
                  {meta?.primaryKey && (
                    <span className="ml-1 text-amber-500 text-xs" title="Primary Key">🔑</span>
                  )}
                  {meta?.type && (
                    <span className="ml-1.5 text-neutral-400 text-xs font-normal">{meta.type}</span>
                  )}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
            >
              {colNames.map(col => {
                const val = row[col]
                const isNull = val === null || val === undefined
                return (
                  <td
                    key={col}
                    className={`${compact ? 'px-3 py-1.5' : 'px-4 py-2.5'} ${
                      isNull ? 'text-neutral-400 italic' : 'text-neutral-700'
                    } whitespace-nowrap max-w-xs overflow-hidden text-ellipsis`}
                    title={formatValue(val)}
                  >
                    {formatValue(val)}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
