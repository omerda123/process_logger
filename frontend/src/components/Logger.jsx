import React from 'react';

export default function Logger({ log }) {
  return (
    <div>
      <table border="1" width="100%">
        <thead>
          <th>Mac Address</th>
          <th>Chunk ID</th>
          <th>Process ID</th>
          <th>Process Name</th>
        </thead>
        {
      log.map((l) => (
        <tbody>
          <tr>
            <td>{l.mac_address}</td>
            <td>{l.chunk_id}</td>
            <td>{l.pid}</td>
            <td>{l.name}</td>
          </tr>
        </tbody>
      ))
}
      </table>
    </div>
  );
}
