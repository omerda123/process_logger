import React from 'react';
import Tree from 'react-d3-tree';


export default function Content(props) {
  const { p } = props;
  const data = {
    name: 'Parent',
    children: [{
      name: 'Child One',
      attributes: {
        pid: 1,
      },
      children: [
        {
          name: 'aaa',
          children: [],
        },
      ],
    }, {
      name: 'Child Two',
      children: [{
        name: 'bb',
        children: [],
      }],
    }],
  };

  const data2 = {
    name: 'root',
    children: [
      {
        name: 'System Idle Process',
        attributes: {
          pid: '0',
        },
        children: [],
      },
      {
        name: 'System',
        attributes: {
          pid: '4',
        },
        children: [
          {
            name: 'Secure System',
            children: [],
          },
          {
            name: 'Registry',
            children: [],
          },
          {
            name: 'smss.exe',
            children: [],
          },
          {
            name: 'Memory Compression',
            children: [],
          },
        ],
      },
      {
        name: 'Secure System',
        attributes: {
          pid: '72',
        },
        children: [],
      },
      {
        name: 'LsaIso.exe',
        attributes: {
          pid: '96',
        },
        children: [],
      },
      {
        name: 'svchost.exe',
        attributes: {
          pid: '100',
        },
        children: [],
      },
      {
        name: 'Registry',
        attributes: {
          pid: '128',
        },
        children: [],
      },
    ],
  };

  return (
    <div className="tree">
      {JSON.stringify(p)}
      <Tree
        data={data2}
        nodeRadius={15}
        margins={{
          top: 20, bottom: 10, left: 20, right: 200,
        }}
        gProps={{
          className: 'node',
        }}
        height={700}
        width={1000}
      />
    </div>
  );
}
