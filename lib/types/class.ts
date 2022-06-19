export type ClassRegister = {
  name: string
  school?: string
  semester: Semester
  description?: string
  passcode: string
}

export enum Semester {
  FALL = 'fall',
  SPRING = 'spring',
  SUMMER = 'summer',
  WINTER = 'winter',
}