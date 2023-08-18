console.log("Weekly Salary for empployees 2023\n")
console.log("##############################################################\n")
console.log("please enter your name, wage and worked per hours\n")
function calculateWeeklySalary(hourlyWage, hoursWorked) {
    const regularHours = Math.min(hoursWorked, 60);
    const overtimeHours = Math.max(hoursWorked - 60, 0);

    const regularPay = regularHours * hourlyWage;
    const overtimePay = overtimeHours * (hourlyWage * 3);

    const totalPay = regularPay + overtimePay;
    return totalPay;
}

// Function to get employee name from the user
function getEmployeeName() {
    const name = prompt("Enter your name:");
    return name;
}

// Call the function to get employee name
const employeeName = getEmployeeName();

// Get input hourly salary and hours worked from the user
const hourlyWageInput = prompt("Enter hourly salary:");
const hoursWorkedInput = prompt("Enter hours worked:");

// Convert input to numbers
const hourlyWage = parseFloat(hourlyWageInput);
const hoursWorked = parseFloat(hoursWorkedInput);

// Check if input is valid
if (isNaN(hourlyWage) || isNaN(hoursWorked) || hoursWorked >= 60) {
    console.log("Invalid input. Please enter valid numbers and ensure hours worked is less than 60.");
} else {
    const weeklySalary = calculateWeeklySalary(hourlyWage, hoursWorked);
    console.log(`Employee: ${employeeName}`);
    console.log(`Weekly Salary: $${weeklySalary.toFixed(2)}`);
}
