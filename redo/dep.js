function searchDepartments() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const table = document.getElementById("departmentTable");
    const rows = table.getElementsByTagName("tr");
  
    for (let i = 1; i < rows.length; i++) {
      let rowText = rows[i].textContent.toLowerCase();
      rows[i].style.display = rowText.includes(input) ? "" : "none";
    }
  }
  
  function sortTable(columnIndex) {
    const table = document.getElementById("departmentTable");
    let rows, switching, i, x, y, shouldSwitch;
    switching = true;
  
    while (switching) {
      switching = false;
      rows = table.rows;
  
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[columnIndex];
        y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
        
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
  
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }