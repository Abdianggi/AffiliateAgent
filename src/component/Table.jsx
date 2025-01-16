import React from "react";

const Table = ({ title, headers, data, isStatic, onEditClick, onRemoveClick }) => {
  return (
    <div className="mb-9">
      {title && (
        <div className="bg-[#E7F3FD] font-semibold flex justify-between items-center p-3 border-[1.5px]">
          <span>{title}</span>
          {onEditClick && (
            <button className="text-right" onClick={onEditClick}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          )}
        </div>
      )}

      <table className="table table-bordered w-full text-sm border border-gray-300">
        {headers && (
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className={`p-3 border-[1.5px] ${header.align}`}>
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {isStatic
            ? data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      colSpan={cell.colSpan || 1}
                      rowSpan={cell.rowSpan || 1}
                      className={`p-3 border-[1.5px]`}
                    >
                      {cell.content}
                    </td>
                  ))}
                </tr>
              ))
            : data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {headers.map((header, cellIndex) => (
                    <td key={cellIndex} className="p-3 border-[1.5px] font-light">
                      {header.key === "actions" && onRemoveClick ? (
                        <button
                          className="bg-transparent text-[#ED1B24] font-light"
                          onClick={() => onRemoveClick(row)}
                        >
                          <i className="fa-solid fa-trash mr-1"></i> Remove
                        </button>
                      ) : header.key === "status" ? (
                        <span
                          className={`py-1 px-5 rounded-full ${
                            row[header.key] === "Active"
                              ? "bg-hysuccess-100 text-hysuccess-500"
                              : "bg-hywarning-100 text-hywarning-500"
                          }`}
                        >
                          {row[header.key]}
                        </span>
                      ) : (
                        row[header.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
