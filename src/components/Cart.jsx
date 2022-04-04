import React, { useMemo, useRef, useState, useEffect } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import styled from "styled-components";
import refresh from "Images/refresh.png";

export default function Cart() {

  const data = useMemo(() => [
    {
      number: '1',
      group: 'World',
      name: 'slefds',
      extra: <button>삭제</button>
    },
    {
      number: '2',
      group: 'World',
      name: 'slefds',
      extra: <button>삭제</button>
    },{
      number: '3',
      group: 'World',
      name: 'slefds',
      extra: <button>삭제</button>
    }
  ], []);

  const columns = useMemo(
    () => [
      {
        Header: 'no',
        accessor: 'number',
      },
      {
        Header: '서비스 그룹',
        accessor: 'group',
      },
      {
        Header: '서비스명',
        accessor: 'name',
      },
      {
        Header: '삭제',
        accessor: 'extra',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter
  } = useTable({ columns, data }, useGlobalFilter, useSortBy)

  const handleSubmit = (event) => {
    event.preventDefault();
    setGlobalFilter(event.target.elements.filter.value);
  };

  const [isActive, setIsActive] = useState(false);
  const ref = useRef([]);
  const onClick = e => setIsActive(!isActive);
  const onClickItem = e => {
    let v = e.target.textContent;
    ref.current[1].value = v == '전체' ? '' : v;
    ref.current[2].click();
  }
  const onClickRefresh = e => {
    ref.current[1].value = '';
    ref.current[2].click();
  }

  useEffect(() => {
    const clickHandler = e => {
      if(ref.current[0] !== null && !ref.current[0].contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    isActive && window.addEventListener('click', clickHandler);
    return () => window.removeEventListener('click', clickHandler);
  }, [isActive, ref.current[0]])

  const list = ['전체','이동형 비전센서','CCTV','스마트 스테이션', '바디캠']

  return(
    <main>
      <Article>
        <Section>
          <Dropdown className={`${isActive ? 'active' : ''}`} onClick={onClick}>
            <div ref={e => ref.current[0] = e}>서비스 그룹</div>
            <ul className={`${isActive ? 'active' : ''}`}>{list && list.map((c, i) => (<li key={i} onClick={onClickItem}>{c}</li>))}</ul>
          </Dropdown>
          <Search>
            <form onSubmit={handleSubmit}>
              <input type="text" name="filter" ref={e => ref.current[1] = e} />
              <input type="submit" value="검색" ref={e => ref.current[2] = e} />
            </form>
            <img ref={e => ref.current[3] = e} src={refresh} alt="refresh" onClick={onClickRefresh} />
          </Search>
        </Section>
        
        <section>
          <Table {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}</th>)}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </section>

        <section>
          <Apply>
            신청하기
          </Apply>
        </section>
      </Article>
    </main>
  )
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Dropdown = styled.div`
  padding: 5px 10px;
  border: 1px solid black;
  align-self: center;
  text-align: center;

  min-width: 200px;
  text-decoration: none;
  color: #000;

  position: relative;
  &:hover {
    cursor: pointer;
  }
  &.active {
    background-color: #666 !important;
    color: #fff !important;
  }
  & ul {
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    width: 100%;
    background-color: #fff;
    opacity: 0;
    visibility: hidden;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }

  & ul.active {
    opacity: 1;
    visibility: visible;
  }
  & li {
    padding-top: 5px;
    padding-bottom: 5px;
    color: black;
    border-bottom: 1px solid #666666;
  }

  & li:last-child {
    border-bottom: none;
  }

  & li:hover {
    background-color: #dddddd;
    cursor: pointer;
  }

  & a {
    color: black;
    text-decoration: none;
    display: block;
  }
`;

const Search = styled.section`
  display: flex;
  gap: 5px;

  & form {
    display: flex;
    gap: 5px;
  }

  & input {
    box-sizing: border-box;
    margin: 1px;
    padding: 0px 5px;
    border: 1px solid black;
    border-radius: 5px;
    height: 30px;
  }

  & img:hover {
    cursor: pointer;
  }
`;

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border: 1px solid black;
  border-collapse: collapse;

  & th, & td {
    text-align: center;
    border: 1px solid black;
    padding-top: 7px;
    padding-bottom: 7px;
  }

  & th {
    background-color: #dfdfdf;
  }

  & th:nth-child(1) {
    width: 10%;
  }

  & th:nth-child(2) {
    width: 20%;
  }

  & th:nth-child(4) {
    width: 10%;
  }
`;

const Apply = styled.div`
  margin-left: auto;
  padding: 5px 10px;
  border: 1px solid black;
  align-self: center;
  text-align: center;
  width: 100px;
  text-decoration: none;
  color: #000;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;