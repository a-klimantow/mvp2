import React from 'react'
import styled from 'styled-components'

export const AppTable = ({title, data=[]}) => {
  return (
    <TableWrap>
      <caption>{title}</caption>
      <tbody>
        {
          data.map(item => (
            <tr key={item.title}>
              <th>{item.title}</th>
              <td>{item.text}</td>
            </tr>
          ))
        }
      </tbody>
    </TableWrap>
  )
}

const TableWrap = styled.table`
  width: 100%;
  table-layout: fixed;

  caption {
    caption-side: top;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #333;
    margin-bottom: 16px;
  }

  tr {
    border-top: 1px solid #E6EBFF;
    border-bottom: 1px solid #E6EBFF;
  }

  th, td {
    padding: 8px;
    font-size: 12px;
    line-height: 16px;
    font-weight: normal;
  }

  th {
    color: #828282;
  }

  td {
    color: #4F4F4F;
  }
`