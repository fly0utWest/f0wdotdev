export function birthDateCounter(birthDate: string) {
  const now = new Date();
  const birth = new Date(birthDate);

  let age = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();
  const dayDiff = now.getDay() - birth.getDay();

  if (monthDiff === 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}
