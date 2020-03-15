import React from 'react';

export default function Logger({ log }) {
  return (
    <div>
      {
      log.map((l) => (
        <table border='1'>
          <tr>
            <td>
              {l.mac_address}
            </td>
            <td>{l.process_list}</td>
          </tr>
        </table>
      ))
    }
    </div>
  );
}
