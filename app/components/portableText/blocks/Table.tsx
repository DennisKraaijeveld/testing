export default function Table({ value }: any) {
  return (
    <table className="min-w-full">
      <tbody>
        {value.rows &&
          value.rows.length &&
          value?.rows?.map((row: any) => (
            <tr key={row._key}>
              {row.cells.map((cell: any, cellIndex: number) => (
                <td
                  key={`${row._key}-cell-${cellIndex}`}
                  className="whitespace-nowrap py-4 text-sm [&:not(:first-child)]:font-medium [&:not(:first-child)]:text-base font-light first:w-1/3"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  )
}
