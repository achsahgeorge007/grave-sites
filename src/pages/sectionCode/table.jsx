import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

import Paper from "@mui/material/Paper";
import { codeData } from "../../shared/constant/codeData";
import { MdModeEdit } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import { Button, Checkbox } from "@mui/material";

function SimpleTable() {
  const [tableData, settableData] = useState(codeData || []);
  const [checkId, setCheckId] = useState(null);

  console.log(tableData);

  const handleCheck = (e, id) => {
    setCheckId(id);
  };

  const editFunction = ({ id, code, description }) => {
    const data = tableData.map((item) => {
      return item?._id === id
        ? {
            ...item,
            code: code || item?.code || "",
            description: description || item?.description || "",
          }
        : item;
    });
    settableData(data);
  };

  const deleteFunction = (id) => {
    const data = tableData.filter((item) => item?._id != id);
    settableData(data);
  };

  return (
    <TableContainer component={Paper}>
      {checkId}
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Code</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.length > 0 ? (
            tableData.map((row) => (
              <TableRow key={Math.random() * (+row?._id || 1)}>
                <TableCell component="th" scope="row">
                  <Checkbox onChange={(e) => handleCheck(e)} />
                </TableCell>

                <TableCell component="th" scope="row">
                  {row?.code || 0}
                </TableCell>
                <TableCell align="right">{row?.description || ""}</TableCell>
                <TableCell align="right">
                  {
                    <Controller
                      id={row?._id}
                      editFunction={editFunction}
                      deleteFunction={deleteFunction}
                    />
                  }
                </TableCell>
              </TableRow>
            ))
          ) : (
            <p>No Data Found</p>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SimpleTable;

const Controller = ({ id, editFunction, deleteFunction }) => {
  return (
    <div className="">
      <Button
        variant="text"
        color="info"
        onClick={() => {
          editFunction(id);
        }}
      >
        <MdModeEdit />
      </Button>

      <Button
        variant="text"
        color="error"
        onClick={() => {
          deleteFunction(id);
        }}
      >
        <AiTwotoneDelete />
      </Button>
    </div>
  );
};
