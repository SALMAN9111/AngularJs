var selectedRow = null

function onFormSubmit() {
    if (verifyUserDetails()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["rollNo"] = document.getElementById("rollNo").value;
    formData["cgpa"] = document.getElementById("cgpa").value;
    formData["gender"] = document.Student["gender"].value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.rollNo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.cgpa;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gender;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("cgpa").value = "";
    //document.getElementsByName("gender").value = "";
    document.Student["gender"].checked = false;
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("rollNo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("cgpa").value = selectedRow.cells[2].innerHTML;
    document.Student["gender"].value = selectedRow.cells[3].innerHTML;
    //sdfj
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.rollNo;
    selectedRow.cells[2].innerHTML = formData.cgpa;
    selectedRow.cells[3].innerHTML = formData.gender;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

function verifyUserDetails() {
    isValid = true;
    var userName = document.getElementById("fullName").value;
    var rollNo = document.getElementById("rollNo").value;
    var cgpa = document.getElementById("cgpa").value;
    var gender = document.Student.gender;


    if (userName == "" && rollNo == "" && cgpa == "" && gender.value.length <= 0) {
        alert("Fill the form");
        return false;
    }

    if (userName == "") {
        alert("Fill the username");
        return false;
    }
    if (rollNo == "") {
        alert("Fill the roll no");
        return false;
    }
    if (cgpa == "") {
        alert("Fill the cgpa");
        return false;
    }

    if (gender.value.length <= 0) {
        alert("Select Gender");
        return false;
    }
    return isValid;
}