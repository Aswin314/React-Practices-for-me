import React, { useState } from "react";

const TotalPage = () => {
  // 100 dummy items
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h2>Pagination Example</h2>

      {currentItems.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <button
        onClick={() => setCurrentPage((p) => p - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <span>
        {" "}
        Page {currentPage} of {totalPages}{" "}
      </span>

      <button
        onClick={() => setCurrentPage((p) => p + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default TotalPage;
