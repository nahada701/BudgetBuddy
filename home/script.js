nameofuser.innerHTML=localStorage.getItem("username")
    




const select = (idname) => {
    // Remove "selected" class from all sidebar items
    document.querySelectorAll('.eachitem').forEach(item => item.classList.remove('selected'));
    
    // Add "selected" class to the clicked item
    document.getElementById(idname).classList.add('selected');
}
let count=1
const addIncome=()=>{
    //sl no
    document.getElementById("details").classList.remove("d-none")
    //balance
    let balance=Number(document.getElementById("balance").innerText)
   
    //income
    const income=Number(document.getElementById("income").value)
    //discription
    const discription=document.getElementById("icnomeDiscription").value

    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = now.getFullYear();
    //date
    const formattedDate = `${day}/${month}/${year}`;
    
    //newbalance
    balance+=income
    if(income!=0 || discription!==""){
        document.getElementById("balance").innerText=balance
        document.getElementById("incomeTable").innerHTML+=`    
        <tr>
            <td>${count}</td>
            <td>${income}</td>
            <td>${discription}</td>
            <td>${balance}</td>
            <td>${formattedDate}</td>
        </tr>
    `
    count++
       
    document.getElementById("income").value=""
    document.getElementById("icnomeDiscription").value=""
    }

else{
    alert("please enter values")
}
}
sl=1
const addExpense=()=>{
    document.getElementById("details").classList.remove("d-none")

    //sl no
   
    //balance
    let balance=Number(document.getElementById("balance").innerText)
   
    //income
    const expense=Number(document.getElementById("expense").value)
    //discription
    const discription=document.getElementById("expenseDiscription").value

    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = now.getFullYear();
    //date
    const formattedDate = `${day}/${month}/${year}`;
    
    //newbalance
    balance-=expense
    if(expense!=0 || discription!==""){
        document.getElementById("balance").innerText=balance
        document.getElementById("expenseTable").innerHTML+=`    
        <tr>
            <td>${sl}</td>
            <td>${expense}</td>
            <td>${discription}</td>
            <td>${balance}</td>
            <td>${formattedDate}</td>
        </tr>
    `
    sl++
    
    document.getElementById("expense").value=""
    document.getElementById("expenseDiscription").value=""
    }
    else{
        alert("please enter amount")
    }


}

// Function to export table data to CSV
document.getElementById("exportCsvBtn").addEventListener("click", function() {
    // Get the income table and expense table
    const incomeTable = document.getElementById("incomeTable");
    
    const expenseTable = document.getElementById("expenseTable");


    // Combine both tables into a CSV format
    let csvData = "Income Details\nSl no, Amount, Description, Balance, Date\n";
    csvData += convertTableToCSV(incomeTable);
    csvData += "\nExpense Details\nSl no, Amount, Description, Balance, Date\n";
    csvData += convertTableToCSV(expenseTable);

    // Create a link element to trigger download
    const hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);
    hiddenElement.target = "_blank";
    hiddenElement.download = "transaction_details.csv";
    hiddenElement.click();
});

// Function to convert table rows to CSV format
function convertTableToCSV(table) {
    let csv = '';
    const rows = table.querySelectorAll('tr');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td, th');
        const rowData = Array.from(cells)
            .map(cell => cell.textContent)
            .join(","); // Join each column with a comma
        csv += rowData + "\n"; // Add the row data with a new line
    });
    return csv;
}
document.getElementById("searchInput").addEventListener("input", function () {
    const searchValue = this.value.toLowerCase(); // Get input value and convert to lowercase
    const rows = document.querySelectorAll("#details tbody tr"); // Get all table rows

    rows.forEach(row => {
        const rowText = row.textContent.toLowerCase(); // Get the row's text content
        if (rowText.includes(searchValue)) {
            row.style.display = ""; // Show row if it matches
        } else {
            row.style.display = "none"; // Hide row if it doesn't match
        }
    });
});