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
   
document.getElementById("expense").value=""
document.getElementById("expenseDiscription").value=""
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

