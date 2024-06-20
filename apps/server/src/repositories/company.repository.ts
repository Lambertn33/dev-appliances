import { PrismaClient, Company } from "@prisma/client";

const prisma = new PrismaClient();

export class CompanyRepository {
  async getAllCompanies(): Promise<Company[]> {
    return prisma.company.findMany();
  }

  async createCompany(name: string, email: string): Promise<Company> {
    return prisma.company.create({ data: { name, email } });
  }

  async deleteCompany(id: number): Promise<void> {
    await prisma.company.delete({ where: { id } });
  }
}
