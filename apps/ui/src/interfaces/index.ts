export interface Job {
  id: number;
  name: string;
  description: string;
  companyId: number;
  company: {
    name: string;
    email: string;
  };
}
