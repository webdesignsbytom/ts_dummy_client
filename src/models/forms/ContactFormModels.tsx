export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  businessName?: string;
  phoneNumber?: string;
  location?: string;
  message: string;
}

export const emptyContactFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  phoneNumber: '',
  location: '',
  businessName: '',
};
