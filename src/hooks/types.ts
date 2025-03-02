import parsePhoneNumberFromString from "libphonenumber-js";

export interface Employee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

export const formatPhoneNumber = (phone: string) => {
  const phoneNumber = parsePhoneNumberFromString(phone, 'BR');
  return phoneNumber ? phoneNumber.formatInternational() : phone;
};

