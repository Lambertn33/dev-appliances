import { setupMailer } from "./setup";

interface Job {
  name: string;
}

export const sendApplicationToCompany = async (
  userEmail: string,
  userName: string,
  jobId: number,
  job: Job
) => {
  const transporter = await setupMailer();
  return await transporter.sendMail({
    from: '"Job Portal" <no-reply@jobportal.com>',
    to: userEmail,
    subject: "Job Application Received",
    text: `Dear ${userName}, your application for the job "${job.name}" (ID: ${jobId}) has been received.`,
  });
};
