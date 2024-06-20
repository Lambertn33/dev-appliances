import { setupMailer } from "./setup";

interface Job {
  name: string;
  company: {
    email: string;
  };
}

export const receiveApplicationFromUser = async (
  job: Job,
  jobId: number,
  userEmail: string,
  userName: string,
  text: string
) => {
  const transporter = await setupMailer();
  return await transporter.sendMail({
    from: '"Job Portal" <no-reply@jobportal.com>',
    to: job.company.email,
    subject: `New Job Application for ${job.name}`,
    text: `A new application has been received for the job "${job.name}" (ID: ${jobId}).
    \nApplicant Name: ${userName}
    \nApplicant Email: ${userEmail}
    \nApplication Text: ${text}`,
  });
};
