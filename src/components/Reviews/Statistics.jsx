import * as React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const createRow = (feedbackType, count) => {
  return { feedbackType, count };
};

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
    
  const rows = [
    createRow("Good:", good),
    createRow("Neutral:", neutral),
    createRow("Bad:", bad),
    createRow("Total:", total),
    createRow("Positive Feedback:", positivePercentage + ' %'),
  ];

  return (
    <>
      <TableContainer
        sx={{ maxWidth: 250, border: `1px solid white` }}
        component={Paper}
      >
        <Table
          sx={{ maxWidth: 250, border: "1px solid white" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Feedback Type</TableCell>
              <TableCell align="right">Number of Feedbacks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.feedbackType}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.feedbackType}
                </TableCell>
                <TableCell align="right">{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
