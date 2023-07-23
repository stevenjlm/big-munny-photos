import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";
import { ContactGrid, hashField } from "@/utils/contactForm";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  try {
    const body = await req.json()
    let validator = new ContactGrid(body.name, body.email, body.subject, body.message);
    let validatorRes = validator.validateFormAPI();
    
    if (!validatorRes.isValid) {
      return NextResponse.json({ error: validatorRes.msg, status: 404 });
    }

    // DB ops skip for now
    // let userDb = await prisma.user.findUnique({where: {email: validator.email}})

    // if (userDb) {

    //   let lastUpdate: Date = userDb.updatedAt;
    //   let timeNow: number = Date.now();
    //   let delta = (timeNow - lastUpdate.getTime()) / 1000; // seconds
    //   console.log("user found, " + delta + "seconds since last message")

    //   var message = await prisma.message.create({
    //     data: {
    //       subject: validator.subject,
    //       message: validator.message,
    //       sent: false,
    //       authorId: userDb.id,
    //     },
    //   })
    // } else {

    //   var user = await prisma.user.create({
    //     data: {
    //       name: validator.name,
    //       email: validator.email
    //     },
    //   })
    //   var message = await prisma.message.create({
    //     data: {
    //       subject: validator.subject,
    //       message: validator.message,
    //       sent: false,
    //       authorId: user.id,
    //     },
    //   })
    // }

    await sendgrid.send({
      to: process.env.SENDGRID_SOURCE as string,
      from: process.env.SENDGRID_SOURCE as string,
      subject: `${body.subject}`,
      html: buildEmail(body),
    });
    // var message = await prisma.message.update({
    //   where: {id: message.id},
    //   data: {sent: true}
    // });
  } catch (error: any) {
    // console.log(error);
    return NextResponse.json({ error: error.message, status: (error.statusCode || 500) });
  }

  return NextResponse.json({ message: "sent", status: (200) });
}

function buildEmail(body: any): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html lang="en">
          <head>
            <meta charset="utf-8">
          
            <title>Bigmunny.com message: ${body.subject}</title>          
          </head>
          
          <body>
            <h3>Name: ${body.fullname}, Email: ${body.email} </h3>
            <h3>Message:</h3>
            <p>${body.message}</p>
          </body>
          </html>`
}
