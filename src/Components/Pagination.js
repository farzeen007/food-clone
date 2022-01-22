import React from "react";

function Pagination(props) {
  const showNextDishes = (event) => {
      props.setCurrentPage(event.target.id)
  };
  let totalPages = [];
  for (
    let i = 1;
    i <= Math.ceil(props.filtered.length / props.itemsPerPage);
    i++
  ) {
    totalPages.push(i);
  }
  let pages = totalPages.map((item) => {
    return <div id={item} onClick={showNextDishes}>{item}</div>;
  });
  return (
    <div className="pagination">
      {pages}
    </div>
  );
}

export default Pagination;
