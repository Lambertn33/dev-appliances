import { PrismaClient, Company } from "@prisma/client";

const prisma = new PrismaClient();

class CompanyService {
  async checkCompany(name: string, email: string): Promise<Company | null> {
    const existingCompany = await prisma.company.findFirst({
      where: {
        OR: [{ name }, { email }],
      },
    });
    return existingCompany;
  }
}

export default CompanyService;
