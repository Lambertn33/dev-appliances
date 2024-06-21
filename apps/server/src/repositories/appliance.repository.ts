import { PrismaClient, Appliance } from '@prisma/client';

const prisma = new PrismaClient();

export class ApplianceRepository {
  async createAppliance(
    jobId: number,
    userName: string,
    userEmail: string,
    text: string
  ): Promise<{
    appliance: Appliance;
    job: { name: string; company: { email: string } };
  }> {
    const job = await prisma.job.findUnique({
      where: { id: jobId },
      include: { company: true },
    });

    if (!job) {
      throw new Error('Job not found');
    }

    const appliance = await prisma.appliance.create({
      data: {
        jobId,
        userName,
        userEmail,
        text,
      },
    });

    return { appliance, job: { name: job.name, company: job.company } };
  }
}
