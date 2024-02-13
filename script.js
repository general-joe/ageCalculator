function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const dob = new Date(dobInput);
  const today = new Date();

  if (isNaN(dob)) {
    alert("Please enter a valid date of birth");
    return;
  }

  const ageInMilliseconds = today - dob;
  const ageInYears = new Date(ageInMilliseconds).getUTCFullYear() - 1970;

  document.getElementById(
    "result"
  ).innerHTML = `Your age is ${ageInYears} years.`;
}
